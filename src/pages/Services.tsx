import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Building, Landmark, Scale, Clock, CheckCircle, ArrowRight, Zap, Lock, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const features = [
    {
      icon: FileText,
      title: "Analyse de Documents",
      description: "Upload et analyse automatique de tous vos documents immobiliers : DPE, diagnostics, PV d'AG, règlement de copropriété, etc."
    },
    {
      icon: Building,
      title: "Dossier Notaire Complet",
      description: "Scan intelligent des 300-600 pages du dossier notarial en 1-15 minutes. Détection des risques cachés."
    },
    {
      icon: Shield,
      title: "Due Diligence Automatisée",
      description: "Vérification complète de la conformité, des vices cachés, et des coûts imprévus avant l'achat."
    },
    {
      icon: Landmark,
      title: "Documents Bancaires",
      description: "Analyse des offres de prêt, tableaux d'amortissement, et conditions de financement."
    },
    {
      icon: Scale,
      title: "Analyse Juridique",
      description: "Vérification du titre de propriété, servitudes, hypothèques et droits de préemption."
    },
    {
      icon: Clock,
      title: "Rapports Instantanés",
      description: "Génération de rapports PDF professionnels avec synthèse des points d'attention."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Gain de temps",
      description: "Analysez en minutes ce qui prendrait des heures à lire manuellement"
    },
    {
      icon: Lock,
      title: "Sécurité maximale",
      description: "Vos documents sont chiffrés et supprimés après analyse"
    },
    {
      icon: Brain,
      title: "IA spécialisée",
      description: "Algorithmes entraînés sur des milliers de dossiers immobiliers français"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Vault by Aurea</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                L'Analyse Documentaire Immobilière
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Uploadez vos documents, notre IA les analyse et détecte tous les risques cachés avant votre achat immobilier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/" className="gap-2">
                    Découvrir le Vault <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/waitlist">
                    Rejoindre la liste d'attente
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ce que le Vault analyse pour vous
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une suite complète d'outils d'analyse pour sécuriser votre investissement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pourquoi choisir le Vault ?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prêt à sécuriser votre investissement ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Rejoignez les investisseurs qui font confiance à l'IA pour analyser leurs documents immobiliers.
            </p>
            <Button size="lg" asChild>
              <Link to="/waitlist" className="gap-2">
                Rejoindre la liste d'attente <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Services;
