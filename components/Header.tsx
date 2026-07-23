"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { LogoMark, PhoneIcon } from "./icons";

const links = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Sobre Nós" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#nautico", label: "Náutico" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="#inicio" className="flex items-center gap-2.5 text-cream">
          <LogoMark className="h-8 w-8 text-gold" />
          <span className="font-display leading-none">
            <span className="block text-lg font-bold tracking-wide">NORTE</span>
            <span className="block text-[10px] tracking-[0.3em] text-gold">ESTOFADOS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream-dim transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={`tel:+${siteConfig.whatsappNumber}`} className="flex items-center gap-2 text-sm text-cream-dim">
            <PhoneIcon className="h-4 w-4 text-gold" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            Faça um orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-cream lg:hidden"
          aria-label="Abrir menu"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`absolute left-0 top-[7px] h-[1.5px] w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-full bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-ink lg:hidden">
          <nav className="flex flex-col px-5 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream/5 py-3 text-sm font-medium text-cream-dim"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Faça um orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
