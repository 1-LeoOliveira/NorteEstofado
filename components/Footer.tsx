import { siteConfig } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon, LogoMark, TiktokIcon, YoutubeIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-ink-soft border-t border-cream/10 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 text-cream">
              <LogoMark className="h-8 w-8 text-gold" />
              <span className="font-display leading-none">
                <span className="block text-lg font-bold tracking-wide">NORTE</span>
                <span className="block text-[10px] tracking-[0.3em] text-gold">ESTOFADOS</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-dim">
              Tapeçaria automotiva e náutica de alto padrão: bancos em couro, painéis, capotas
              e personalização completa do interior de carros e embarcações.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-cream">LINKS</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream-dim">
              <li><a href="/#sobre" className="hover:text-gold">Sobre Nós</a></li>
              <li><a href="/#servicos" className="hover:text-gold">Serviços</a></li>
              <li><a href="/#nautico" className="hover:text-gold">Náutico</a></li>
              <li><a href="/catalogo" className="hover:text-gold">Catálogo</a></li>
              <li><a href="/#contato" className="hover:text-gold">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-cream">CONTATO</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream-dim">
              <li>{siteConfig.phoneDisplay}</li>
              <li>{siteConfig.email}</li>
              <li>{siteConfig.address.line1}</li>
              <li>{siteConfig.address.line2}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-cream">REDES SOCIAIS</h3>
            <div className="mt-4 flex gap-3">
              <a href={siteConfig.social.instagram} className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream-dim transition-colors hover:border-gold/50 hover:text-gold">
                <InstagramIcon />
              </a>
              <a href={siteConfig.social.facebook} className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream-dim transition-colors hover:border-gold/50 hover:text-gold">
                <FacebookIcon />
              </a>
              <a href={siteConfig.social.youtube} className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream-dim transition-colors hover:border-gold/50 hover:text-gold">
                <YoutubeIcon />
              </a>
              <a href={siteConfig.social.tiktok} className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream-dim transition-colors hover:border-gold/50 hover:text-gold">
                <TiktokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream-dim/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>CNPJ: {siteConfig.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}
