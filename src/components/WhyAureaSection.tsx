import { Anchor, Quote, Podcast, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhyAureaSection = () => {
  const advantages = [
    {
      icon: Anchor,
      title: "L'ancrage sur vos sources (Grounding)",
      description: "La plupart des IA utilisent leurs connaissances générales. Auréa Vault, lui, ne répond qu'à partir de vos documents. S'il ne trouve pas l'info dans votre dossier de notaire, il vous le dit au lieu d'inventer.",
      highlight: "C'est crucial pour la sécurité juridique.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Quote,
      title: "Les Citations Directes",
      description: "C'est l'argument massue : pour chaque réponse qu'il donne, il affiche un petit numéro. Cliquez dessus, et il vous montre exactement le passage du document original d'où vient l'information.",
      highlight: "Vous vérifiez en un clic.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Podcast,
      title: "Le \"Audio Overview\" (Le Podcast)",
      description: "C'est la fonction \"wow\". Il peut générer une discussion audio entre deux IA qui résument votre dossier de vente. Vous pouvez écouter le résumé de votre achat immobilier comme un podcast.",
      highlight: "Écoutez en allant au travail.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Brain,
      title: "Capacité de mémoire massive",
      description: "Là où d'autres outils saturent après 10 pages, Auréa peut absorber des dizaines de documents volumineux sans perdre le fil.",
      highlight: "Jusqu'à 500 000 mots par source.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2">POURQUOI AURÉA ?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ce qui rend Auréa Vault si formidable
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contrairement à un simple ChatGPT ou un dossier cloud classique, Auréa Vault possède des avantages uniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background"
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl ${advantage.bgColor} flex items-center justify-center mb-4`}>
                  <advantage.icon className={`h-7 w-7 ${advantage.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed mb-4">
                  {advantage.description}
                </CardDescription>
                <p className="text-sm font-semibold text-primary">
                  {advantage.highlight}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAureaSection;
