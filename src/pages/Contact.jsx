import { useReveal } from '../lib/utils';
import { useState } from 'react';
import { SITE_CONTENT } from '../data/content';

export default function Contact() {
    useReveal();
    const [status, setStatus] = useState('IDLE'); // IDLE, SUBMITTING, SUCCESS, FATAL
    const [formData, setFormData] = useState({ name: '', email: '', branchYear: '', roleInterest: '', message: '' });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SUBMITTING');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('SUCCESS');
                setTimeout(() => setStatus('IDLE'), 4000);
            } else {
                setStatus('FATAL');
                setTimeout(() => setStatus('IDLE'), 3000);
            }
        } catch (err) {
            console.error(err);
            setStatus('FATAL');
            setTimeout(() => setStatus('IDLE'), 3000);
        }
    };

    const { contact } = SITE_CONTENT;

    return (
        <>
            <section style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <h1 className="font-display reveal" style={{ fontSize: '96px', marginBottom: '16px' }}>{contact.heroTitle}</h1>
            </section>

            <section className="container reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', marginBottom: '120px' }}>
                {/* Left Column */}
                <div style={{ flex: '1 1 400px' }}>
                    <h2 className="text-h2" style={{ marginBottom: '32px', whiteSpace: 'pre-line' }}>{contact.pitchTitle}</h2>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '48px' }}>
                        {contact.bullets.map((point, i) => (
                            <li key={i} className="text-body" style={{ color: 'var(--text-muted)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '4px', height: '4px', background: 'var(--accent-gold)', borderRadius: '50%' }} /> {point}
                            </li>
                        ))}
                    </ul>

                    <div className="text-label" style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}>ROLE OPENINGS</div>
                    <div className="text-mono" style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '2' }}>
                        {contact.openings.map((open, i) => (
                            <div key={i}>[{i + 1}] {open}</div>
                        ))}
                    </div>
                </div>

                {/* Right Column (Form) */}
                <div style={{ flex: '1 1 400px' }}>
                    {status === 'SUCCESS' ? (
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent-gold)', padding: '48px', textAlign: 'center' }}>
                            <div className="reveal visible">
                                <h3 className="font-display" style={{ color: 'var(--accent-gold)', fontSize: '32px', marginBottom: '16px' }}>TRANSMISSION SENT.</h3>
                                <p className="text-mono" style={{ color: 'var(--text-muted)' }}>Standby for orders.</p>
                            </div>
                        </div>
                    ) : status === 'FATAL' ? (
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent-red)', padding: '48px', textAlign: 'center' }}>
                            <div className="reveal visible">
                                <h3 className="font-display" style={{ color: 'var(--accent-red)', fontSize: '32px', marginBottom: '16px' }}>SYSTEM FAILURE.</h3>
                                <p className="text-mono" style={{ color: 'var(--text-primary)' }}>Relay rejected the transmission.</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '40px', opacity: status === 'SUBMITTING' ? 0.5 : 1, transition: 'opacity 300ms ease' }}>
                            {[
                                { label: 'NAME', type: 'text', name: 'name' },
                                { label: 'EMAIL', type: 'email', name: 'email' },
                                { label: 'BRANCH / YEAR', type: 'text', name: 'branchYear' },
                                { label: 'ROLE INTEREST', type: 'text', name: 'roleInterest' },
                            ].map((field, i) => (
                                <div key={i} style={{ position: 'relative' }}>
                                    <input type={field.type} name={field.name} required={true} placeholder={field.label} value={formData[field.name]} onChange={handleChange} style={{
                                        width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-subtle)',
                                        color: 'var(--text-primary)', padding: '16px 0', fontFamily: 'var(--font-mono)', fontSize: '12px',
                                        outline: 'none', transition: 'border-color 300ms ease'
                                    }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                                        disabled={status === 'SUBMITTING'}
                                    />
                                </div>
                            ))}
                            <div style={{ position: 'relative' }}>
                                <textarea name="message" required={true} placeholder="MESSAGE / WHY JOIN?" rows={4} value={formData.message} onChange={handleChange} style={{
                                    width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-subtle)',
                                    color: 'var(--text-primary)', padding: '16px 0', fontFamily: 'var(--font-mono)', fontSize: '12px',
                                    outline: 'none', transition: 'border-color 300ms ease', resize: 'none'
                                }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                                    disabled={status === 'SUBMITTING'}
                                />
                            </div>
                            <button type="submit" disabled={status === 'SUBMITTING'} className="btn-primary" style={{ width: '100%' }}>
                                {status === 'SUBMITTING' ? 'ENCRYPTING TRANSMISSION...' : 'SEND MESSAGE'}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Social Links Formatted */}
            <section className="reveal" style={{ borderTop: '1px solid var(--border-subtle)', padding: '40px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
                    {contact.social.map((social, i) => (
                        <a key={i} href={social.url} className="text-mono" style={{
                            color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 300ms ease'
                        }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            {social.label}
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}
