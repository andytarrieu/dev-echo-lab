import { useState } from "react";
import NavbarNew from "@/components/NavbarNew";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Brain, Calculator, MapPin, TrendingUp, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import agent1 from "@/assets/agent-1.webp";
import agent2 from "@/assets/agent-2.webp";
import agent3 from "@/assets/agent-3.webp";
import agent4 from "@/assets/agent-4.webp";
import agent5 from "@/assets/agent-5.webp";

const Ecosystem = () => {
  const { toast } = useToast();
  const [notifiedAgents, setNotifiedAgents] = useState<string[]>([]);

  const agents = [
    {
      id: "alexandre",
      name: "Alexandre",
      role: "Le Mentor IA",
      description: "Coach IA pour votre stratégie d'investissement. Alexandre vous guide dans vos décisions : fiscalité, financement, négociation.",
      icon: Brain,
      image: agent5,
      features: ["Stratégie fiscale", "Conseil financement", "Techniques de négociation"],
    },
    {
      id: "emma",
      name: "Emma",
      role: "Calculatrice Financière",
      description: "Calculatrice financière ultra-précise. Emma simule vos montages LMNP, SCI, et calcule votre cash-flow réel.",
      icon: Calculator,
      image: agent2,
      features: ["Simulation LMNP/SCI", "Calcul cash-flow", "ROI détaillé"],
    },
    {
      id: "noah",
      name: "Noah",
      role: "Scanner de Marché",
      description: "Scanner de marché et analyse de quartiers. Noah détecte les meilleures opportunités avant tout le monde.",
      icon: MapPin,
      image: agent1,
      features: ["Analyse de marché", "Étude de quartier", "Alertes opportunités"],
    },
    {
      id: "lucie",
      name: "Lucie",
      role: "Gestionnaire Patrimoine",
      description: "Gestionnaire de patrimoine et suivi de rentabilité. Lucie centralise et optimise votre portefeuille immobilier.",
      icon: TrendingUp,
      image: agent3,
      features: ["Suivi performance", "Optimisation fiscale", "Reporting automatisé"],
    },
  ];

  const handleNotify = (agentId: string, agentName: string) => {
    if (!notifiedAgents.includes(agentId)) {
      setNotifiedAgents([...notifiedAgents, agentId]);
      toast({
        title: "Notification activée ! 🔔",
        description: `Vous serez averti dès que ${agentName} sera disponible.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              En développement
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              L'Écosystème Auréa
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les agents IA en cours de développement qui complèteront 
              bientôt Léon pour couvrir chaque étape de votre investissement.
            </p>
          </div>

          {/* Agent Léon actif */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Disponible maintenant
            </h2>
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-primary/10 flex-shrink-0">
                    <img 
                      src={agent4} 
                      alt="Léon" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                      <h3 className="text-2xl font-bold text-foreground">Léon</h3>
                      <Badge className="bg-green-500">Actif</Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">Assistant Due Diligence</p>
                    <p className="text-muted-foreground">
                      Léon analyse vos documents immobiliers (DPE, PV d'AG, diagnostics) 
                      et détecte les anomalies en 60 secondes.
                    </p>
                  </div>
                  <Button size="lg" asChild>
                    <a href="/">Utiliser Léon</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agents à venir */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Prochainement
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {agents.map((agent) => {
                const isNotified = notifiedAgents.includes(agent.id);
                return (
                  <Card 
                    key={agent.id} 
                    className="group relative overflow-hidden border-border hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Badge Prochainement */}
                    <div className="absolute top-3 right-3 z-10">
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
                        Prochainement
                      </Badge>
                    </div>
                    
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden bg-muted">
                      <img 
                        src={agent.image} 
                        alt={agent.name}
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="w-10 h-10 rounded-xl bg-background/90 backdrop-blur flex items-center justify-center">
                          <agent.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{agent.name}</CardTitle>
                      <CardDescription className="text-primary font-medium text-sm">
                        {agent.role}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {agent.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-1">
                        {agent.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Bouton notification */}
                      <Button 
                        variant={isNotified ? "secondary" : "outline"} 
                        size="sm" 
                        className="w-full gap-2"
                        onClick={() => handleNotify(agent.id, agent.name)}
                        disabled={isNotified}
                      >
                        <Bell className={`h-4 w-4 ${isNotified ? 'text-primary' : ''}`} />
                        {isNotified ? "Notification activée" : "M'avertir de la sortie"}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ecosystem;
