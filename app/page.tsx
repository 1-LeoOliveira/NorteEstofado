import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import NauticalServices from "@/components/NauticalServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <NauticalServices />
        <WhyChooseUs />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
