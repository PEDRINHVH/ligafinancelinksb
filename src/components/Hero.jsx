import { Fragment } from 'react';
import Button from './Button';

const headline = [
  { text: 'Formamos', gold: false },
  { text: 'quem', gold: false },
  { text: 'entende', gold: false },
  { text: 'o', gold: false },
  { text: 'jogo', gold: false },
  { text: 'do', gold: false },
  { text: 'mercado.', gold: true },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex items-start overflow-hidden bg-black md:min-h-[85svh] md:items-center">
      <img
        src="/images/hero-1600.webp"
        srcSet="/images/hero-900.webp 900w, /images/hero-1600.webp 1600w"
        sizes="100vw"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        fetchpriority="high"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />

      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-40 w-full text-gold/20 md:h-56"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M0 190 L120 165 L240 178 L360 120 L480 140 L600 90 L720 110 L840 60 L960 85 L1080 40 L1200 62 L1320 20 L1440 35" />
        <path d="M0 210 L160 195 L320 200 L480 160 L640 170 L800 130 L960 145 L1120 105 L1280 115 L1440 90" opacity="0.5" />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-24 md:px-8 md:pb-16 md:pt-32">
        <p className="hero-mask font-display font-expanded text-xs font-bold uppercase tracking-[0.3em] text-gold">
          <span className="hero-word" style={{ animationDelay: '0ms' }}>
            Liga de Mercado Financeiro da Link School of Business
          </span>
        </p>

        <h1 className="mt-4 max-w-4xl font-display font-expanded text-[2.6rem] font-black uppercase leading-[1.02] tracking-tight text-white sm:text-6xl md:mt-6 md:text-7xl">
          {headline.map((word, i) => (
            <Fragment key={i}>
              <span className="hero-mask">
                <span
                  className={`hero-word ${word.gold ? 'text-gold' : ''}`}
                  style={{ animationDelay: `${150 + i * 90}ms` }}
                >
                  {word.text}
                </span>
              </span>{' '}
            </Fragment>
          ))}
        </h1>

        <p className="hero-mask-block mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          <span className="hero-word" style={{ animationDelay: '850ms' }}>
            A Link Finance conecta estudantes a projetos reais de finanças — valuation, equity
            research e gestão de risco — para formar os analistas que o mercado procura.
          </span>
        </p>

        <div className="hero-mask-block mt-8">
          <div className="hero-word" style={{ animationDelay: '1050ms' }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button href="#contato" variant="primary">
                Quero participar
              </Button>
              <Button href="#sobre" variant="secondary">
                Conheça a liga
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
