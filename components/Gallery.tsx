import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/lib/gallery-data";
import { ArrowRightIcon } from "./icons";

export default function Gallery() {
  const items = galleryItems.slice(0, 8);

  return (
    <section id="galeria" className="bg-ink-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold">PORTFÓLIO</span>
          <h2 className="font-display text-balance mt-4 text-3xl font-bold text-cream sm:text-4xl">
            Galeria de projetos
          </h2>
          <p className="mt-4 text-base text-cream-dim">
            Alguns exemplos do nosso trabalho — fotos ilustrativas, em breve substituídas pelos
            projetos reais da Norte Estofados.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-cream/10 bg-ink-soft"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 25vw, 45vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-4">
                <span className="text-xs font-medium text-cream sm:text-sm">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-7 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            Ver catálogo completo
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
