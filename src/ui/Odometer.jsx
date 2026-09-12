import { useEffect, useRef, useState } from 'react';

/**
 * Odometer: a number that counts up from 0 when it enters the viewport,
 * then keeps ticking toward `value` as it changes. Tabular figures keep
 * the width steady while digits roll.
 */
const Odometer = ({ value, digits = 0, duration = 1400 }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);
  const fromRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;

        const from = fromRef.current;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          // ease-out expo
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          const current = from + (value - from) * eased;
          setDisplay(current);
          if (t < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            fromRef.current = value;
          }
        };
        rafRef.current = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  const shown = Math.round(display).toLocaleString('en-US').padStart(digits, '\u2007');

  return (
    <span ref={ref} className="odometer tnum">
      {shown}
    </span>
  );
};

export default Odometer;
