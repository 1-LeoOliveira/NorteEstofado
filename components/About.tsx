import { CheckIcon } from "./icons";

const pillars = [
  {
    title: "Projetos Personalizados",
    description: "Cada carro recebe um projeto único, pensado a partir do modelo, cor e estilo do cliente.",
  },
  {
    title: "Excelência Artesanal",
    description: "Costura e acabamento feitos à mão por profissionais especializados em tapeçaria automotiva.",
  },
  {
    title: "Materiais Premium",
    description: "Couro legítimo e sintético de alta durabilidade, com garantia em todos os serviços realizados.",
  },
];

const differentials = [
  "Atendimento consultivo do início ao fim",
  "Excelência em detalhes e acabamento",
  "Profissionais especializados e experientes",
  "Qualidade comprovada em cada projeto",
];

export default function About() {
  return (
    <section id="sobre" className="bg-ink-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-gold">QUEM SOMOS</span>
            <h2 className="font-display text-balance mt-4 text-3xl font-bold leading-tight text-cream sm:text-4xl">
              Tradição e personalização de alto padrão em tapeçaria automotiva
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream-dim">
              A Norte Estofados nasceu da paixão por transformar o interior de veículos em
              ambientes únicos, com conforto, design e acabamento de qualidade. Combinamos
              técnica apurada e materiais selecionados para entregar resultados que unem
              estética e durabilidade.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-cream/10 bg-ink p-6">
                  <h3 className="font-display text-sm font-bold text-gold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-dim">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold text-cream">Por que os clientes escolhem a Norte</h3>
            <ul className="mt-8 space-y-5">
              {differentials.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold/15 text-gold">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-base text-cream-dim">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
