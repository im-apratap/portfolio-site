import { useEffect, useRef } from 'react';
import { RESUME_CONFIG } from '../config/resume.config';
import GlassCard from '../ui/GlassCard';
import MagneticButton from '../ui/MagneticButton';
import Odometer from '../ui/Odometer';
import Reveal from '../ui/Reveal';
import './Home.css';

const FOCUS_AREAS = [
  { name: 'MERN Stack', status: 'Primary focus', shipped: true },
  { name: 'React Native', status: 'Shipped apps', shipped: true },
  { name: 'Solana / Web3', status: 'Building on-chain', shipped: true },
  { name: 'AI Security', status: '1 published · 1 under review', shipped: true },
];

const METRICS = [
  { value: 18, digits: 2, label: 'Public repositories on GitHub', foot: 'and counting' },
  { value: 2, digits: 1, label: 'Research papers in AI security', foot: '1 published · 1 under review' },
  { value: 3, digits: 1, label: 'Live deployed products', foot: 'droproom · solshare · omnisplit' },
  { value: 100, suffix: '%', digits: 3, label: 'Open to opportunities', foot: 'backend · full-stack' },
];

const Home = () => {
  // Parallax: the hero copy drifts down as it leaves the viewport — the same
  // move the reference makes with Framer Motion's useScroll + useTransform.
  const copyRef = useRef(null);

  useEffect(() => {
    const el = copyRef.current;
    if (!el) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.parentElement.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1.4);
        el.style.transform = `translateY(${progress * 22}%)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
  <>
    <section id="home" className="hero">
      <div aria-hidden className="hero-ambient">
        <div className="hero-noise" />
        {/* Oversized hallows sigil — a faint texture layer, same family as the
            global dot-matrix and grid. Static, masked to dissolve at edges. */}
        <svg className="hero-hallows" viewBox="0 0 100 100" aria-hidden>
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M50 10 L92 94 L8 94 Z" />
            <circle cx="50" cy="62" r="22" />
            <line x1="50" y1="10" x2="50" y2="94" />
          </g>
        </svg>
      </div>

      <div className="hero-grid">
        <div className="hero-copy" ref={copyRef}>
          <Reveal>
            <a href="#projects" className="hero-pill glass">
              <span className="hero-pill-dot">
                <span />
                <span className="ping" />
              </span>
              <span className="shimmer-text hero-pill-text">Open to work · Backend / Full-stack</span>
              <svg
                className="hero-pill-arrow"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="hero-title">
              <span className="hero-line-1">Shipping backend</span>
              <br />
              <span className="hero-line-2">systems that scale.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="hero-sub">
              I'm Aaditya Pratap — a full-stack developer specializing in the MERN stack,
              React Native and the Solana ecosystem, building high-performance APIs and
              scalable server-side systems. Currently researching AI security, with one
              published paper and a second under review at AsiaCCS.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="hero-ctas">
              <MagneticButton
                href={RESUME_CONFIG.RESUME_URL}
                external
                download
                className="hero-cta-main"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" />
                  <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" />
                </svg>
                <span>Download Resume</span>
                <span className="hero-cta-chip">PDF</span>
              </MagneticButton>
              <MagneticButton href="#projects" variant="secondary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M22 2L11 13" strokeLinecap="round" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>View Projects</span>
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="hero-trust">
              <a
                href="https://github.com/im-apratap"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-github"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                <span>GitHub</span>
              <span className="chip">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2l2.9 6.26L21.5 9.3l-4.75 4.4L17.8 20 12 16.6 6.2 20l1.05-6.3L2.5 9.3l6.6-1.04L12 2z" />
                </svg>
                18 repos
              </span>
              </a>
              <span className="hero-divider" aria-hidden />
              <p className="hero-meta">
                MERN · React Native · Solana · AI Security
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="hero-tiles-reveal">
            <ul className="hero-tiles">
              {FOCUS_AREAS.map((area) => (
                <li key={area.name} className={area.shipped ? 'lit' : 'dim'}>
                  <span className="hero-tile-mark" aria-hidden>
                    {area.shipped ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
                      </svg>
                    )}
                  </span>
                  <span className="hero-tile-text">
                    <span className="hero-tile-name">{area.name}</span>
                    <span className="hero-tile-status">{area.status}</span>
                  </span>
                </li>
              ))}
            </ul>          </Reveal>
        </div>
      </div>
    </section>

    {/* ------------------------------ metrics band ------------------------------ */}
    <section aria-label="Portfolio metrics" className="metrics">
      <div className="metrics-grid">
        {METRICS.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 0.09}>
            <GlassCard className="metric-tile">
              <div className="metric-inner">
                <p className="metric-value tnum">{metric.suffix ? metric.value.toLocaleString('en-US') : <Odometer value={metric.value} digits={metric.digits} />}{metric.suffix || ''}</p>
                <p className="metric-label">{metric.label}</p>
                <p className="metric-foot">{metric.foot}</p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  </>
  );
};

export default Home;
