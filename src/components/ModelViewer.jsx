import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, Environment } from '@react-three/drei';

function Model({ url }) {
    const { scene } = useGLTF(url);
    // Optional: Center the model or scale it if needed
    // This depends on the specific GLB file's native scale
    return <primitive object={scene} />;
}

export default function ModelViewer({ modelUrl }) {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 5 }}>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.2, blur: 2 }}>
                        <Model url={modelUrl} />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={true} makeDefault />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
