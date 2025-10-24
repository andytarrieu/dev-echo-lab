import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Features from "@/components/Features";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ClientLogos />
        <Features />
        <WhoWeHelp />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
