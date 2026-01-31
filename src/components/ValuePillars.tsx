import { FileSearch, Headphones, Shield } from "lucide-react";

const ValuePillars = () => {
  const pillars = [
    {
      icon: FileSearch,
      title: "Analyse intelligente",
      description: "Importez DPE, PV d'AG, compromis, diagnostics. Vault extrait automatiquement les points critiques de chaque document.",
    },
    {
      icon: Headphones,
      title: "Résumé audio",
      description: "Écoutez un podcast IA qui synthétise votre dossier en 5 minutes. Idéal pour comprendre l'essentiel sans tout lire.",
    },
    {
      icon: Shield,
      title: "Zéro hallucination",
      description: "Chaque réponse est ancrée dans vos documents avec citation directe. Cliquez pour vérifier la source originale.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide">L'INTELLIGENCE À VOTRE SERVICE</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Une seule plateforme, trois superpouvoir
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Particuliers ou professionnels, Vault analyse vos documents de la même façon : avec rigueur et transparence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                <pillar.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
