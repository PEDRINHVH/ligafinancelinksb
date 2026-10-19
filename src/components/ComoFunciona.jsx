import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const etapas = [
  {
    num: '01',
    title: 'Formação',
    text: 'Trilhas de fundamentos: contabilidade, valuation, mercado de capitais e risco. A base técnica antes de qualquer entrega.',
  },
  {
    num: '02',
    title: 'Prática',
    text: 'Squads com mentoria aplicam a base em análises de empresas, modelos financeiros e simulações de portfólio com dados reais.',
  },
  {
    num: '03',
    title: 'Entrega',
    text: 'Relatórios publicados e apresentações para empresas parceiras e banca acadêmica. Tese defendida, número por número.',
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-white py-12 text-black md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading dark={false} eyebrow="Como funciona" title="Da base técnica à entrega" />

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {etapas.map((etapa, i) => (
            <Reveal key={etapa.num} delay={i * 120}>
              <div className={`border-t-2 border-black/10 pt-8 ${i > 0 ? '' : ''}`}>
                <span className="font-display font-expanded text-6xl font-black leading-none text-gold md:text-7xl">
                  {etapa.num}
                </span>
                <h3 className="mt-5 font-display font-expanded text-xl font-extrabold uppercase tracking-wide">
                  {etapa.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65 md:text-base">
                  {etapa.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
