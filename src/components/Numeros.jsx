import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

const metricas = [
  { valor: 30, sufixo: '+', label: 'Projetos entregues no ecossistema' },
  { valor: 45, sufixo: '+', label: 'Relatórios de research publicados' },
  { valor: 80, sufixo: '+', label: 'Membros ativos em formação' },
];

function Metrica({ valor, sufixo, label, active }) {
  const count = useCountUp(valor, active);
  return (
    <div className="text-center md:text-left">
      <p className="font-display font-expanded text-6xl font-black leading-none text-gold md:text-7xl">
        {count}
        {sufixo}
      </p>
      <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-white/65">{label}</p>
    </div>
  );
}

export default function Numeros() {
  const [ref, inView] = useInView({ threshold: 0.35 });

  return (
    <section className="bg-black py-12 md:py-16" aria-label="Números do ecossistema">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Impacto" title="O ecossistema em números" />
        <div ref={ref} className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
          {metricas.map((m, i) => (
            <Reveal key={m.label} delay={i * 120}>
              <Metrica {...m} active={inView} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
