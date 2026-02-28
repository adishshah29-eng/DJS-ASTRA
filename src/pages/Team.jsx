import { useReveal } from '../lib/utils';
import { SITE_CONTENT } from '../data/content';

export default function Team() {
    useReveal();
    const { team } = SITE_CONTENT;

    return (
        <>
            {/* 1 — Page Hero */}
            <section style={{ padding: '120px 0 60px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <h1 className="font-display reveal" style={{ fontSize: 'clamp(48px, 8vw, 96px)', marginBottom: '16px' }}>{team.heroTitle}</h1>
            </section>

            {/* 3 — Leadership Row */}
            <section className="container reveal" style={{ marginBottom: '64px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                    {team.leadership.map((member, i) => (
                        <div key={i} className="card" style={{ padding: '0', border: '1px solid var(--border-subtle)' }}>
                            <div style={{ aspectRatio: '1', background: `var(--bg-raised) url(${member.image}) center/cover`, filter: 'grayscale(100%)', transition: 'filter 300ms ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}>
                            </div>
                            <div style={{ padding: '32px' }}>
                                <h3 className="font-display" style={{ fontSize: '28px', marginBottom: '8px' }}>{member.name}</h3>
                                <div className="text-label" style={{ color: 'var(--accent-gold)', marginBottom: '8px' }}>{member.role}</div>
                                <div className="text-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{member.year}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2 — Team Grid */}
            <section className="container reveal">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
                    {team.members.map((member, i) => (
                        <div key={i} className="card" style={{ padding: '0', border: '1px solid var(--border-subtle)', background: 'var(--bg-void)' }}>
                            <div style={{ aspectRatio: '4/5', background: `var(--bg-surface) url(${member.image}) center/cover`, filter: 'grayscale(100%)', transition: 'filter 300ms ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}>
                            </div>
                            <div style={{ padding: '24px' }}>
                                <h3 className="font-display" style={{ fontSize: '20px', marginBottom: '8px' }}>{member.name}</h3>
                                <div className="text-label" style={{ color: 'var(--accent-gold)', marginBottom: '8px' }}>{member.role}</div>
                                <div className="text-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{member.year}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
