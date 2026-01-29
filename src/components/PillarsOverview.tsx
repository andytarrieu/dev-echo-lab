import { Wrench, Building2, Scale, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const PillarsOverview = () => {
  const pillars = [
    {
      icon: Wrench,
      title: "Audit Technique",
      description: "DPE, Amiante, Plomb, Électricité, Gaz, Termites, Assainissement",
      examples: ["DPE classé F ou G", "Installation électrique non conforme", "Présence d'amiante"],
    },
    {
      icon: Building2,
      title: "Santé Copropriété",
      description: "État Daté, PV d'Assemblées, Règlement, Carnet d'entretien, DTG",
      examples: ["Travaux votés : 15 000€", "Impayés copropriétaires > 25%", "Procédure judiciaire en cours"],
    },
    {
      icon: Scale,
      title: "Risques Juridiques",
      description: "Titre de propriété, État hypothécaire, Servitudes, Cadastre, ERP",
      examples: ["Servitude de passage", "Droit de préemption actif", "Origine de propriété complexe"],
    },
    {
      icon: Cpu,
      title: "Lab IA",
      description: "Résumé Audio, Chat Documents, Simulateur, Détecteur d'Annonces",
      examples: ["Podcast audio 5 min", "Chat avec vos PDF", "Comparaison prix marché"],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">TROIS PILIERS + LAB IA</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto">
            Un seul outil pour trois piliers : <span className="text-primary">Technique, Copropriété et Juridique.</span>
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {pillar.description}
              </p>

              {/* Example Alerts */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-foreground/70 uppercase tracking-wide">
                  Exemples d'alertes :
                </p>
                {pillar.examples.map((example, idx) => (
                  <div 
                    key={idx}
                    className="text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg"
                  >
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsOverview;
