import { useCallback, useRef } from 'react';

/**
 * Elevated panel: a faint luminance lift plus a 1px hairline. While the
 * pointer moves across it, CSS custom properties drive a specular interior
 * wash and a lit hairline edge nearest the cursor.
 */
const GlassCard = ({ children, className = '', as = 'div' }) => {
  const Tag = as;
  const ref = useRef(null);

  const onPointerMove = useCallback((e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    node.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

  const onPointerLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--mx', '-400px');
    node.style.setProperty('--my', '-400px');
  }, []);

  return (
    <Tag
      ref={ref}
      className={`panel ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <span className="spec-wash" aria-hidden />
      <span className="spec-edge" aria-hidden />
      <span className="spec-top" aria-hidden />
      <div className="panel-content">{children}</div>
    </Tag>
  );
};

export default GlassCard;
