import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Calculator, BarChart3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Analyseur de Marché",
      description: "Détermine les meilleures zones d'investissement avec analyse de marché, prévisions et alertes automatiques sur les nouvelles opportunités.",
      link: "/services?tab=market",
    },
    {
      icon: Calculator,
      title: "Évaluateur de Rentabilité",
      description: "Évalue la rentabilité réelle d'un bien avec calculs financiers, estimation travaux, ROI et génération de rapports PDF bancaires.",
      link: "/services?tab=profitability",
    },
    {
      icon: BarChart3,
      title: "Gestionnaire de Portfolio",
      description: "Centralise et optimise ton patrimoine immobilier avec suivi de performance, alertes intelligentes et conseils fiscaux.",
      link: "/services?tab=portfolio",
    },
    {
      icon: ShieldCheck,
      title: "Assistant Due Diligence",
      description: "Sécurise ton achat en vérifiant conformité, risques et coûts cachés avec analyse documentaire et rapport professionnel.",
      link: "/services?tab=diligence",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Les 4 Agents IA</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une suite complète d'agents intelligents pour couvrir chaque étape de votre investissement immobilier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <Button variant="link" className="p-0 h-auto text-accent" asChild>
                  <Link to={service.link}>
                    Découvrir →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
