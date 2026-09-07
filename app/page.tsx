import Chrome from "@/components/Chrome";
import Disclosure from "@/components/Disclosure";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import WhyFiber from "@/components/WhyFiber";
import Process from "@/components/Process";
import Bundles from "@/components/Bundles";
import Tv from "@/components/Tv";
import Phone from "@/components/Phone";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Chrome />
      <Disclosure />
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        {/* Canonical order: Fiber → Bundles → TV → Phone. Frontier sells no
            cable product and, as of 2026-09-07, no mobile line for new
            customers on this program. */}
        <Plans />
        <Bundles />
        <Tv />
        <Phone />
        <WhyFiber />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
