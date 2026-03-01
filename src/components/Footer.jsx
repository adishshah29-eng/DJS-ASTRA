import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="reveal" style={{
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-surface)',
            padding: '80px 24px 40px 24px'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '64px'
            }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '48px'
                }}>
                    <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)' }}>
                            <h4 className="font-display" style={{ fontSize: '24px', letterSpacing: '0.15em', fontWeight: 600 }}>DJS ASTRA</h4>
                        </div>
                        <p className="text-body" style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '300px' }}>
                            Pushing the limits of engineering and combat robotics at DJSCE since 2019.
                        </p>
                    </div>

                    <div style={{ flex: '2 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '48px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <h4 className="text-label" style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>NAVIGATION</h4>
                            <Link to="/" className="text-body" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Home</Link>
                            <Link to="/team" className="text-body" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>The Team</Link>
                            <Link to="/bots" className="text-body" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Our Bots</Link>
                            <Link to="/competitions" className="text-body" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Competitions</Link>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <h4 className="text-label" style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>CONNECT</h4>
                            <a href="#" className="text-body" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Instagram</a>
                            <a href="#" className="text-body" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>LinkedIn</a>
                            <a href="#" className="text-body" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>YouTube</a>
                            <Link to="/contact" className="text-body" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Email Us</Link>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <h4 className="text-label" style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>LEGAL</h4>
                            <a href="#" className="text-body" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</a>
                            <a href="#" className="text-body" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease' }} onMouseEnter={e => e.target.style.color = 'var(--accent-gold)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Terms of Use</a>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <p className="text-body" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
                        © {new Date().getFullYear()} DJS ASTRA Robotics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
