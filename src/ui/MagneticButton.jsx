import { useCallback, useRef, useState } from 'react';

/**
 * CTA with three coupled cursor effects:
 *  1. A magnetic lean — the whole control springs a few px toward the pointer.
 *  2. A radial highlight tracking the pointer across the surface.
 *  3. A soft halo behind the primary variant.
 */
const MagneticButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  strength = 6,
  type,
  disabled,
  external,
  download,
}) => {
  const wrapRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback(
    (e) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;
      el.style.setProperty('--bmx', `${localX}px`);
      el.style.setProperty('--bmy', `${localY}px`);
      const btn = el.querySelector('.btn');
      if (!btn) return;
      if (strength > 0) {
        const nx = (localX / rect.width - 0.5) * 2;
        const ny = (localY / rect.height - 0.5) * 2;
        btn.style.transform = `translate(${nx * strength}px, ${ny * strength}px)`;
      }
    },
    [strength]
  );

  const handleLeave = useCallback(() => {
    const el = wrapRef.current;
    setHovered(false);
    if (!el) return;
    el.style.setProperty('--bmx', '-200px');
    el.style.setProperty('--bmy', '-200px');
    const btn = el.querySelector('.btn');
    if (btn) btn.style.transform = '';
  }, []);

  const surface = `btn ${variant} ${className}`;

  return (
    <span
      ref={wrapRef}
      className="btn-wrap"
      onPointerMove={handleMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={handleLeave}
    >
      {variant === 'primary' ? (
        <span className={`btn-halo ${hovered ? 'lit' : ''}`} aria-hidden />
      ) : null}
      {href ? (
        <a
          href={href}
          className={surface}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...(download ? { download: '' } : {})}
        >
          <span className="btn-highlight" aria-hidden />
          <span className="btn-inner">{children}</span>
        </a>
      ) : (
        <button type={type || 'button'} onClick={onClick} disabled={disabled} className={surface}>
          <span className="btn-highlight" aria-hidden />
          <span className="btn-inner">{children}</span>
        </button>
      )}
    </span>
  );
};

export default MagneticButton;
