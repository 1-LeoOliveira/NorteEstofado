import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import CatalogGrid from "@/components/CatalogGrid";

export const metadata: Metadata = {
  title: "Catálogo de Projetos | Norte Estofados",
  description: "Confira exemplos de bancos em couro, volantes, painéis e outros projetos de estofamento automotivo da Norte Estofados.",
};

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ink pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold">CATÁLOGO</span>
            <h1 className="font-display text-balance mt-4 text-3xl font-bold text-cream sm:text-4xl">
              Catálogo de projetos e serviços
            </h1>
            <p className="mt-4 text-base text-cream-dim">
              Navegue pelas categorias para ver exemplos do que fazemos. Fotos ilustrativas —
              em breve substituídas pelos projetos reais da Norte Estofados.
            </p>
          </div>

          <div className="mt-14">
            <CatalogGrid />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
