import Image from "next/image";
import { CheckIcon } from "./icons";

const reasons = [
  "Profissionais altamente qualificados",
  "Materiais premium e duráveis",
  "Garantia e revisão em cada projeto",
  "Referência em projetos personalizados na região",
  "Acabamento impecável e entrega ágil",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cream/10 bg-charcoal">
            <Image
              src="https://images.unsplash.com/photo-1757926331188-cffceee50760?auto=format&fit=crop&w=1000&q=80"
              alt="Interior de veículo com bancos em couro"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>

          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-gold">DIFERENCIAIS</span>
            <h2 className="font-display text-balance mt-4 text-3xl font-bold text-cream sm:text-4xl">
              Por que escolher a Norte Estofados
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream-dim">
              Unimos experiência, técnica e atendimento próximo para entregar um resultado
              que valoriza o seu veículo em cada detalhe.
            </p>

            <ul className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-4 rounded-xl border border-cream/10 bg-ink-soft px-5 py-4">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold/15 text-gold">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-cream sm:text-base">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
