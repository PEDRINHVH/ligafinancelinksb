import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  className: 'h-8 w-8 text-gold',
};

const frentes = [
  {
    title: 'Análise de empresas e valuation',
    text: 'Modelos de DCF, múltiplos comparáveis e teses de investimento construídas do zero, com dados reais de mercado.',
    icon: (
      <svg {...iconProps}>
        <path d="M3 20h18" />
        <path d="M6 16v-5" />
        <path d="M11 16V8" />
        <path d="M16 16v-3" />
        <path d="M21 16V5" />
      </svg>
    ),
  },
  {
    title: 'Equity research',
    text: 'Cobertura de companhias listadas e relatórios setoriais com recomendação fundamentada e padrão de mercado.',
    icon: (
      <svg {...iconProps}>
        <path d="M7 3h8l4 4v14H7z" />
        <path d="M15 3v4h4" />
        <path d="M10 12h6" />
        <path d="M10 16h6" />
      </svg>
    ),
  },
  {
    title: 'Simulação de carteiras e gestão de risco',
    text: 'Alocação de ativos, métricas de risco e backtests em portfólios simulados, com disciplina de gestor.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'M&A e mercado de capitais',
    text: 'Estudos de fusões e aquisições, IPOs e follow-ons: estruturação, precificação e tese estratégica.',
    icon: (
      <svg {...iconProps}>
        <path d="M8 7H4v10" />
        <path d="M16 7h4v10" />
        <path d="M4 12h6l2-3 2 6 2-3h4" />
      </svg>
    ),
  },
  {
    title: 'Projetos reais para empresas',
    text: 'Diagnósticos financeiros, modelagem e recomendações entregues a empresas parceiras do ecossistema Link.',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <path d="M3 13h18" />
      </svg>
    ),
  },
];

export default function OQueFazemos() {
  return (
    <section id="o-que-fazemos" className="bg-black py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="O que fazemos" title="Frentes de atuação" />
        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Cinco frentes que cobrem o ciclo completo do analista: da leitura do setor à entrega
            da recomendação.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {frentes.map((frente, i) => (
            <Reveal key={frente.title} delay={i * 80}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-gold/40 hover:bg-white/[0.07]">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 bg-gold/10">
                  {frente.icon}
                </div>
                <h3 className="mt-6 font-display font-expanded text-lg font-extrabold uppercase leading-snug tracking-wide text-white">
                  {frente.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{frente.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
