import { User, Briefcase } from "lucide-react";

const UseCasesMinimal = () => {
  const useCases = [
    {
      icon: User,
      audience: "Particuliers",
      title: "Achetez en toute sérénité",
      description: "Résumez des dizaines de PDF en quelques minutes. Comprenez ce que vous achetez vraiment avant de signer.",
      examples: [
        "Analysez votre DPE et estimez les travaux énergétiques",
        "Détectez les charges de copropriété cachées",
        "Identifiez les clauses à risque du compromis"
      ],
    },
    {
      icon: Briefcase,
      audience: "Professionnels",
      title: "Gagnez des heures par dossier",
      description: "Automatisez l'analyse des documents immobiliers. Ce qui prenait 4 heures prend maintenant 2 minutes.",
      examples: [
        "Pré-remplissez vos dossiers d'audit",
        "Extrayez les données pour vos actes notariés",
        "Briefez-vous sur un dossier entre deux rendez-vous"
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide">CAS D'USAGE</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Une solution, deux audiences
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">{useCase.audience}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {useCase.description}
              </p>
              
              <ul className="space-y-3">
                {useCase.examples.map((example, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesMinimal;
