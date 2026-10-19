import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const sparkProps = {
  viewBox: '0 0 400 160',
  preserveAspectRatio: 'none',
  fill: 'none',
  'aria-hidden': true,
  className: 'h-full w-full',
};

const cases = [
  {
    categoria: 'Valuation',
    titulo: 'Valuation de companhia de consumo listada',
    descricao:
      'DCF e análise por múltiplos de uma empresa do setor de consumo, com tese de investimento defendida em banca.',
    tags: ['DCF', 'Múltiplos', 'Consumo'],
    chart: (
      <svg {...sparkProps}>
        <path d="M0 130 L50 118 L100 124 L150 96 L200 104 L250 70 L300 80 L350 48 L400 56" stroke="#E8C060" strokeWidth="2" />
        <path d="M0 130 L50 118 L100 124 L150 96 L200 104 L250 70 L300 80 L350 48 L400 56 L400 160 L0 160 Z" fill="rgb(232 192 96 / 0.08)" stroke="none" />
      </svg>
    ),
  },
  {
    categoria: 'Research',
    titulo: 'Relatório setorial: energia renovável no Brasil',
    descricao:
      'Mapeamento do setor, principais players e drivers de resultado, com cobertura iniciada em três companhias.',
    tags: ['Setorial', 'Equity Research', 'Energia'],
    chart: (
      <svg {...sparkProps}>
        <path d="M30 140 L30 100 M80 140 L80 74 M130 140 L130 112 M180 140 L180 58 M230 140 L230 88 M280 140 L280 44 M330 140 L330 70 M380 140 L380 34" stroke="#E8C060" strokeWidth="10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    categoria: 'Gestão de risco',
    titulo: 'Carteira multiativos simulada',
    descricao:
      'Alocação entre renda fixa, ações e cambio com rebalanceamento trimestral, backtest e análise de drawdown.',
    tags: ['Alocação', 'Backtest', 'Risco'],
    chart: (
      <svg {...sparkProps}>
        <path d="M0 120 L60 110 L120 118 L180 84 L240 92 L300 60 L360 68 L400 40" stroke="#E8C060" strokeWidth="2" />
        <path d="M0 140 L60 136 L120 138 L180 124 L240 128 L300 112 L360 116 L400 100" stroke="#E8C060" strokeWidth="1.5" strokeDasharray="5 6" opacity="0.55" />
      </svg>
    ),
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="bg-white py-12 text-black md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading dark={false} eyebrow="Projetos" title="Cases que saíram do papel" />
        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
            Uma amostra do tipo de entrega que os squads da liga produzem a cada ciclo.
          </p>
        </Reveal>

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {cases.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 100} className="min-w-[85%] snap-center sm:min-w-[60%] md:min-w-0">
              <article className="h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_40px_rgb(0_0_0/0.06)] transition-transform duration-300 hover:-translate-y-1">
                <div className="h-40 bg-black p-0">{c.chart}</div>
                <div className="p-6">
                  <p className="font-display font-expanded text-[11px] font-bold uppercase tracking-[0.24em] text-black/55">
                    {c.categoria}
                  </p>
                  <h3 className="mt-3 font-display font-expanded text-lg font-extrabold uppercase leading-snug tracking-wide">
                    {c.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65">{c.descricao}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags do projeto">
                    {c.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-black/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-black/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
