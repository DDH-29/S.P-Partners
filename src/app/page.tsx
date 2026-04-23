import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Highlights from "@/components/Highlights";
import ProfileShowcase from "@/components/ProfileShowcase";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="page-shell">
      <Header />
      <main id="top">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Highlights />
        <ProfileShowcase />
        <Contact />
      </main>
    </div>
  );
}
