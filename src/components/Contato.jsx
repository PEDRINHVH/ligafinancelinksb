import Reveal from './Reveal';
import Button from './Button';

export default function Contato() {
  return (
    <section id="contato" className="bg-white py-12 text-black md:py-16">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <Reveal>
          <p className="font-display font-expanded text-xs font-bold uppercase tracking-[0.28em] text-black/60">
            Contato
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display font-expanded text-4xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-5xl">
            Vamos analisar o próximo <span className="text-gold">case</span> juntos.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
            Se você estuda na Link School of Business e quer construir carreira em mercado
            financeiro, o próximo ciclo de projetos começa em breve. Traga sua ambição — a base
            técnica a gente constrói junto.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="mailto:contato@linkfinance.com.br" variant="primary">
              Fale com a Link Finance
            </Button>
            <Button href="#sobre" variant="secondaryDark">
              Reveja a proposta
            </Button>
          </div>
          <p className="mt-6 text-sm text-black/50">
            contato@linkfinance.com.br
          </p>
        </Reveal>
      </div>
    </section>
  );
}
