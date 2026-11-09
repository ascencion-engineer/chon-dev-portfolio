import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About, Benefits, Process, Services, Testimonials } from "@/components/Sections";
import { UseCases } from "@/components/UseCases";
import { Contact, Footer, WhatsAppFloat } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="inicio">
        <Hero />
        <Benefits />
        <Services />
        <UseCases />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
