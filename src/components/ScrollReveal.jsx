import { useEffect, useRef } from 'react';

export default function ScrollReveal({
  children,
  className = 'reveal',
  threshold = 0.15,
  delay = 0,
  rootMargin = '0px',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('revealed');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, delay, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
