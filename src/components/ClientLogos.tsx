const ClientLogos = () => {
  const logos = [
    "DVF", "INSEE", "Notaires de France", "SeLoger", "LeBonCoin", 
    "PAP", "Logic-Immo", "Bien'ici", "MeilleursAgents", "Cadastre",
    "Permis de Construire", "Bases Locatives", "Données Fiscales", "Mairies"
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider">
          Plus de 1 500 Sources de Données Immobilières
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="text-muted-foreground/60 hover:text-muted-foreground transition-colors text-sm md:text-base font-medium"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
