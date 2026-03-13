import { useScroll, Scroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import FooterCTA from '../../components/FooterCTA';
import Footer from '../../components/Footer';

function BotPage({ bot, index, totalBots, totalPages }) {
  const scroll = useScroll();
  const [vis, setVis] = useState(0);

  useFrame(() => {
    const currentScrollPage = scroll.offset * (totalPages - 1);
    const distance = currentScrollPage - (index + 1);
    
    let v = 0;
    // Visible when distance is within +/- 0.6 pages
    if (distance > -0.6 && distance < 0.6) {
      if (distance < -0.3) {
        // -0.6 to -0.3 Fade In
        v = (distance + 0.6) / 0.3;
      } else if (distance < 0.3) {
        // -0.3 to 0.3 Hold perfectly still and visible
        v = 1;
      } else {
        // 0.3 to 0.6 Fade Out
        v = 1 - ((distance - 0.3) / 0.3);
      }
    }
    setVis(v);
  });

  return (
    <div style={{
      position: 'absolute',
      top: `${(index + 1) * 100}vh`,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 10vw',
      pointerEvents: 'none',
    }}>
      <div style={{
        maxWidth: '520px',
        pointerEvents: 'auto',
        opacity: vis,
        transform: `translateX(${(1 - vis) * -40}px)`,
        transition: 'opacity 0.2s ease, transform 0.2s ease',
      }}>
        {/* Unit counter */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--accent-gold)',
          letterSpacing: '0.4em',
          marginBottom: '16px',
          textTransform: 'uppercase',
        }}>
          UNIT {String(index + 1).padStart(2, '0')} / {String(totalBots).padStart(2, '0')}
        </div>

        {/* Bot name */}
        <h2 className="font-display" style={{
          fontSize: 'clamp(48px, 8vw, 96px)',
          color: 'var(--text-primary)',
          margin: '0 0 4px 0',
          fontWeight: 300,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textShadow: '0 4px 30px rgba(0,0,0,0.9)',
        }}>
          {bot.name}
        </h2>

        {/* Tagline */}
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          fontStyle: 'italic',
          color: 'var(--text-muted)',
          marginBottom: '24px',
          letterSpacing: '0.03em',
        }}>
          {bot.tagline || 'Engineered for maximum kinetic energy transfer.'}
        </div>

        {/* Gold divider */}
        <div style={{
          width: '40px',
          height: '1px',
          background: 'var(--accent-gold)',
          marginBottom: '24px',
          opacity: 0.6,
        }} />

        {/* Weapon badge */}
        <div style={{
          display: 'inline-block',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent-red)',
          border: '1px solid var(--accent-red)',
          padding: '4px 12px',
          marginBottom: '24px',
        }}>
          {bot.weaponType || bot.weapon}
        </div>

        {/* Specs table */}
        <div className="text-mono" style={{
          fontSize: '11px',
          lineHeight: '2.6',
          marginBottom: '28px',
          color: 'var(--text-muted)',
        }}>
          {[
            ['CLASS',  bot.weight],
            ['WEAPON', bot.weapon],
            ['ARMOR',  bot.armor || 'HARDOX 500'],
            ['DRIVE',  bot.drive || '4WD Brushless'],
            ['RECORD', bot.record],
            ['STATUS', bot.status],
          ].map(([label, value]) => (
            <div key={label} style={{ display: 'flex', gap: '16px' }}>
              <span style={{ width: '70px', flexShrink: 0 }}>{label}</span>
              <span style={{
                color: label === 'STATUS' ? 'var(--accent-gold)'
                     : label === 'WEAPON' ? 'var(--accent-red)'
                     : 'var(--text-primary)'
              }}>
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Win/Loss stats */}
        <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
          {[
            { num: bot.wins ?? '—', label: 'WINS' },
            { num: bot.losses ?? '—', label: 'LOSSES' },
            { num: bot.wins != null ? `${Math.round(bot.wins / (bot.wins + (bot.losses || 1)) * 100)}%` : '—', label: 'WIN RATE' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '32px',
                fontWeight: 400,
                color: 'var(--accent-gold)',
                lineHeight: 1,
              }}>{num}</div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: 'var(--text-muted)',
                marginTop: '4px',
              }}>{label}</div>
            </div>
          ))}
        </div>

        {/* CTA — use <a> NOT <Link>, Drei portal loses Router context */}
        <a href="/bots" style={{
          display: 'inline-block',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--accent-gold)',
          border: '1px solid var(--accent-gold)',
          padding: '12px 28px',
          textDecoration: 'none',
          transition: 'background 0.35s ease, color 0.35s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={e => { e.target.style.background = 'var(--accent-gold)'; e.target.style.color = '#0A0A0A'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-gold)'; }}
        >
          VIEW FULL SPECS →
        </a>
      </div>
    </div>
  );
}

function CtaPage({ totalBots }) {
  return (
    <div style={{
      position: 'absolute',
      top: `${(totalBots + 1) * 100}vh`,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px',
      pointerEvents: 'none',
    }}>
      <div style={{ pointerEvents: 'auto' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.4em',
          color: 'var(--accent-gold)',
          marginBottom: '24px',
        }}>
          DJS ✦ ASTRA // COMBAT ROBOTICS
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 7vw, 90px)',
          fontWeight: 300,
          letterSpacing: '0.12em',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          margin: '0 0 16px 0',
        }}>
          READY TO COMPETE?
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 300,
          color: 'var(--text-muted)',
          maxWidth: '480px',
          margin: '0 auto 40px',
          lineHeight: 1.8,
        }}>
          We build machines that dominate arenas. Join the team or watch us fight.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a href="/contact" style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)',
            padding: '12px 32px', textDecoration: 'none',
          }}>
            JOIN THE TEAM →
          </a>
          <a href="/bots" style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--text-muted)', border: '1px solid var(--border-subtle)',
            padding: '12px 32px', textDecoration: 'none',
          }}>
            SEE ALL BOTS
          </a>
        </div>
      </div>
    </div>
  );
}

