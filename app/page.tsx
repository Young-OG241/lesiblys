import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import MenuSection from "@/components/MenuSection";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfoBar />
      <MenuSection />
      <Reservation />
      <Footer />
    </main>
  );
}
