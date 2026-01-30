import { useState } from "react";
import NavbarNew from "@/components/NavbarNew";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, FileText, Building, Landmark, Scale, Clock, 
  ArrowRight, Zap, Lock, Brain, User, Briefcase,
  FileSearch, Home, CheckCircle, AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";
import WaitlistBadge from "@/components/WaitlistBadge";

type AudienceType = "particulier" | "professionnel";

const Services = () => {
  const [audience, setAudience] = useState<AudienceType>("particulier");

  const particulierFeatures = [
    {
      icon: FileText,
      title: "Dossier Notaire Complet",
      description: "Analyse automatique des 300-600 pages du dossier notarial. Détection des risques cachés en 1-15 minutes."
    },
    {
      icon: Home,
      title: "Diagnostics Techniques",
      description: "DPE, amiante, électricité, gaz, plomb... Tous vos diagnostics décryptés avec alertes sur les anomalies."
    },
    {
      icon: Building,
      title: "Santé Copropriété",
      description: "PV d'AG, état daté, charges et travaux votés. Identifiez les impayés et procédures en cours."
    },
    {
      icon: Landmark,
      title: "Offres de Prêt",
      description: "TAEG, coût total du crédit, conditions de déblocage et clauses de remboursement analysées."
    },
    {
      icon: Scale,
      title: "Vérification Juridique",
      description: "Titres de propriété, servitudes, hypothèques et droits de préemption passés au crible."
    },
    {
      icon: Shield,
      title: "Assurances",
      description: "Assurance emprunteur, dommages-ouvrage, MRH. Vérification des quotités et exclusions."
    }
  ];

  const professionnelFeatures = [
    {
      icon: FileSearch,
      title: "Due Diligence Complète",
      description: "Audit approfondi de plus de 70 types de documents pour transactions complexes."
    },
    {
      icon: Building,
      title: "Terrain & Urbanisme",
      description: "Cadastre, études de sol G1/G2/G5, ERP, permis de construire et certificats d'urbanisme."
    },
    {
      icon: Scale,
      title: "Construction & CCMI",
      description: "Contrats CCMI, CCTP, marchés de travaux. Analyse des garanties et pénalités."
    },
    {
      icon: Shield,
      title: "Assurances Pro",
      description: "Dommage-ouvrage, décennale, GFA. Vérification des attestations et couvertures."
    },
    {
      icon: Landmark,
      title: "Commerce & Entreprise",
      description: "Kbis, contrats de travail, CA certifié. Audit complet pour cessions de fonds."
    },
    {
      icon: FileText,
      title: "Fiscal & Successoral",
      description: "Successions, statuts SCI, plus-values. Extraction automatisée pour actes et financements."
    }
  ];

  const features = audience === "particulier" ? particulierFeatures : professionnelFeatures;

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
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.05),transparent_50%)]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Waitlist Badge */}
            <div className="flex justify-center mb-4">
              <WaitlistBadge />
            </div>

            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">AURÉA Vault</span>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Votre Coffre-Fort{" "}
                <span className="text-primary">Documentaire Intelligent</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Uploadez vos documents immobiliers. Notre IA les analyse, détecte les risques cachés 
                et vous fournit un rapport actionnable en quelques minutes.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                  <CheckCircle className="h-4 w-4" />
                  50+ points de contrôle
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                  <AlertTriangle className="h-4 w-4" />
                  Alertes rouges automatiques
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                  <Zap className="h-4 w-4" />
                  Résultats en 1-15 min
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 text-lg px-8 py-6" asChild>
                  <Link to="/waitlist">
                    Rejoindre la liste d'attente
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Audience Toggle + Features Grid */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Audience Toggle */}
            <div className="flex justify-center mb-12">
              <Tabs value={audience} onValueChange={(v) => setAudience(v as AudienceType)} className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-2 h-14">
                  <TabsTrigger value="particulier" className="gap-2 text-base">
                    <User className="h-4 w-4" />
                    Particuliers
                  </TabsTrigger>
                  <TabsTrigger value="professionnel" className="gap-2 text-base">
                    <Briefcase className="h-4 w-4" />
                    Professionnels
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                {audience === "particulier" 
                  ? "Ce que le Vault analyse pour les acheteurs" 
                  : "Ce que le Vault analyse pour les professionnels"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {audience === "particulier"
                  ? "Tous les documents de votre acquisition décryptés et vérifiés automatiquement."
                  : "Une suite complète d'outils d'analyse pour vos transactions complexes."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1 bg-background">
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
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pourquoi choisir AURÉA Vault ?
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

        {/* Security Section */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="h-8 w-8" />
                <p className="text-sm font-medium uppercase tracking-wide opacity-80">
                  Confidentialité & Sécurité
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Sécurité de grade bancaire
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Vos documents sont chiffrés de bout en bout et ne sont jamais utilisés pour entraîner nos modèles d'IA.
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Chiffrement E2E</h3>
                  <p className="text-sm opacity-80">Vos données protégées dès l'upload</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Jamais entraîné</h3>
                  <p className="text-sm opacity-80">Vos docs ne servent pas à l'IA</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Suppression à la demande</h3>
                  <p className="text-sm opacity-80">Effacement définitif garanti</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prêt à sécuriser votre investissement ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Rejoignez les investisseurs et professionnels qui font confiance à l'IA pour analyser leurs documents immobiliers.
            </p>
            <Button size="lg" className="gap-2 text-lg px-8 py-6" asChild>
              <Link to="/waitlist">
                Rejoindre la liste d'attente
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              <span className="font-medium text-foreground">4,500+</span> inscrits sur la liste d'attente
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Services;
