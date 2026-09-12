import { useEffect, useRef, useState } from 'react';

const BARS = [0.9, 0.5, 1.1, 0.7, 1.3, 0.6, 1.0, 0.45, 1.2, 0.8, 0.55, 1.15, 0.65, 0.95, 0.5, 1.05, 0.7, 1.25, 0.6, 0.9];

/**
 * A row of monochrome waveform bars. Animation runs only while the element
 * is onscreen, and each bar is phase-shifted for an organic ripple.
 */
const Waveform = ({ barCount = 20, className = '' }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const bars = Array.from({ length: barCount }, (_, i) => BARS[i % BARS.length]);

  return (
    <div ref={ref} className={`waveform ${className}`} aria-hidden>
      {bars.map((scale, i) => (
        <span
          key={i}
          className="waveform-bar"
          style={{
            height: `${scale * 100}%`,
            animationDelay: `${(i % 7) * 0.12}s`,
            animationPlayState: active ? 'running' : 'paused',
          }}
        />
      ))}
    </div>
  );
};

export default Waveform;
