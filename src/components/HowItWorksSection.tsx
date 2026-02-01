import { 
  FolderUp, 
  MessageSquareText, 
  ShieldAlert, 
  BadgeCheck, 
  Link2, 
  Zap
} from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Créez votre \"Vault\" intelligent",
      description: "Glissez-déposez l'intégralité de vos documents : diagnostics, rapports techniques, baux commerciaux, PV d'assemblées ou actes notariés.",
      result: "Votre dossier n'est plus une pile de PDF, mais une base de données interactive.",
      icon: FolderUp,
    },
    {
      title: "Dialoguez avec vos données",
      description: "Posez vos questions en langage naturel et obtenez des réponses instantanées avec la preuve exacte surlignée.",
      result: "Vous obtenez la vérité brute sans ouvrir un seul dossier manuellement.",
      icon: MessageSquareText,
    },
    {
      title: "Activez la sentinelle de risques",
      description: "Aurea Vault scanne silencieusement vos documents et vous envoie des alertes prioritaires pour les risques détectés.",
      result: "Vous êtes protégé par une intelligence qui voit ce que l'œil humain rate.",
      icon: ShieldAlert,
    },
  ];

  const benefits = [
    {
      icon: BadgeCheck,
      title: "Zéro Hallucination",
      description: "Chaque réponse est extraite de vos propres documents avec un lien direct vers la page concernée.",
    },
    {
      icon: Link2,
      title: "Analyse Croisée",
      description: "Le logiciel connecte les points entre vos documents et comprend leurs impacts mutuels.",
    },
    {
      icon: Zap,
      title: "Gain de temps chirurgical",
      description: "Un audit de 500 pages réalisé en 30 secondes au lieu d'une journée entière.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary p-8 md:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl mb-6">
                Comment fonctionne Aurea Vault ?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10">
                Trois étapes pour transformer vos documents en intelligence actionnable
              </p>

              {/* Steps List */}
              <div className="space-y-6 mb-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
                      <step.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary-foreground/10 mb-3">
                      <benefit.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h4 className="text-sm font-semibold text-primary-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-primary-foreground/60">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer circle */}
                <div className="absolute h-80 w-80 rounded-full border-2 border-dashed border-primary-foreground/20" />
                
                {/* Inner circle */}
                <div className="absolute h-56 w-56 rounded-full border border-primary-foreground/30" />
                
                {/* Center circle */}
                <div className="absolute h-32 w-32 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <ShieldAlert className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute top-8 right-16 h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center animate-pulse">
                  <FolderUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="absolute bottom-16 left-8 h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center animate-pulse delay-300">
                  <MessageSquareText className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="absolute top-1/2 right-4 h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <BadgeCheck className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="absolute bottom-8 right-24 h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Link2 className="h-5 w-5 text-primary-foreground" />
                </div>

                {/* Connecting lines */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
                  <line x1="200" y1="100" x2="300" y2="60" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/20" strokeDasharray="4 4" />
                  <line x1="200" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/20" strokeDasharray="4 4" />
                  <line x1="120" y1="280" x2="80" y2="320" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/20" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
