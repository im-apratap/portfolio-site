import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered reveal. Fires once, when ~20% of the element has entered
 * the viewport. Reduced motion is honoured by the global CSS rule.
 */
const Reveal = ({ children, className = '', delay = 0, distance = 26, as = 'div' }) => {
  const Tag = as;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{
        '--reveal-delay': `${delay}s`,
        '--reveal-distance': `${distance}px`,
      }}
    >
      {children}
    </Tag>
  );
};

/** Section heading block used by every major section for vertical rhythm. */
export const SectionHead = ({ eyebrow, title, description }) => (
  <div className="section-head">
    {eyebrow ? (
      <Reveal>
        <span className="eyebrow glass">
          <span className="dot" />
          {eyebrow}
        </span>
      </Reveal>
    ) : null}
    <Reveal delay={0.06}>
      <h2>{title}</h2>
    </Reveal>
    {description ? (
      <Reveal delay={0.12}>
        <p>{description}</p>
      </Reveal>
    ) : null}
  </div>
);

export default Reveal;
