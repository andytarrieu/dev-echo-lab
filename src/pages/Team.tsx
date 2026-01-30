import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Landmark, Shield, FileCheck, Users, Target, Handshake, ArrowRight, Home, Store, Factory, TrendingUp } from "lucide-react";
const Team = () => {
  const founders = [{
    icon: TrendingUp,
    title: "Investisseurs Immobiliers",
    description: "Fondé par des investisseurs actifs qui ont analysé des centaines de dossiers notariaux et compris les difficultés du terrain."
  }];
  const partners = [{
    icon: Landmark,
    title: "Notaires",
    description: "Collaboration avec des études notariales pour comprendre la structure exacte des actes et documents juridiques."
  }, {
    icon: Building2,
    title: "Banquiers",
    description: "Partenariat avec des conseillers bancaires pour intégrer les critères d'analyse des dossiers de financement."
  }, {
    icon: Shield,
    title: "Assureurs",
    description: "Expertise des compagnies d'assurance pour identifier les risques couverts et les exclusions importantes."
  }, {
    icon: FileCheck,
    title: "Diagnostiqueurs",
    description: "Travail avec des diagnostiqueurs certifiés pour décrypter DPE, amiante, plomb, électricité et autres rapports techniques."
  }];
  const audiences = [{
    icon: Home,
    title: "Acheteurs Résidentiels",
    description: "Particuliers souhaitant acheter leur résidence principale ou un investissement locatif."
  }, {
    icon: Store,
    title: "Investisseurs Commerciaux",
    description: "Acquisition de locaux commerciaux, bureaux, ou murs de boutiques."
  }, {
    icon: Factory,
    title: "Immobilier Professionnel",
    description: "Entrepôts, locaux industriels, et actifs tertiaires."
  }, {
    icon: Users,
    title: "Professionnels de l'Immobilier",
    description: "Agents, notaires, courtiers qui veulent accélérer leur analyse de dossiers."
  }];
  return <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 px-4 py-2">
                <Handshake className="h-4 w-4 mr-2" />
                Notre Histoire
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Créé par des investisseurs,<br />
                <span className="text-primary">pour des investisseurs</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AURÉA Vault est né de la frustration d'investisseurs immobiliers face à la complexité 
                des dossiers notariaux. En collaboration avec les meilleurs professionnels du secteur, 
                nous avons créé l'outil que nous aurions aimé avoir.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Le problème que nous avons vécu
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Comme vous, nous avons passé des heures à éplucher des dossiers de 300 à 600 pages 
                      envoyés par le notaire. Des termes juridiques incompréhensibles, des risques cachés 
                      entre les lignes, des coûts imprévus découverts trop tard.
                    </p>
                    <p>
                      Après plusieurs mauvaises surprises — travaux de copropriété non mentionnés, 
                      servitudes découvertes après signature, DPE sous-estimé — nous avons décidé de 
                      créer la solution.
                    </p>
                    <p className="font-medium text-foreground">
                      AURÉA Vault analyse en 15 minutes ce qui nous prenait des jours.
                    </p>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Fondé par des Investisseurs</h3>
                      <p className="text-muted-foreground">Actifs sur le marché français</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Notre équipe fondatrice cumule plus de 50 acquisitions immobilières — résidentiel, 
                    commercial, et tertiaire. Nous connaissons chaque piège, chaque détail à vérifier, 
                    chaque question à poser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Nos Partenaires
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Créé en collaboration avec les meilleurs professionnels
              </h2>
              
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {partners.map((partner, index) => <Card key={index} className="border-border hover:shadow-lg transition-all hover:border-primary/30">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <partner.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{partner.title}</h3>
                    <p className="text-muted-foreground text-sm">{partner.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-2">
                <Target className="h-4 w-4 mr-2" />
                Notre Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Aider tous les acheteurs immobiliers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quel que soit votre projet — logement, commercial, ou investissement — AURÉA Vault vous accompagne.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {audiences.map((audience, index) => <Card key={index} className="border-border hover:shadow-lg transition-all group">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <audience.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                    <p className="text-muted-foreground text-sm">{audience.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Nos Valeurs
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Précision</h3>
                  <p className="text-muted-foreground">
                    Zéro hallucination. Notre IA est strictement ancrée dans vos documents.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
                  <p className="text-muted-foreground">
                    Vos documents sont chiffrés et supprimés après analyse.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold mb-2">Rapidité</h3>
                  <p className="text-muted-foreground">
                    15 minutes pour analyser ce qui prendrait des heures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prêt à sécuriser votre prochain achat ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Rejoignez les investisseurs qui font confiance à AURÉA Vault pour analyser leurs dossiers.
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
        </section>

        <Footer />
      </main>
    </div>;
};
export default Team;