function AboutAndFooterPage({ totalBots, hero }) {
  return (
    <div style={{
      position: 'absolute',
      // Starts right after the CTA page
      top: `${(totalBots + 2) * 100}vh`,
      width: '100vw',
      // Natural height because the footer needs room
      display: 'flex',
      flexDirection: 'column',
      pointerEvents: 'auto',
      background: 'var(--bg-void)',
    }}>
      {/* 4 — Brief Intro (Original Home Section) */}
      <section className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center', padding: '120px 48px' }}>
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div className="text-label" style={{ color: 'var(--accent-gold)', marginBottom: '32px' }}>// ABOUT THE TEAM</div>
          <h2 className="text-h2" style={{ marginBottom: '24px', whiteSpace: 'pre-line', fontSize: '36px', color: 'var(--text-primary)' }}>{hero.aboutTitle}</h2>
          <p className="text-body" style={{ color: 'var(--text-muted)' }}>
            {hero.aboutText}
          </p>
        </div>
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ width: '60%', aspectRatio: '1', border: '1px solid var(--border-subtle)', background: 'var(--bg-raised)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src="/images/Founder.png" alt="Founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Global Application Footer */}
      <FooterCTA />
      <Footer />
    </div>
  );
}

export default function Overlay({ bots, hero, totalPages }) {
  const scroll = useScroll();
  const [progress, setProgress] = useState(0);

  useFrame(() => setProgress(scroll.offset));

  return (
    <Scroll html>
      {/* Scroll progress bar — fixed top */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: `${progress * 100}%`,
        height: '2px',
        background: 'var(--accent-gold)',
        zIndex: 1000,
        transition: 'width 0.1s ease',
        pointerEvents: 'none',
      }} />

      {/* INTRO / HERO PAGE */}
      <div style={{
        position: 'absolute',
        top: 0, width: '100vw', height: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '40px',
        pointerEvents: 'none',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          color: 'var(--accent-gold)', letterSpacing: '0.4em',
          marginBottom: '24px', textTransform: 'uppercase',
        }}>
          {hero.preTitle || 'DJS ✦ ASTRA // COMBAT ROBOTICS'}
        </div>

        <h1 className="text-hero" style={{
          margin: '0 0 16px 0',
          textShadow: '0 4px 30px rgba(0,0,0,0.8)',
          textTransform: 'uppercase',
        }}>
          {hero.headline || 'BUILT TO DESTROY.'}
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '15px',
          fontWeight: 300, color: 'var(--text-muted)',
          maxWidth: '500px', margin: '0 0 48px',
          lineHeight: 1.7,
        }}>
          {hero.subHeadline || 'Scroll to deploy our arsenal. Each machine engineered for one purpose — total arena dominance.'}
        </p>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: '48px',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '20px 0',
          marginBottom: '48px',
        }}>
          {[
            { num: bots.length, label: 'ACTIVE BOTS' },
            { num: '3', label: 'COMPETITION WINS' },
            { num: 'SINCE 2019', label: 'FIGHTING' },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '32px',
                fontWeight: 400, color: 'var(--accent-gold)',
              }}>{num}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px',
                letterSpacing: '0.2em', color: 'var(--text-muted)',
                marginTop: '4px',
              }}>{label}</div>
            </div>
          ))}
        </div>

        <div className="text-label" style={{
          position: 'absolute', bottom: '40px',
          left: '50%', transform: 'translateX(-50%)',
          color: 'var(--accent-gold)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '8px',
          fontFamily: 'var(--font-mono)', fontSize: '9px',
          letterSpacing: '0.3em',
          animation: 'bounceDown 1.8s ease-in-out infinite',
        }}>
          SCROLL TO EXPLORE
          <div style={{ width: '1px', height: '24px', background: 'var(--accent-gold)', opacity: 0.5 }} />
        </div>
      </div>

      {/* BOT PAGES */}
      {bots.map((bot, i) => (
        <BotPage key={bot.id || i} bot={bot} index={i} totalBots={bots.length} totalPages={totalPages} />
      ))}

      {/* CLOSING CTA PAGE */}
      <CtaPage totalBots={bots.length} />

      {/* ABOUT TEXT AND GLOBAL FOOTER */}
      <AboutAndFooterPage totalBots={bots.length} hero={hero} />

      {/* SIDEBAR PROGRESS DOTS */}
      <div style={{
        position: 'fixed',
        right: '32px', top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column',
        gap: '10px', pointerEvents: 'none', zIndex: 500,
      }}>
        {Array.from({ length: totalPages }).map((_, i) => {
          const segmentProgress = i / (totalPages - 1);
          const isActive = progress >= segmentProgress - 0.02 &&
                           progress < (i + 1) / (totalPages - 1) + 0.02;
          return (
            <div key={i} style={{
              width: '3px',
              height: isActive ? '24px' : '4px',
              background: 'var(--accent-gold)',
              opacity: isActive ? 1 : 0.2,
              borderRadius: '2px',
              transition: 'all 300ms ease',
            }} />
          );
        })}
      </div>
    </Scroll>
  );
}
