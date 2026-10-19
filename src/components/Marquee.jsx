const terms = [
  'Mercado de capitais',
  'Valuation',
  'Equity Research',
  'Gestão de risco',
  'Private Equity',
  'M&A',
  'Análise fundamentalista',
  'Simulação de carteiras',
];

function Track({ hidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {terms.map((term) => (
        <span key={term} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display font-expanded text-sm font-extrabold uppercase tracking-[0.2em] text-black md:text-base">
            {term}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-black/70" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-gold py-4">
      <div className="animate-marquee flex w-max">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
