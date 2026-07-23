import { ArrowRightIcon } from "./icons";
import { whatsappLink } from "@/lib/site-config";

const services = [
  {
    title: "Bancos em Couro",
    description: "Revestimento de bancos em couro legítimo ou sintético, com costura sob medida para o seu modelo.",
  },
  {
    title: "Revestimento de Volante",
    description: "Troca e personalização do volante com acabamento em couro para mais conforto e estilo.",
  },
  {
    title: "Coifas e Manoplas",
    description: "Substituição de coifas de câmbio e manoplas desgastadas, renovando o visual do interior.",
  },
  {
    title: "Painéis Automotivos",
    description: "Revestimento e pintura de painéis com mão de obra qualificada e acabamento impecável.",
  },
  {
    title: "Troca do Forro de Teto",
    description: "Substituição do forro de teto danificado ou solto, devolvendo o acabamento original.",
  },
  {
    title: "Iluminação Interna",
    description: "Instalação de iluminação em LED para valorizar o interior do veículo com um toque moderno.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold">O QUE FAZEMOS</span>
          <h2 className="font-display text-balance mt-4 text-3xl font-bold text-cream sm:text-4xl">
            Serviços de estofamento automotivo
          </h2>
          <p className="mt-4 text-base text-cream-dim">
            Soluções completas para renovar e personalizar o interior do seu veículo.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-ink-soft p-7 transition-colors hover:border-gold/40"
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
