import { useEffect, useRef } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { prefersReducedMotion } from '../hooks/useInView';

function Seal() {
  return (
    <div className="absolute -bottom-8 -left-4 flex h-28 w-28 items-center justify-center rounded-full bg-black shadow-xl md:-left-10 md:h-36 md:w-36">
      <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
        </defs>
        <text fill="#E8C060" fontSize="8.2" fontFamily="Archivo, sans-serif" fontWeight="700" letterSpacing="2.2">
          <textPath href="#seal-circle">INICIATIVA OFICIAL • ECOSSISTEMA LINK •</textPath>
        </text>
      </svg>
      <svg className="h-6 w-6 text-gold md:h-8 md:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <path d="M3 17l5-6 4 3 6-8" />
        <path d="M18 6h3v3" />
      </svg>
      <span className="sr-only">Selo: iniciativa oficial do ecossistema Link</span>
    </div>
  );
}

export default function Sobre() {
  const imgRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const wrap = wrapRef.current;
        const img = imgRef.current;
        if (!wrap || !img) return;
        const rect = wrap.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        img.style.transform = `translateY(${progress * -36}px) scale(1.12)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="sobre" className="bg-white py-12 text-black md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <SectionHeading
            dark={false}
            eyebrow="Sobre a liga"
            title="O braço de mercado financeiro do ecossistema Link"
          />
          <Reveal delay={120}>
            <p className="mt-6 text-base leading-relaxed text-black/70 md:text-lg">
              A Link Finance é a liga de mercado financeiro da Link School of Business. Nosso
              papel é encurtar a distância entre a sala de aula e a mesa de operações: aqui,
              estudantes aprendem finanças do jeito que o mercado trabalha — analisando empresas,
              construindo modelos e defendendo teses.
            </p>
            <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">
              Formamos analistas por meio de projetos reais: relatórios de research, valuation de
              companhias listadas, simulações de carteira e estudos para empresas parceiras do
              ecossistema Link. Teoria importa. Prática decide.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-8 space-y-3">
              {[
                'Trilhas de formação em valuation, research e risco',
                'Squads com mentoria de mercado',
                'Entregas para empresas e para a banca acadêmica',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-black/80 md:text-base">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div ref={wrapRef} className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                ref={imgRef}
                src="/images/sobre-1200.webp"
                srcSet="/images/sobre-700.webp 700w, /images/sobre-1200.webp 1200w"
                sizes="(min-width: 768px) 50vw, 100vw"
                alt="Estudantes da Link School of Business em reunião de análise"
                loading="lazy"
                className="h-[420px] w-full scale-[1.12] object-cover md:h-[520px]"
              />
            </div>
            <Seal />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
