import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, dark = true, className = '' }) {
  return (
    <Reveal className={className}>
      <p
        className={`font-display font-expanded text-xs font-bold uppercase tracking-[0.28em] ${
          dark ? 'text-gold' : 'text-black/60'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display font-expanded text-4xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-5xl ${
          dark ? 'text-white' : 'text-black'
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
