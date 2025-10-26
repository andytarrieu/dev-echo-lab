import { InfiniteSlider } from "@/components/ui/infinite-slider";

const ClientLogos = () => {
  const logos = [
    "DVF",
    "INSEE",
    "Notaires de France",
    "SeLoger",
    "LeBonCoin",
    "PAP",
    "Logic-Immo",
    "Bien'ici",
    "MeilleursAgents",
    "Cadastre",
    "Permis de Construire",
    "Bases Locatives",
    "Données Fiscales",
    "Mairies"
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
            className="flex items-center justify-center px-6 py-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors min-w-[180px]"
          >
            <span className="text-foreground/70 hover:text-foreground font-medium text-sm whitespace-nowrap transition-colors">
              {logo}
            </span>
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
};

export default ClientLogos;
