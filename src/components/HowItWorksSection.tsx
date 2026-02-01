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
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl bg-primary p-5 sm:p-8 md:p-10 lg:p-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground md:text-4xl mb-3 sm:mb-4">
                Comment fonctionne Aurea Vault ?
              </h2>
              <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8">
                Trois étapes pour transformer vos documents en intelligence actionnable
              </p>

              {/* Steps List */}
              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
                      <step.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-foreground text-sm sm:text-base mb-0.5 sm:mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-primary-foreground/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary-foreground/10 mb-2">
                      <benefit.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-primary-foreground mb-0.5">
                      {benefit.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-primary-foreground/60 hidden sm:block">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative hidden lg:flex items-center justify-center min-h-[280px]">
              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer circle */}
                <div className="absolute h-60 w-60 rounded-full border-2 border-dashed border-primary-foreground/20" />
                
                {/* Inner circle */}
                <div className="absolute h-44 w-44 rounded-full border border-primary-foreground/30" />
                
                {/* Center circle */}
                <div className="absolute h-24 w-24 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <ShieldAlert className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute top-4 right-12 h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center animate-pulse">
                  <FolderUp className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="absolute bottom-12 left-6 h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center animate-pulse delay-300">
                  <MessageSquareText className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="absolute top-1/2 right-2 h-8 w-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <BadgeCheck className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="absolute bottom-6 right-16 h-8 w-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Link2 className="h-4 w-4 text-primary-foreground" />
                </div>

                {/* Connecting lines */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 300">
                  <line x1="150" y1="80" x2="220" y2="50" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/20" strokeDasharray="4 4" />
                  <line x1="150" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/20" strokeDasharray="4 4" />
                  <line x1="90" y1="200" x2="60" y2="240" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/20" strokeDasharray="4 4" />
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
