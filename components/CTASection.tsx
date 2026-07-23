import { siteConfig, whatsappLink } from "@/lib/site-config";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./icons";

export default function CTASection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="text-xs font-semibold tracking-[0.25em] text-gold">AGENDAMENTO</span>
        <h2 className="font-display text-balance mt-4 text-3xl font-bold text-cream sm:text-4xl">
          Agende seu atendimento com quem entende de personalização premium
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream-dim">
          Fale agora com nossa equipe pelo WhatsApp e receba um orçamento sem compromisso
          para o seu projeto.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            Solicite seu orçamento agora
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-cream/10 bg-ink-soft px-6 py-6">
            <PhoneIcon className="h-5 w-5 text-gold" />
            <p className="text-sm font-semibold text-cream">{siteConfig.phoneDisplay}</p>
            <p className="text-xs text-cream-dim">WhatsApp: {siteConfig.whatsappDisplay}</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-cream/10 bg-ink-soft px-6 py-6">
            <MapPinIcon className="h-5 w-5 text-gold" />
            <p className="text-sm font-semibold text-cream">{siteConfig.address.line1}</p>
            <p className="text-xs text-cream-dim">{siteConfig.address.line2}</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-cream/10 bg-ink-soft px-6 py-6">
            <ClockIcon className="h-5 w-5 text-gold" />
            <p className="text-sm font-semibold text-cream">Horário de atendimento</p>
            <p className="text-xs text-cream-dim">{siteConfig.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
