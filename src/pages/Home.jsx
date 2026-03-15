import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import Scene from '../components/home/Scene';
import Overlay from '../components/home/Overlay';
import Loader from '../components/home/Loader';
import { SITE_CONTENT } from '../data/content';

export default function Home() {
  const { hero, bots } = SITE_CONTENT;
  const TOTAL_PAGES = bots.list.length + 6;

  return (
    <div style={{
      width: '100vw',
      height: 'calc(100vh - var(--nav-height))',
      background: 'var(--bg-void)',
      position: 'fixed',
      top: 'var(--nav-height)',
      left: 0,
    }}>
      
      {/* 3D Canvas */}
      <Canvas
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: '#0A0A0A' }}
      >
        <ScrollControls pages={TOTAL_PAGES} damping={0.25}>
          <Scene bots={bots.list} totalPages={TOTAL_PAGES} />
          <Overlay bots={bots.list} hero={hero} totalPages={TOTAL_PAGES} />
        </ScrollControls>
      </Canvas>

      {/* Elegant HTML Loader over the entire canvas container */}
      <Loader />

      {/* Grain overlay — rendered in DOM, not WebGL */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        opacity: 0.04,
        pointerEvents: 'none',
        zIndex: 10,
      }} />

    </div>
  )
}
