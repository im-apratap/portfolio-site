import { useEffect, useState } from 'react';
import './Navbar.css';

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (!element) return;
  const offset = 84;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;
  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        setScrolled(window.scrollY > 24);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <>
      {/* Scroll progress — full-bleed, pinned to the very top of the viewport. */}
      <span
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => handleNavClick(e, 'home')}
            aria-label="Aaditya Pratap — home"
          >
            <img src="/qubit_logo.svg" alt="" width="26" height="26" />
            <span>Aaditya Pratap</span>
          </a>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} aria-label="Sections">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              href="https://github.com/im-apratap"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              <span className="nav-cta-label">GitHub</span>
            </a>
            <button
              type="button"
              className={`nav-toggle ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
