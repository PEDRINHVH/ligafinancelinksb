export function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function Button({ href, variant = 'primary', children, className = '', ...rest }) {
  const base =
    'inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 font-display font-expanded text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 md:text-sm min-h-[44px]';
  const variants = {
    primary: 'bg-gold text-black shadow-[0_8px_30px_rgb(232_192_96/0.25)] hover:shadow-[0_12px_36px_rgb(232_192_96/0.35)]',
    secondary: 'border border-white/70 text-white hover:border-white',
    secondaryDark: 'border border-black/30 text-black hover:border-black',
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      <ArrowIcon />
    </a>
  );
}
