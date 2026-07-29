import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Statement from "@/components/home/Statement";
import Gallery from "@/components/home/Gallery";
import Approach from "@/components/home/Approach";
import Disciplines from "@/components/home/Disciplines";
import About from "@/components/home/About";
import PrintsTeaser from "@/components/home/PrintsTeaser";
import BookingCta from "@/components/home/BookingCta";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="relative w-full bg-ink">
      <Header />
      <Hero />
      <Statement />
      <Gallery />
      <Approach />
      <Disciplines />
      <About />
      <PrintsTeaser />
      <BookingCta />
      <Footer />
    </div>
  );
}
