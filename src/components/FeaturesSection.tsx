import { FileText, Shield, Zap, Clock, CheckCircle, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Analyse complète",
      description: "PV d'AG, DPE, diagnostics techniques, règlement de copropriété analysés en profondeur.",
    },
    {
      icon: Zap,
      title: "En 60 secondes",
      description: "Notre IA traite vos documents instantanément et génère un rapport détaillé.",
    },
    {
      icon: Shield,
      title: "Détection des risques",
      description: "Identifiez les travaux votés, procédures en cours et anomalies avant d'acheter.",
    },
    {
      icon: BarChart3,
      title: "Score de qualité",
      description: "Un score global sur 100 pour évaluer rapidement la qualité du dossier.",
    },
    {
      icon: CheckCircle,
      title: "+40 points de contrôle",
      description: "Chaque document est vérifié sur plus de 40 critères essentiels.",
    },
    {
      icon: Clock,
      title: "Historique conservé",
      description: "Retrouvez tous vos audits et comparez plusieurs biens facilement.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Léon utilise une technologie d'IA de pointe pour sécuriser votre achat immobilier.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fini les heures passées à éplucher des documents complexes. Léon fait le travail pour vous.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
