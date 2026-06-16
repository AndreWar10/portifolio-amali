import Image from "next/image";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[50%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="container-section py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="" width={36} height={36} className="h-9 w-9 object-contain brightness-125" />
              <span className="font-display text-3xl tracking-wider">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-cream/35">
              {siteConfig.tagline}. Agência de publicidade e propaganda formada por estudantes da UNIFRAN — Universidade de Franca.
            </p>
            <div className="mt-6 flex gap-4">
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/[0.06] text-cream/40 ring-1 ring-cream/8 transition-all duration-300 hover:bg-rose/20 hover:text-rose hover:ring-rose/30" aria-label="Instagram (abre em nova aba)">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/[0.06] text-cream/40 ring-1 ring-cream/8 transition-all duration-300 hover:bg-gold/20 hover:text-gold hover:ring-gold/30" aria-label="Enviar e-mail">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Seções</h2>
            <ul className="mt-5 space-y-2.5">
              {navItems.map((item) => (<li key={item.href}><a href={item.href} className="text-sm font-light text-cream/35 transition-colors hover:text-cream">{item.label}</a></li>))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Contato</h2>
            <ul className="mt-5 space-y-2.5 text-sm font-light">
              <li><a href={`mailto:${siteConfig.email}`} className="text-cream/35 transition-colors hover:text-cream">{siteConfig.email}</a></li>
              <li><a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-cream/35 transition-colors hover:text-cream" aria-label="Instagram (abre em nova aba)">@amaliagencia</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/6 pt-8 sm:flex-row">
          <p className="text-xs font-light text-cream/20">© {year} {siteConfig.name}. Todos os direitos reservados.</p>
          <a href="#hero" className="flex items-center gap-2 text-xs text-cream/20 transition-colors hover:text-cream/40">
            Voltar ao topo
            <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
