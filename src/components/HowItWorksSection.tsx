import { Card, CardContent } from "@/components/ui/card";
import { 
  FolderUp, 
  MessageSquareText, 
  ShieldAlert, 
  BadgeCheck, 
  Link2, 
  Zap,
  ArrowRight
} from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Créez votre \"Vault\" intelligent",
      description: "Glissez-déposez l'intégralité de vos documents, quels que soient leurs formats : diagnostics (DPE, ERP), rapports techniques (G1, G2), baux commerciaux, PV d'assemblées ou actes notariés. Aurea Vault centralise, indexe et sécurise chaque page dans un coffre-fort numérique privé.",
      result: "Votre dossier n'est plus une pile de PDF, mais une base de données interactive.",
      icon: FolderUp,
    },
    {
      number: "02",
      title: "Dialoguez avec vos données",
      description: "Ne perdez plus des heures à chercher une information. Posez vos questions en langage naturel : \"Quels sont les travaux votés en AG ?\" ou \"Y a-t-il une servitude de passage sur ce terrain ?\". Aurea Vault vous répond instantanément en surlignant la preuve exacte dans le document source.",
      result: "Vous obtenez la vérité brute sans ouvrir un seul dossier manuellement.",
      icon: MessageSquareText,
    },
    {
      number: "03",
      title: "Activez la sentinelle de risques",
      description: "Pendant que vous travaillez, Aurea Vault scanne silencieusement vos documents en arrière-plan. Il croise les informations entre elles et vous envoie des alertes prioritaires s'il détecte une \"bombe\" cachée (incohérence entre deux contrats, risque de mérule omis, ou clause de bail risquée).",
      result: "Vous êtes protégé par une intelligence qui voit ce que l'œil humain rate.",
      icon: ShieldAlert,
    },
  ];

  const benefits = [
    {
      icon: BadgeCheck,
      title: "Zéro Hallucination",
      description: "Contrairement à une IA classique, Aurea Vault ne \"devine\" rien. Chaque réponse est extraite de vos propres documents avec un lien direct vers la page concernée.",
    },
    {
      icon: Link2,
      title: "Analyse Croisée",
      description: "Le logiciel comprend que la mention dans une étude de sol a un impact sur le contrat de construction. Il connecte les points entre eux.",
    },
    {
      icon: Zap,
      title: "Gain de temps chirurgical",
      description: "Un audit de 500 pages qui prenait une journée entière est désormais réalisé en 30 secondes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comment fonctionne Aurea Vault ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trois étapes pour transformer vos documents en intelligence actionnable
          </p>
        </div>

        {/* Bento Grid - Steps */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border/50 bg-background hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6 md:p-8">
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Result box */}
                <div className="relative p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Le résultat
                      </span>
                      <p className="text-sm text-foreground mt-1 font-medium">
                        {step.result}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="relative">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Pourquoi c'est indispensable
            </h3>
            <p className="text-muted-foreground">Les bénéfices clés</p>
          </div>

          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
