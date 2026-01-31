import { AlertTriangle, Clock, EyeOff, FileQuestion } from "lucide-react";

const ChaosSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Le Facteur Humain",
      description: "Un juriste ou agent immobilier met en moyenne 4 à 6 heures pour auditer un dossier complet. L'erreur humaine est inévitable face à la fatigue.",
      stat: "4-6h",
      statLabel: "par dossier",
    },
    {
      icon: EyeOff,
      title: "L'Obscurité Technique",
      description: "Un acheteur particulier ne lit jamais l'intégralité du rapport amiante ou termites. Il signe \"en l'état\", s'exposant à des litiges coûteux.",
      stat: "85%",
      statLabel: "non lus",
    },
    {
      icon: FileQuestion,
      title: "L'Inaccessibilité de la Donnée",
      description: "Les informations cruciales sont noyées dans des paragraphes de jargon juridique. Une clause de non-concurrence ou une servitude de tréfonds passe inaperçue.",
      stat: "500+",
      statLabel: "pages par dossier",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Le problème</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Le Chaos de la Donnée Immobilière
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            L'immobilier est la classe d'actifs la plus importante au monde, mais c'est aussi l'une des moins digitalisées 
            dans sa couche "analytique". Une transaction standard repose sur un <span className="font-semibold text-foreground">Dossier de Diagnostic Technique</span> et 
            un <span className="font-semibold text-foreground">Pré-état daté</span> pouvant dépasser les <span className="text-primary font-bold">500 pages</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {problem.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-destructive">{problem.stat}</span>
                  <span className="text-xs text-muted-foreground">{problem.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChaosSection;
