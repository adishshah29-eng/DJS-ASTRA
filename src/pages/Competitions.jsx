import { useReveal } from '../lib/utils';
import { SITE_CONTENT } from '../data/content';

export default function Competitions() {
    useReveal();
    const { competitions } = SITE_CONTENT;

    return (
        <>
            {/* 1 — Hero */}
            <section style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <h1 className="font-display reveal" style={{ fontSize: '96px', marginBottom: '16px' }}>{competitions.heroTitle}</h1>
            </section>

            {/* 2 — Timeline */}
            <section className="container reveal" style={{ marginBottom: '120px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: '1px', background: 'var(--accent-gold)', opacity: 0.3 }} />

                <div className="timeline-container">
                    {competitions.timeline.map((item, i) => (
                        <div key={i} className={`reveal timeline-item ${i % 2 === 0 ? 'even' : 'odd'}`}>
                            <div className="timeline-card">
                                <div className="text-mono" style={{ color: 'var(--accent-gold)', marginBottom: '8px' }}>{item.year}</div>
                                <h3 className="font-display" style={{ fontSize: '28px', marginBottom: '8px', color: item.isWin ? 'var(--accent-gold)' : 'var(--text-primary)' }}>{item.event}</h3>
                                <div className="text-body" style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>{item.location}</div>
                                <div className="badge" style={{ borderColor: item.isWin ? 'var(--accent-gold)' : 'var(--accent-red)', color: item.isWin ? 'var(--accent-gold)' : 'var(--accent-red)' }}>{item.result}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3 — Trophy Shelf */}
            <section className="reveal" style={{ background: 'var(--bg-surface)', padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
                <div className="container" style={{ display: 'flex', gap: '32px', overflowX: 'auto', paddingBottom: '32px' }}>
                    {competitions.trophies.map((trophy, i) => (
                        <div key={i} className="card" style={{ flex: '0 0 300px', textAlign: 'center', border: '1px solid var(--border-active)' }}>
                            <div style={{ fontSize: '48px', marginBottom: '24px' }}>{trophy.icon}</div>
                            <h3 className="font-display" style={{ fontSize: '24px', color: 'var(--accent-gold)', marginBottom: '8px' }}>{trophy.name}</h3>
                            <div className="text-mono" style={{ color: 'var(--text-muted)' }}>{trophy.year}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
