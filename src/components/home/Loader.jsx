import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

export default function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [show, setShow] = useState(true);

  // Smooth out the disappearance
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setShow(false), 800); // Wait 800ms before removing completely
      return () => clearTimeout(timer);
    } else {
      setShow(true);
    }
  }, [progress]);

  if (!show) return null;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'var(--bg-void)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999, // On top of everything
      transition: 'opacity 0.8s ease-in-out',
      opacity: progress === 100 ? 0 : 1,
      pointerEvents: progress === 100 ? 'none' : 'auto',
    }}>
      
      {/* Container */}
      <div style={{ width: '240px', textAlign: 'center' }}>
        
        {/* Title */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--accent-gold)',
          letterSpacing: '0.4em',
          marginBottom: '24px',
          animation: 'pulse 1.5s infinite ease-in-out'
        }}>
          INITIALIZING ARENA
        </div>

        {/* Outer Bar */}
        <div style={{
          width: '100%',
          height: '2px',
          background: 'rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '16px',
        }}>
          {/* Inner Progress Bar */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            background: 'var(--accent-gold)',
            width: `${progress}%`,
            transition: 'width 0.2s ease-out',
          }} />
        </div>

        {/* Percentage Number */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '48px',
          color: 'var(--text-primary)',
          fontWeight: 300,
          lineHeight: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline'
        }}>
          <span>{Math.round(progress)}</span>
          <span style={{ fontSize: '16px', color: 'var(--text-muted)' }}>%</span>
        </div>

        {/* Loading details */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          marginTop: '16px',
          opacity: 0.5,
          textTransform: 'uppercase',
          height: '12px'
        }}>
          {item ? `Loading: ${item.split('/').pop()}` : 'Establishing connection...'}
        </div>

      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

    </div>
  );
}
