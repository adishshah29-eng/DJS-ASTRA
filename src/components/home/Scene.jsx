import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, useGLTF, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FALLBACK_MODEL = '/models/Raudra3DModel.glb';

function BotModel({ bot, index, totalBots, totalPages }) {
  const { modelUrl, rotation: customRotation, scale: customScale } = bot;
  const { scene } = useGLTF(modelUrl || FALLBACK_MODEL);
  const clonedScene = useMemo(() => {
    const s = scene.clone();
    if (customRotation) s.rotation.set(...customRotation);
    if (customScale) s.scale.setScalar(customScale);
    return s;
  }, [scene, customRotation, customScale]);
  const ref = useRef();
  const ringRef = useRef();
  const scroll = useScroll();
  const { viewport } = useThree();

  useFrame((state) => {
    const currentScrollPage = scroll.offset * (totalPages - 1);
    const distance = currentScrollPage - (index + 1);
    
    let botVis = 0;
    let moveX = -1.2; // offscreen left
    let targetRotation = 0; 

    if (distance <= -0.6) {
      botVis = 0; moveX = 1.2; targetRotation = -Math.PI * 0.5;
    } else if (distance < -0.3) {
      // Entrance from right
      let t = (distance + 0.6) / 0.3;
      const ease = 1 - Math.pow(1 - t, 3);
      botVis = ease;
      moveX = 1.2 - (ease * 0.7); 
      targetRotation = -Math.PI * 0.5 + (ease * Math.PI * 0.5);
    } else if (distance < 0.3) {
      // Hold at Right Side
      botVis = 1;
      moveX = 0.5;
      targetRotation = 0; 
    } else if (distance < 0.6) {
      // Exit out to the top right/back
      let t = (distance - 0.3) / 0.3;
      const ease = t * t * t;
      botVis = 1 - ease;
      moveX = 0.5 + (ease * 0.7);
      targetRotation = ease * Math.PI * 0.5;
    } else {
      botVis = 0; moveX = 1.2; targetRotation = Math.PI * 0.5;
    }

    if (ref.current) {
      ref.current.scale.setScalar(
        THREE.MathUtils.lerp(ref.current.scale.x, botVis * 2.4, 0.08) // scaled down to ensure it is fully shown
      );
      ref.current.position.x = THREE.MathUtils.lerp(
        ref.current.position.x,
        moveX * viewport.width * 0.5,
        0.08
      );
      // Lowered Y position: origin is at bottom of model, so lowering it centers it with text block
      ref.current.position.y = -0.4 + Math.sin(botVis * Math.PI) * 0.2;
      
      // Keep slow rotation during hold phase, plus the targeted rotation path
      ref.current.rotation.y = targetRotation + (state.clock.elapsedTime * 0.2);
      ref.current.rotation.x = 0.1; // slight stable downward tilt

      clonedScene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = THREE.MathUtils.lerp(
            child.material.opacity,
            botVis > 0.05 ? 1 : 0,
            0.1
          );
        }
      });
    }

    // Spinning arena ring
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      // Shrink ring significantly to fit the screen
      ringRef.current.scale.setScalar(botVis * 2.0);
      ringRef.current.material.opacity = botVis * 0.2;
    }
  });

  return (
    <group ref={ref}>
      {/* Arena ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[1.2, 1.3, 64]} />
        <meshBasicMaterial color="#C8A96E" transparent side={THREE.DoubleSide} />
      </mesh>
      {/* Second ring, counter-spin via rotation offset */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <primitive object={clonedScene} />
      </Float>
    </group>
  );
}

// Pulsing combat light — red/gold that reacts to scroll position
function CombatLight({ bots }) {
  const lightRef = useRef();
  const scroll = useScroll();

  useFrame((state) => {
    if (lightRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 3) * 0.5 + 0.5;
      lightRef.current.intensity = 0.5 + pulse * 1.5;
      // Shift color subtly between red and gold as scroll progresses
      const r = THREE.MathUtils.lerp(1.0, 0.78, scroll.offset);
      const g = THREE.MathUtils.lerp(0.23, 0.66, scroll.offset);
      const b = THREE.MathUtils.lerp(0.19, 0.43, scroll.offset);
      lightRef.current.color.setRGB(r, g, b);
    }
  });

  return <pointLight ref={lightRef} position={[0, 2, 3]} intensity={1} />;
}

export default function Scene({ bots, totalPages }) {
  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#E8E0D4" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#C8A96E" />
      <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={2} color="#FF3B30" />
      <CombatLight bots={bots} />

      {/* Background star field */}
      <Stars radius={80} depth={50} count={800} factor={3} saturation={0} fade speed={0.5} />

      {/* Bot models */}
      {bots.map((bot, i) => (
        <BotModel
          key={bot.id || i}
          bot={bot}
          index={i}
          totalBots={bots.length}
          totalPages={totalPages}
        />
      ))}
    </>
  );
}

useGLTF.preload(FALLBACK_MODEL);
