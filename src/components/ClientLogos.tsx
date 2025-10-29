import { LogoCloud } from "@/components/ui/logo-cloud-3";
import republiqueFrancaise from "@/assets/logos/republique-francaise.png";
import immobilierNotaires from "@/assets/logos/immobilier-notaires.png";
import figaro from "@/assets/logos/figaro.png";
import bienici from "@/assets/logos/bienici.png";
import laforet from "@/assets/logos/laforet.png";
import paruvendu from "@/assets/logos/paruvendu.png";
import century21 from "@/assets/logos/century21.png";
import iad from "@/assets/logos/iad.png";
import orpi from "@/assets/logos/orpi-new.png";
import meilleursagents from "@/assets/logos/meilleursagents.jpg";
import leboncoin from "@/assets/logos/leboncoin.png";
import seloger from "@/assets/logos/seloger.png";
import logicImmo from "@/assets/logos/logic-immo.jpg";

const ClientLogos = () => {
  const logos = [
    { src: republiqueFrancaise, alt: "République Française" },
    { src: meilleursagents, alt: "Meilleurs Agents" },
    { src: immobilierNotaires, alt: "Immobilier Notaires" },
    { src: figaro, alt: "Figaro Immobilier" },
    { src: bienici, alt: "Bien'ici" },
    { src: laforet, alt: "Laforêt" },
    { src: paruvendu, alt: "ParuVendu" },
    { src: century21, alt: "Century 21" },
    { src: iad, alt: "IAD" },
    { src: orpi, alt: "Orpi" },
    { src: leboncoin, alt: "LeBonCoin" },
    { src: seloger, alt: "SeLoger" },
    { src: logicImmo, alt: "Logic-Immo" },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container flex flex-col items-center text-center mb-8">
        <h3 className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
          Plus de 1 500 Sources de Données Immobilières
        </h3>
      </div>
      <div className="container">
        <div className="h-px bg-border/50 [mask-image:linear-gradient(to_right,transparent,black,transparent)] mb-8" />
        <LogoCloud logos={logos} />
        <div className="h-px bg-border/50 [mask-image:linear-gradient(to_right,transparent,black,transparent)] mt-8" />
      </div>
    </section>
  );
};

export default ClientLogos;
