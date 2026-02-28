import { useReveal } from '../lib/utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../data/content';

export default function Bots() {
    useReveal();
    const [filter, setFilter] = useState('ALL');
    const { bots } = SITE_CONTENT;

    const filteredBots = filter === 'ALL'
        ? bots.list
        : bots.list.filter(b => b.weight.toUpperCase().includes(filter.toUpperCase()));

    return (
        <>
            {/* 1 — Page Hero */}
            <section style={{ padding: '120px 0 60px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <h1 className="font-display reveal" style={{ fontSize: 'clamp(48px, 8vw, 96px)', marginBottom: '16px' }}>{bots.heroTitle}</h1>
                <p className="text-body reveal" style={{ color: 'var(--text-muted)' }}>{bots.heroSubtitle}</p>
            </section>

            {/* 2 — Bot Grid */}
            <section className="container">
                <div className="reveal custom-scrollbar" style={{ display: 'flex', gap: '8px', marginBottom: '48px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {['ALL', '15 KG ROBO WARS', '8 KG ROBO WARS', 'BEATLE WEIGHT', 'SUMO & SORCER'].map(f => (
                        <button key={f} onClick={() => setFilter(f)} style={{
                            background: 'transparent',
                            border: filter === f ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                            color: filter === f ? 'var(--accent-gold)' : 'var(--text-primary)',
                            padding: '8px 16px',
                            fontFamily: 'var(--font-mono)', fontSize: '11px'
                        }}>
                            {f}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--grid-gap)' }}>
                    {filteredBots.map((bot, i) => (
                        <div key={i} className="card reveal" style={{ '--i': i }}>
                            <div className="card-img-container" style={{ background: `var(--bg-raised) url(${bot.image}) center/cover` }}></div>
                            <h3 className="font-display" style={{ fontSize: '24px', color: 'var(--accent-gold)', marginBottom: '16px' }}>{bot.name}</h3>
                            <div className="badge" style={{ marginBottom: '16px', borderColor: bot.active ? 'var(--accent-red)' : 'var(--border-subtle)', color: bot.active ? 'var(--accent-red)' : 'var(--text-muted)' }}>
                                {bot.weight}
                            </div>

                            <div className="text-mono" style={{ fontSize: '12px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>WEAPON //</span> {bot.weapon}
                            </div>
                            <div className="text-mono" style={{ fontSize: '12px', color: 'var(--accent-gold)', marginBottom: '16px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>RECORD //</span> {bot.record}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px' }}>
                                <span className="badge" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>{bot.status}</span>
                                <Link to={`/bots/${bot.id}`} className="btn-ghost" style={{ padding: '8px 24px', textDecoration: 'none' }}>VIEW BOT</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
