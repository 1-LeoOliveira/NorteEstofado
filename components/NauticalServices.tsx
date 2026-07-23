import Image from "next/image";
import { ArrowRightIcon } from "./icons";
import { whatsappLink } from "@/lib/site-config";

const services = [
  {
    title: "Bancos de Popa e Proa",
    description: "Revestimento de bancos náuticos com materiais impermeáveis, resistentes ao sol e à maresia.",
  },
  {
    title: "Estofamento de Cabines",
    description: "Forração de sofás, encostos e almofadas internas com acabamento premium e conforto.",
  },
  {
    title: "Capotas e Toldos Náuticos",
    description: "Confecção sob medida de capotas, toldos e coberturas para embarcações de todos os portes.",
  },
  {
    title: "Estofado para Jet Ski",
    description: "Revestimento e reparo de bancos de jet ski e lanchas esportivas.",
  },
  {
    title: "Impermeabilização e Proteção UV",
    description: "Tratamento dos materiais para resistência à água salgada e aos raios solares.",
  },
  {
    title: "Reparos e Manutenção",
    description: "Conserto de rasgos, revisão de costuras e substituição de espumas desgastadas.",
  },
];

export default function NauticalServices() {
  return (
    <section id="nautico" className="bg-ink-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-gold">TAMBÉM ATENDEMOS EMBARCAÇÕES</span>
            <h2 className="font-display text-balance mt-4 text-3xl font-bold leading-tight text-cream sm:text-4xl">
              Estofamento náutico sob medida
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-dim">
              Levamos a mesma excelência da tapeçaria automotiva para dentro d&apos;água:
              bancos, cabines, capotas e toldos com materiais próprios para resistir ao sol,
              à água salgada e ao uso intenso a bordo.
            </p>
            <div className="mt-8">
              <a
                href={whatsappLink("Olá! Gostaria de um orçamento para estofamento náutico.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
              >
                Orçar estofamento náutico
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cream/10 bg-charcoal">
            <Image
              src="https://images.unsplash.com/photo-1684849843504-7919ac9ede9c?auto=format&fit=crop&w=1000&q=80"
              alt="Banco de popa em couro náutico"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-ink p-7 transition-colors hover:border-gold/40"
            >
              <span className="font-display text-4xl font-bold text-cream/10 transition-colors group-hover:text-gold/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-lg font-bold text-cream">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">{service.description}</p>
              <a
                href={whatsappLink(`Olá! Gostaria de saber mais sobre: ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
              >
                Saiba mais
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
