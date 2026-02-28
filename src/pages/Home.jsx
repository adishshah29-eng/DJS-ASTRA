import { useEffect, useState } from 'react';
import { useReveal } from '../lib/utils';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../data/content';

export default function Home() {
    useReveal();
    const [heroTextVisible, setHeroTextVisible] = useState(false);

    useEffect(() => {
        // Staggered reveal for hero text
        const timer = setTimeout(() => setHeroTextVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const { hero } = SITE_CONTENT;
    const headlineTokens = hero.headline.split(" ");

    return (
        <>
            {/* 2 — Hero */}
            <section style={{ height: 'calc(100vh - var(--nav-height))', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-gold)',
                    letterSpacing: '0.4em', marginBottom: '24px', opacity: heroTextVisible ? 1 : 0,
                    transition: 'opacity 1s ease 0.2s'
                }}>
                    {hero.preTitle}
                </div>

                <h1 className="text-hero" style={{ marginBottom: '16px', display: 'flex', gap: '2vw', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {headlineTokens.map((word, i) => (
                        <span key={i} style={{
                            display: 'inline-block',
                            opacity: heroTextVisible ? 1 : 0,
                            transform: heroTextVisible ? 'translateY(0)' : 'translateY(40px)',
                            transition: `all 800ms cubic-bezier(0.2, 0.8, 0.2, 1) ${0.1 * i + 0.4}s`
                        }}>
                            {word}
                        </span>
                    ))}
                </h1>

                <p className="text-body reveal" style={{
                    fontSize: '16px', opacity: 0.6, marginBottom: '48px', maxWidth: '600px'
                }}>
                    {hero.subHeadline}
                </p>

                <div className="reveal" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/bots" className="btn-primary">MEET OUR BOTS</Link>
                    <Link to="/contact" className="btn-ghost">JOIN THE TEAM</Link>
                </div>

                <div className="text-label" style={{
                    position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
                    animation: 'bounce 2s infinite'
                }}>
                    SCROLL ↓
                </div>
                <style>{`
          @keyframes bounce { 
            0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); } 
            40% { transform: translateY(-10px) translateX(-50%); } 
            60% { transform: translateY(-5px) translateX(-50%); } 
          }
        `}</style>
            </section>

            {/* 3 — Stats Bar */}
            <section className="reveal" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '40px 0' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
                    {hero.stats.map((stat, i) => (
                        <div key={i} className="text-mono">
                            <span style={{ color: 'var(--accent-gold)', fontSize: '24px', display: 'block', marginBottom: '8px' }}>{stat.metric}</span>
                            <span style={{ color: 'var(--text-primary)', fontSize: '11px', letterSpacing: '0.15em' }}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4 — Brief Intro */}
            <section className="container reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
                <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="text-label" style={{ color: 'var(--accent-gold)', marginBottom: '32px' }}>// ABOUT THE TEAM</div>
                    <h2 className="text-h2" style={{ marginBottom: '24px', whiteSpace: 'pre-line' }}>{hero.aboutTitle}</h2>
                    <p className="text-body" style={{ color: 'var(--text-muted)' }}>
                        {hero.aboutText}
                    </p>
                </div>
                <div style={{ flex: '1 1 500px' }}>
                    <div style={{ width: '100%', aspectRatio: '1', border: '1px solid var(--border-subtle)', background: 'var(--bg-raised)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        {/* Geometric shape placeholder */}
                        <div style={{ width: '60%', height: '60%', background: 'linear-gradient(45deg, var(--bg-void) 0%, #1a1a1a 100%)', transform: 'rotate(45deg)', border: '1px solid var(--border-subtle)' }} />
                    </div>
                </div>
            </section>

            {/* 5 — Featured Bot Teaser */}
            <section className="reveal" style={{ background: 'var(--bg-surface)', padding: '140px 0' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <div style={{ width: '100%', aspectRatio: '4/3', background: `var(--bg-void) url(${hero.featuredBot.image}) center/cover`, border: '1px solid var(--border-subtle)' }} />
                    </div>
                    <div style={{ flex: '1 1 300px' }}>
                        <h3 className="font-display" style={{ color: 'var(--accent-gold)', fontSize: '48px', marginBottom: '24px' }}>{hero.featuredBot.name}</h3>
                        <div className="text-mono" style={{ fontSize: '13px', lineHeight: '2.5', marginBottom: '32px', color: 'var(--text-muted)' }}>
                            NAME <span style={{ color: 'var(--text-primary)', marginLeft: '8px' }}>{hero.featuredBot.name}</span><br />
                            CLASS <span style={{ color: 'var(--text-primary)', marginLeft: '8px' }}>{hero.featuredBot.class}</span><br />
                            WEAPON <span style={{ color: 'var(--accent-red)', marginLeft: '8px' }}>{hero.featuredBot.weapon}</span><br />
                            STATUS <span style={{ color: 'var(--accent-gold)', marginLeft: '8px' }}>{hero.featuredBot.status}</span>
                        </div>
                        <Link to="/bots" className="btn-primary">VIEW ALL BOTS</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
