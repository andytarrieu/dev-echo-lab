import { AlertTriangle, Building2, TreePine, Thermometer, MapPin, MessageCircleQuestion } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BuyerFearsSection = () => {
  const fears = [
    {
      icon: AlertTriangle,
      title: "Les \"Vices Cachés\" Administratifs",
      description: "Découvrir après l'achat que des travaux ont été faits sans autorisation.",
      question: "\"Y a-t-il mention de travaux récents (toiture, extension, abattage de mur) pour lesquels les factures ou les autorisations de la mairie sont manquantes ?\"",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Building2,
      title: "Le Gouffre Financier de la Copropriété",
      description: "Voir ses charges doubler six mois après l'emménagement.",
      question: "\"Quels sont les travaux votés ou mentionnés comme 'à l'étude' qui n'ont pas encore été payés ?\"",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: TreePine,
      title: "Les Servitudes et Contraintes de Jouissance",
      description: "Découvrir qu'un voisin a le droit de passer dans votre jardin.",
      question: "\"Détaille toutes les servitudes passives : quelqu'un a-t-il un droit de passage, de vue ou de canalisation sur mon futur terrain ?\"",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: Thermometer,
      title: "La \"Passoire Thermique\" et les Normes",
      description: "Ne plus pouvoir louer le bien ou devoir payer 50 000 € de rénovation.",
      question: "\"Quelles sont les recommandations prioritaires pour améliorer la note DPE et quel est l'investissement estimé ?\"",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: MapPin,
      title: "Le Risque Environnemental Oublié",
      description: "Terrain pollué ou situé en zone inondable.",
      question: "\"Le bien est-il situé dans un périmètre de retrait-gonflement des argiles ou dans une zone de risque technologique ?\"",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
  ];

  const shockQuestions = [
    "\"Si tu étais un acheteur très prudent, quels seraient les 3 points de ce dossier qui te feraient hésiter ?\"",
    "\"Y a-t-il des contradictions entre ce que dit le vendeur dans l'acte et ce que disent les diagnostics techniques ?\"",
    "\"Fais-moi la liste de toutes les dépenses obligatoires qui vont tomber dans les 24 prochains mois selon les documents.\"",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-primary mb-2">JOUEZ L'AVOCAT DU DIABLE</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Les 5 Peurs Cachées de l'Acheteur Immobilier
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un achat immobilier est souvent le projet d'une vie. Les documents notariaux cachent parfois des détails qui peuvent se transformer en cauchemars financiers ou juridiques. <strong>Auréa Vault les débusque avant qu'il ne soit trop tard.</strong>
          </p>
        </div>

        {/* Fears Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {fears.map((fear, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl ${fear.bgColor} flex items-center justify-center mb-3`}>
                  <fear.icon className={`h-6 w-6 ${fear.color}`} />
                </div>
                <CardTitle className="text-lg text-foreground leading-tight">
                  {fear.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {fear.description}
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs font-medium text-primary mb-2">Ce que Auréa Vault peut trouver :</p>
                  <p className="text-xs text-muted-foreground italic">
                    {fear.question}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Shock Questions Card */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <MessageCircleQuestion className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg text-foreground leading-tight">
                Les Questions "Choc" à Poser
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Pour tester la fiabilité de votre achat, posez ces questions directes :
              </p>
              <ul className="space-y-3">
                {shockQuestions.map((question, idx) => (
                  <li key={idx} className="text-xs text-foreground italic bg-background/50 p-2 rounded-lg">
                    {question}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BuyerFearsSection;
