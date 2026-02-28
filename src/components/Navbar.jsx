import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { label: 'HOME', path: '/' },
        { label: 'BOTS', path: '/bots' },
        { label: 'TEAM', path: '/team' },
        { label: 'COMPETITIONS', path: '/competitions' },
        { label: 'CONTACT', path: '/contact' }
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: 'var(--nav-height)',
                background: 'var(--bg-void)',
                borderBottom: '1px solid var(--border-raised)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                padding: '0 48px'
            }}>
                <div style={{ flex: 1 }}>
                    <Link to="/" style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '18px',
                        letterSpacing: '0.3em',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        textTransform: 'uppercase'
                    }}>
                        DJS ASTRA
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', gap: '32px' }} className="nav-desktop">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '12px',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-primary)',
                                textDecoration: 'none',
                                borderBottom: location.pathname === link.path ? '1px solid var(--accent-gold)' : '1px solid transparent',
                                paddingBottom: '4px',
                                transition: 'color 300ms ease'
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Internal styles mapping specific to layout needs not strictly in global CSS */}
            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
        </>
    );
}
