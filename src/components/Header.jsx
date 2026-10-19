import { useEffect, useState } from 'react';
import { ArrowIcon } from './Button';

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'O que fazemos', href: '#o-que-fazemos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? 'bg-black/85 backdrop-blur-md' : 'bg-transparent'
        } ${scrolled && !open ? 'border-b border-white/10' : ''}`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Link Finance — início">
          <img src="/logo.svg" alt="Logo da Link Finance" className="h-10 w-10 rounded-full" />
          <span className="font-display font-expanded text-sm font-extrabold uppercase tracking-[0.18em] text-white">
            Link Finance
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden min-h-[44px] items-center gap-2 rounded-full bg-gold px-6 py-2.5 font-display font-expanded text-xs font-bold uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
        >
          Faça parte
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
        </div>
      </header>

      {open && (
        <div id="menu-mobile" className="fixed inset-0 z-40 flex flex-col bg-black pt-24 md:hidden">
          <nav className="flex flex-1 flex-col justify-center gap-2 px-8 pb-16" aria-label="Navegação mobile">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center border-b border-white/10 py-4 font-display font-expanded text-3xl font-extrabold uppercase tracking-wide text-white transition-colors hover:text-gold"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex min-h-[44px] items-center justify-center gap-3 self-start rounded-full bg-gold px-8 py-4 font-display font-expanded text-sm font-bold uppercase tracking-[0.18em] text-black"
            >
              Faça parte
              <ArrowIcon className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
