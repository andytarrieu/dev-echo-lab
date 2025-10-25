import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Calculator, BarChart3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import agent1 from "@/assets/agent-1.webp";
import agent2 from "@/assets/agent-2.webp";
import agent3 from "@/assets/agent-3.webp";
import agent4 from "@/assets/agent-4.webp";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Analyseur de Marché",
      description: "Détermine les meilleures zones d'investissement avec analyse de marché, prévisions et alertes automatiques sur les nouvelles opportunités.",
      link: "/services?tab=market",
      image: agent1,
    },
    {
      icon: Calculator,
      title: "Évaluateur de Rentabilité",
      description: "Évalue la rentabilité réelle d'un bien avec calculs financiers, estimation travaux, ROI et génération de rapports PDF bancaires.",
      link: "/services?tab=profitability",
      image: agent2,
    },
    {
      icon: BarChart3,
      title: "Gestionnaire de Portfolio",
      description: "Centralise et optimise ton patrimoine immobilier avec suivi de performance, alertes intelligentes et conseils fiscaux.",
      link: "/services?tab=portfolio",
      image: agent3,
    },
    {
      icon: ShieldCheck,
      title: "Assistant Due Diligence",
      description: "Sécurise ton achat en vérifiant conformité, risques et coûts cachés avec analyse documentaire et rapport professionnel.",
      link: "/services?tab=diligence",
      image: agent4,
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
            <Card key={index} className="border-border hover:shadow-lg transition-all group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
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
