import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const equipe = [
  { nome: 'Ana Beatriz Rocha', cargo: 'Presidente', iniciais: 'AR' },
  { nome: 'Gustavo Lemos', cargo: 'Head de Research', iniciais: 'GL' },
  { nome: 'Marina Duarte', cargo: 'Head de Projetos', iniciais: 'MD' },
  { nome: 'Rafael Tavares', cargo: 'Head de Relações Institucionais', iniciais: 'RT' },
];

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}

export default function Equipe() {
  return (
    <section id="equipe" className="bg-black py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Liderança" title="Quem puxa a fila" />

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {equipe.map((pessoa, i) => (
            <Reveal key={pessoa.nome} delay={i * 90}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors duration-300 hover:border-gold/40">
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display font-expanded text-xl font-extrabold tracking-widest text-gold"
                  aria-hidden="true"
                >
                  {pessoa.iniciais}
                </div>
                <h3 className="mt-5 font-display font-expanded text-sm font-extrabold uppercase tracking-wide text-white md:text-base">
                  {pessoa.nome}
                </h3>
                <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-white/60">{pessoa.cargo}</p>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`LinkedIn de ${pessoa.nome}`}
                  className="mx-auto mt-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-gold hover:text-gold"
                >
                  <LinkedInIcon />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
