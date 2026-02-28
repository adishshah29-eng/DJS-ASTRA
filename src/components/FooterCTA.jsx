import { Link } from 'react-router-dom';

export default function FooterCTA() {
    return (
        <section style={{ borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }} className="reveal">
            <div className="container" style={{ padding: '80px 24px' }}>
                <h2 className="text-h2" style={{ marginBottom: '40px' }}>READY TO COMPETE?</h2>
                <Link to="/contact" className="btn-primary">
                    CONTACT US
                </Link>
            </div>
        </section>
    );
}
