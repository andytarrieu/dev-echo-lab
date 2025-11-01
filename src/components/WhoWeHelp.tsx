import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Home, Building2, Store, Warehouse, RefreshCcw, Calendar } from "lucide-react";

const WhoWeHelp = () => {
  const propertyTypes: BentoItem[] = [
    {
      title: "Résidentiel",
      description: "Appartements, maisons, immeubles locatifs. Location longue durée, courte durée ou saisonnière.",
      icon: <Home className="w-4 h-4 text-blue-500" />,
      status: "Tous types",
      tags: ["Location", "Achat"],
      colSpan: 2,
      hasPersistentHover: true,
    },
    {
      title: "Bureaux",
      description: "Espaces tertiaires, coworking, cabinets professionnels. Location nue ou meublée.",
      icon: <Building2 className="w-4 h-4 text-emerald-500" />,
      status: "Tertiaire",
      tags: ["Pro", "Coworking"],
    },
    {
      title: "Commerces",
      description: "Boutiques, restaurants, locaux commerciaux. Bail commercial, murs et fonds.",
      icon: <Store className="w-4 h-4 text-purple-500" />,
      status: "Commerce",
      tags: ["Bail", "Fonds"],
    },
    {
      title: "Entrepôts & Logistique",
      description: "Hangars, zones logistiques, ateliers. Location professionnelle et industrielle.",
      icon: <Warehouse className="w-4 h-4 text-orange-500" />,
      status: "Industriel",
      tags: ["Logistique", "Atelier"],
    },
    {
      title: "Achat-Revente",
      description: "Flip immobilier, rénovation et revente. Maximisation de la plus-value.",
      icon: <RefreshCcw className="w-4 h-4 text-sky-500" />,
      status: "Investissement",
      tags: ["Flip", "Plus-value"],
    },
    {
      title: "Location Saisonnière",
      description: "Courte durée, Airbnb, locations de vacances. Gestion optimisée des revenus.",
      icon: <Calendar className="w-4 h-4 text-pink-500" />,
      status: "Court terme",
      tags: ["Airbnb", "Vacances"],
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Tous Types de Biens Couverts</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Nos agents IA analysent et optimisent tous types d'investissements immobiliers, du résidentiel aux actifs professionnels.
          </p>
        </div>

        <BentoGrid items={propertyTypes} />
      </div>
    </section>
  );
};

export default WhoWeHelp;
