import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
