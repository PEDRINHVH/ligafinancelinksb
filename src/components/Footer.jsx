const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'O que fazemos', href: '#o-que-fazemos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Link Finance — voltar ao topo">
              <img src="/logo.svg" alt="Logo da Link Finance" className="h-11 w-11 rounded-full" loading="lazy" />
              <span className="font-display font-expanded text-sm font-extrabold uppercase tracking-[0.18em] text-white">
                Link Finance
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Formação de analistas, na prática. A liga de mercado financeiro da Link School of
              Business.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Links do rodapé">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-[44px] py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-gold md:min-h-0 md:py-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-white/40">
            © {year} Link Finance — Liga de Mercado Financeiro da Link School of Business. Todos
            os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
