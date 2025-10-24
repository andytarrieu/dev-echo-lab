import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhoWeHelp = () => {
  const segments = [
    {
      range: "🏠 Résidentiel",
      description: "Appartements, maisons, immeubles locatifs. Location longue durée, courte durée ou saisonnière.",
    },
    {
      range: "🏢 Bureaux",
      description: "Espaces tertiaires, coworking, cabinets professionnels. Location nue ou meublée.",
    },
    {
      range: "🏬 Commerces",
      description: "Boutiques, restaurants, locaux commerciaux. Bail commercial, murs et fonds.",
    },
    {
      range: "🏭 Entrepôts & Logistique",
      description: "Hangars, zones logistiques, ateliers. Location professionnelle et industrielle.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Tous Types de Biens Couverts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos agents IA analysent et optimisent tous types d'investissements immobiliers, du résidentiel aux actifs professionnels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-accent">{segment.range}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{segment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
