import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const team = [
    {
      name: "Sophie Martin",
      role: "Fondatrice & CEO",
      bio: "15+ ans d'expertise en technologie IA et investissement immobilier.",
    },
    {
      name: "Alexandre Dubois",
      role: "Directeur Technique",
      bio: "Ancien lead developer chez des géants de la tech, spécialisé en IA.",
    },
    {
      name: "Camille Lefebvre",
      role: "Responsable Produit",
      bio: "Expert en UX et conception de produits IA pour l'immobilier.",
    },
    {
      name: "Thomas Bernard",
      role: "Data Scientist",
      bio: "Spécialiste en analyse de données immobilières et modèles prédictifs.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-4">Notre Équipe</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des experts passionnés dédiés à votre réussite
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                    <p className="text-accent text-center mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm text-center">{member.bio}</p>
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

export default Team;
