import Image from "next/image";
import { whatsappLink } from "@/lib/site-config";
import { ArrowRightIcon } from "./icons";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold">
            TAPEÇARIA AUTOMOTIVA E NÁUTICA DE ALTO PADRÃO
          </span>

          <h1 className="font-display text-balance mt-6 text-4xl font-bold leading-[1.1] text-cream sm:text-5xl lg:text-[3.4rem]">
            Personalização e acabamento em couro que transformam carros e embarcações
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg">
            Bancos em couro, volante, painéis e forro de teto para o seu carro — e capotas,
            cabines e bancos náuticos para a sua embarcação. Mão de obra especializada e
            materiais premium, sob medida em cada projeto.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
            >
              Faça um orçamento
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-7 py-4 text-sm font-semibold text-cream transition-colors hover:border-gold/50 hover:text-gold"
            >
              Conheça os serviços
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-cream/10 pt-8">
            <div>
              <dt className="sr-only">Anos de experiência</dt>
              <dd className="font-display text-2xl font-bold text-gold sm:text-3xl">+15</dd>
              <p className="mt-1 text-xs text-cream-dim sm:text-sm">Anos de experiência</p>
            </div>
            <div>
              <dt className="sr-only">Projetos entregues</dt>
              <dd className="font-display text-2xl font-bold text-gold sm:text-3xl">+2.000</dd>
              <p className="mt-1 text-xs text-cream-dim sm:text-sm">Projetos entregues</p>
            </div>
            <div>
              <dt className="sr-only">Clientes satisfeitos</dt>
              <dd className="font-display text-2xl font-bold text-gold sm:text-3xl">98%</dd>
              <p className="mt-1 text-xs text-cream-dim sm:text-sm">Clientes satisfeitos</p>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-cream/10 bg-charcoal shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1636647510477-5ec1593b8be3?auto=format&fit=crop&w=1000&q=80"
              alt="Banco automotivo revestido em couro vermelho"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gold/20 bg-ink-soft px-6 py-4 shadow-xl sm:block">
            <p className="font-display text-xl font-bold text-gold">Garantia</p>
            <p className="text-xs text-cream-dim">em todos os serviços</p>
          </div>
        </div>
      </div>
    </section>
  );
}
