import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

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

                {/* Mobile Hamburger Toggle */}
                <button
                    className="nav-mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--accent-gold)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        cursor: 'pointer',
                        letterSpacing: '0.2em',
                        zIndex: 102
                    }}
                >
                    {isOpen ? 'CLOSE' : 'MENU'}
                </button>
            </nav>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(22, 21, 19, 0.98)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 101,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '40px'
                        }}
                    >
                        {links.map((link, i) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                            >
                                <Link
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '32px',
                                        color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-primary)',
                                        textDecoration: 'none',
                                        letterSpacing: '0.2em'
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Internal styles mapping specific to layout needs not strictly in global CSS */}
            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          nav { padding: 0 24px !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-toggle { display: none !important; }
        }
      `}</style>
        </>
    );
}
