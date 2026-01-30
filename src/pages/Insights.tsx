import NavbarNew from "@/components/NavbarNew";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Insights = () => {
  const articles = [
    {
      title: "5 Stratégies pour Maximiser la Rentabilité de Vos Biens",
      category: "Investissement",
      date: "15 Mar 2024",
      excerpt: "Découvrez des tactiques éprouvées pour augmenter systématiquement vos revenus locatifs.",
    },
    {
      title: "Le Guide de l'Investisseur Moderne pour l'IA Immobilière",
      category: "Technologie",
      date: "10 Mar 2024",
      excerpt: "Naviguez dans le paysage technologique avec confiance et optimisez vos investissements.",
    },
    {
      title: "Comment Passer de 1 à 10 Biens en 3 Ans",
      category: "Croissance",
      date: "5 Mar 2024",
      excerpt: "Les changements clés nécessaires pour réussir à développer votre patrimoine immobilier.",
    },
    {
      title: "Construire un Portfolio Immobilier Diversifié",
      category: "Stratégie",
      date: "28 Fév 2024",
      excerpt: "Transformez votre approche d'investissement avec ces frameworks éprouvés.",
    },
    {
      title: "L'Acquisition Immobilière dans un Marché en Évolution",
      category: "Marché",
      date: "20 Fév 2024",
      excerpt: "Adaptez votre stratégie d'acquisition à l'environnement économique actuel.",
    },
    {
      title: "L'Art de Négocier le Prix Parfait",
      category: "Négociation",
      date: "15 Fév 2024",
      excerpt: "Maîtrisez l'art de la négociation immobilière pour obtenir les meilleurs prix.",
    },
  ];

  return (
    <div className="min-h-screen">
      <NavbarNew />
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-4">Ressources & Insights</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des conseils d'experts pour optimiser votre investissement immobilier
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.map((article, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-accent transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
