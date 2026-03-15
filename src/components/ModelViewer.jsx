import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url, rotation, scale }) {
    const { scene } = useGLTF(url);

    useEffect(() => {
        if (rotation) scene.rotation.set(...rotation);
        if (scale) scene.scale.setScalar(scale);
        
        scene.traverse((child) => {
            if (child.isMesh && child.material) {
                const materials = Array.isArray(child.material) ? child.material : [child.material];
                materials.forEach((mat) => {
                    mat.transparent = false;
                    mat.opacity = 1;
                    mat.depthWrite = true;
                    mat.needsUpdate = true;
                });
            }
        });
    }, [scene]);

    return <primitive object={scene} />;
}

export default function ModelViewer({ modelUrl, rotation, scale }) {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 5 }}>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
                <ambientLight intensity={2.5} />
                <directionalLight position={[5, 10, 5]} intensity={3} castShadow />
                <directionalLight position={[-5, 5, -5]} intensity={1.5} />
                <Suspense fallback={null}>
                    <Stage environment="warehouse" intensity={1.5} contactShadow={{ opacity: 0.5, blur: 2 }}>
                        <Model url={modelUrl} rotation={rotation} scale={scale} />
                    </Stage>
                </Suspense>
                <OrbitControls 
                    autoRotate 
                    autoRotateSpeed={2} 
                    enableZoom={false} 
                    enablePan={false}
                    makeDefault 
                    preventScroll={false}
                />
                <Environment preset="warehouse" />
            </Canvas>
        </div>
    );
}
