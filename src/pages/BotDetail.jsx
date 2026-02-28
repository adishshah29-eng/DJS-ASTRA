import { useParams, Link } from 'react-router-dom';
import { useReveal } from '../lib/utils';
import { SITE_CONTENT } from '../data/content';

export default function BotDetail() {
    useReveal();
    const { id } = useParams();
    const bot = SITE_CONTENT.bots.list.find(b => b.id === id);

    if (!bot) {
        return (
            <div style={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 className="font-display" style={{ fontSize: '48px', color: 'var(--accent-red)' }}>BOT NOT FOUND</h1>
                <Link to="/bots" className="btn-ghost" style={{ mt: '24px' }}>RETURN TO FLEET</Link>
            </div>
        );
    }

    const { details } = bot;

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* Breadcrumb Navigation */}
            <div className="reveal" style={{ padding: '16px 24px', background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', gap: '8px', zIndex: 10 }}>
                <Link to="/" className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none' }}>HOME</Link>
                <span className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '13px' }}>/</span>
                <Link to="/bots" className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none' }}>OUR FLEET</Link>
                <span className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '13px' }}>/</span>
                <span className="text-mono" style={{ color: 'var(--accent-gold)', fontSize: '13px' }}>{bot.name}</span>
            </div>

            {/* Main Content Split */}
            <main style={{ flex: '1', display: 'flex', flexWrap: 'wrap', gap: '0' }}>

                {/* Left Column: Hero Image Container */}
                <div className="reveal" style={{ flex: '1 1 50vw', minHeight: '500px', borderRight: '1px solid var(--border-subtle)', position: 'relative' }}>
                    {/* The image acts as a background fill */}
                    <div style={{ position: 'absolute', inset: 0, background: `var(--bg-void) url(${bot.image}) center/cover` }}>
                        {/* Gradient overlay to blend into the background at the edges */}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-void) 0%, transparent 100%)', opacity: 0.8 }} />
                    </div>
                </div>

                {/* Right Column: Specifications & History */}
                <div className="reveal" style={{ flex: '1 1 50vw', padding: '64px 40px', background: 'var(--bg-void)' }}>

                    {/* Header Info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        {bot.active ? (
                            <span className="badge" style={{ borderColor: 'var(--accent-red)', color: 'var(--accent-red)' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-red)', display: 'inline-block', marginRight: '8px', animation: 'pulse 2s infinite' }} />
                                {bot.status}
                            </span>
                        ) : (
                            <span className="badge" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                                {bot.status}
                            </span>
                        )}
                        <span className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '12px', letterSpacing: '0.1em' }}>
                            MODEL: {details?.model || 'CLASSIFIED'}
                        </span>
                    </div>

                    <h1 className="font-display" style={{ fontSize: '72px', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1 }}>{bot.name}</h1>
                    <p className="text-body" style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px', marginBottom: '64px' }}>
                        {details?.description || 'Combat schematics and performance data for this unit are currently restricted. Available data will be uploaded post-deployment.'}
                    </p>

                    {/* Technical Specs Grid */}
                    {details?.specs?.length > 0 && (
                        <div style={{ marginBottom: '64px' }}>
                            <h3 className="text-mono" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ color: 'var(--accent-gold)' }}>//</span> TECHNICAL SPECIFICATIONS
                            </h3>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px 24px' }}>
                                {details.specs.map((spec, i) => (
                                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <span className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '11px', letterSpacing: '0.1em' }}>{spec.label.toUpperCase()}</span>
                                        <div className="text-mono" style={{ color: 'var(--text-primary)', fontSize: '14px', borderLeft: '2px solid var(--border-active)', paddingLeft: '12px' }}>
                                            {spec.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Combat History Timeline */}
                    {details?.history?.length > 0 && (
                        <div>
                            <h3 className="text-mono" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ color: 'var(--accent-gold)' }}>//</span> COMBAT HISTORY
                            </h3>

                            <div style={{ borderLeft: '1px solid var(--border-subtle)', marginLeft: '12px', paddingBottom: '16px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                                {details.history.map((event, i) => (
                                    <div key={i} style={{ paddingLeft: '32px', position: 'relative' }}>
                                        {/* Timeline Dot */}
                                        <div style={{
                                            position: 'absolute', left: '-5px', top: '6px', width: '10px', height: '10px',
                                            borderRadius: '50%', background: event.isWin ? 'var(--accent-gold)' : 'var(--border-active)',
                                            boxShadow: '0 0 0 4px var(--bg-void)'
                                        }} />

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                                            <h4 className="text-h2" style={{ fontSize: '20px', margin: 0 }}>{event.event}</h4>
                                            <span className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{event.year}</span>
                                        </div>

                                        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', padding: '16px', borderRadius: '2px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                                <span style={{ color: event.isWin ? 'var(--accent-gold)' : 'var(--text-primary)', fontWeight: 'bold', fontSize: '14px', fontFamily: 'var(--font-display)' }}>{event.medal}</span>
                                                <span className="text-mono" style={{ background: event.isWin ? 'rgba(200, 169, 110, 0.1)' : 'var(--bg-void)', color: event.isWin ? 'var(--accent-gold)' : 'var(--text-muted)', padding: '2px 8px', fontSize: '10px', borderRadius: '2px' }}>
                                                    {event.result.toUpperCase()}
                                                </span>
                                            </div>
                                            <p className="text-body" style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Components & Systems Grid */}
            {details?.components?.length > 0 && (
                <section className="reveal" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)', padding: '80px 4vw' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <h3 className="font-display" style={{ fontSize: '32px', color: 'var(--text-primary)', margin: 0 }}>COMPONENTS & SYSTEMS</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        {details.components.map((comp, i) => (
                            <div key={i} style={{ background: 'var(--bg-void)', border: '1px solid var(--border-subtle)', borderRadius: '2px', overflow: 'hidden' }}>
                                <div style={{ width: '100%', aspectRatio: '16/9', background: `var(--bg-raised) url(${comp.image}) center/cover`, opacity: 0.8 }} />
                                <div style={{ padding: '24px' }}>
                                    <h4 className="font-display" style={{ fontSize: '20px', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>{comp.title}</h4>
                                    <p className="text-body" style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>{comp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

        </div>
    );
}
