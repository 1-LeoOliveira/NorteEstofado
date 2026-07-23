"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, galleryItems, type Category } from "@/lib/gallery-data";
import { whatsappLink } from "@/lib/site-config";

export default function CatalogGrid() {
  const [active, setActive] = useState<Category>("Todos");

  const items =
    active === "Todos" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              active === category
                ? "border-gold bg-gold text-ink"
                : "border-cream/15 text-cream-dim hover:border-gold/40 hover:text-gold"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-cream/10 bg-ink-soft"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(min-width: 1024px) 33vw, 90vw"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-5">
              <span className="text-xs font-semibold tracking-wide text-gold">{item.category}</span>
              <span className="mt-1 text-base font-semibold text-cream">{item.title}</span>
              <a
                href={whatsappLink(`Olá! Gostaria de um orçamento parecido com: ${item.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-fit rounded-full bg-gold px-4 py-2 text-xs font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
