import { InfiniteSlider } from "@/components/ui/infinite-slider";
import republiqueFrancaise from "@/assets/logos/republique-francaise.png";
import immobilierNotaires from "@/assets/logos/immobilier-notaires.png";
import figaro from "@/assets/logos/figaro.png";
import bienici from "@/assets/logos/bienici.png";
import laforet from "@/assets/logos/laforet.png";
import leboncoin from "@/assets/logos/leboncoin.png";
import century21 from "@/assets/logos/century21.png";
import iad from "@/assets/logos/iad.png";
import orpi from "@/assets/logos/orpi.png";

const ClientLogos = () => {
  const logos = [
    { name: "République Française", image: republiqueFrancaise },
    { name: "Immobilier Notaires", image: immobilierNotaires },
    { name: "Figaro Immobilier", image: figaro },
    { name: "Bien'ici", image: bienici },
    { name: "Laforêt", image: laforet },
    { name: "LeBonCoin", image: leboncoin },
    { name: "Century 21", image: century21 },
    { name: "IAD", image: iad },
    { name: "Orpi", image: orpi },
    { name: "République Française", image: republiqueFrancaise },
    { name: "Immobilier Notaires", image: immobilierNotaires },
    { name: "Figaro Immobilier", image: figaro },
    { name: "Bien'ici", image: bienici },
    { name: "Laforêt", image: laforet },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container flex flex-col items-center text-center">
        <h3 className="text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider">
          Plus de 1 500 Sources de Données Immobilières
        </h3>
      </div>
      <InfiniteSlider gap={48} duration={30} durationOnHover={50} className="py-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-6 py-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors min-w-[180px] h-[100px]"
          >
            <img 
              src={logo.image} 
              alt={logo.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
};

export default ClientLogos;
