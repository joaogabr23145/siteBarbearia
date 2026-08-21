import About from "@/components/About";
import Booking from "@/components/Booking";
import Differentials from "@/components/Differentials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Booking />
        <About />
        <Differentials />
        <Gallery />
        <Testimonials />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
