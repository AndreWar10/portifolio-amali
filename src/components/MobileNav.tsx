"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { navItems, siteConfig } from "@/lib/site";

interface MobileNavProps {
  scrolled: boolean;
}

export function MobileNav({ scrolled }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    const firstLink = navRef.current?.querySelector("a");
    firstLink?.focus();
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`relative z-[60] flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
          open ? "text-olive" : scrolled ? "text-olive hover:bg-olive/10" : "text-cream hover:bg-cream/15"
        }`}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
          <span className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${open ? "translate-y-[3.25px] rotate-45 bg-olive" : scrolled ? "bg-olive" : "bg-cream"}`} />
          <span className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${open ? "-translate-y-[3.25px] -rotate-45 bg-olive" : scrolled ? "bg-olive" : "bg-cream"}`} />
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={close} aria-hidden="true" />
          <nav ref={navRef} id="mobile-menu" className="absolute inset-y-0 right-0 flex w-full max-w-[300px] flex-col bg-cream shadow-2xl" aria-label="Menu mobile">
            <div className="flex h-[72px] items-center px-6">
              <span className="font-display text-2xl tracking-wider text-olive">{siteConfig.name}</span>
            </div>
            <div className="mx-6 h-px bg-gold/20" />
            <ul className="flex flex-1 flex-col gap-1 px-4 pt-6">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={close}
                    className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-medium text-ink/80 transition-colors hover:bg-rose/8 hover:text-olive"
                  >
                    <span className="text-[11px] font-semibold text-gold/50">0{i + 1}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-gold/15 px-6 py-5">
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-ink/40 transition-colors hover:text-rose" aria-label="Instagram (abre em nova aba)">
                @amaliagencia
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
