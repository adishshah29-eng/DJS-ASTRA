import { useParams, Link } from 'react-router-dom';
import { useReveal } from '../lib/utils';
import { SITE_CONTENT } from '../data/content';
import ModelViewer from '../components/ModelViewer';

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

            {/* Hero: Full-width 3D Model Viewer */}
            <div className="reveal" style={{ width: '100%', height: '70vh', position: 'relative', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-void)' }}>
                {bot.modelUrl ? (
                    <ModelViewer
                        modelUrl={bot.modelUrl}
                        rotation={bot.rotation}
                        scale={bot.scale}
                    />
                ) : (
                    <div style={{ position: 'absolute', inset: 0, background: `var(--bg-void) url(${bot.image}) center/contain no-repeat` }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-void) 0%, transparent 100%)', opacity: 0.8 }} />
                    </div>
                )}

                {/* Bot name overlay on the 3D viewer */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '32px 4vw',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                    pointerEvents: 'none', zIndex: 10
                }}>
                    <h1 className="font-display" style={{ fontSize: 'clamp(48px, 8vw, 96px)', color: 'var(--text-primary)', margin: 0, lineHeight: 1 }}>
                        {bot.name}
                    </h1>
                    <p className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '13px', margin: '8px 0 0 0', letterSpacing: '0.15em' }}>
                        {bot.tagline}
                    </p>
                </div>
            </div>

            {/* Content Area: Info below the 3D model */}
            <main style={{ flex: '1', background: 'var(--bg-void)', padding: '64px 4vw' }}>

                {/* Header status row */}
                <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
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

                {/* Description */}
                <div className="reveal" style={{ marginBottom: '64px', maxWidth: '800px' }}>
                    <p className="text-body" style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
                        {details?.description || 'Combat schematics and performance data for this unit are currently restricted. Available data will be uploaded post-deployment.'}
                    </p>
                </div>

                {/* Two-column: Specs + History */}
                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', marginBottom: '64px' }}>

                    {/* Technical Specs */}
                    {details?.specs?.length > 0 && (
                        <div>
                            <h3 className="text-mono" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ color: 'var(--accent-gold)' }}>//</span> TECHNICAL SPECIFICATIONS
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px 24px' }}>
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

                    {/* Combat History */}
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
                        <h3 className="font-display" style={{ fontSize: '32px', color: 'var(--text-primary)', margin: 0 }}>COMPONENTS &amp; SYSTEMS</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        {details.components.map((comp, i) => (
                            <div key={i} style={{ background: 'var(--bg-void)', border: '1px solid var(--border-subtle)', borderRadius: '2px', overflow: 'hidden' }}>
                                {/* Using <img> so the full image is always visible */}
                                <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--bg-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <img
                                        src={comp.image}
                                        alt={comp.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.9 }}
                                    />
                                </div>
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
