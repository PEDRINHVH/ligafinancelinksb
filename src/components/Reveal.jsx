import { useInView } from '../hooks/useInView';

export default function Reveal({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
