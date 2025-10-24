import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Insights = () => {
  const articles = [
    {
      title: "5 Strategies to Double Your Referrals This Year",
      category: "Referrals",
      date: "Mar 15, 2024",
      excerpt: "Learn proven tactics to systematically increase client referrals without being pushy or salesy.",
    },
    {
      title: "The Modern Advisor's Guide to Digital Marketing",
      category: "Marketing",
      date: "Mar 10, 2024",
      excerpt: "Navigate the digital landscape with confidence and attract high-value clients online.",
    },
    {
      title: "Scaling Your Practice: From $50M to $250M AUM",
      category: "Growth",
      date: "Mar 5, 2024",
      excerpt: "Key operational changes needed to successfully scale your advisory practice.",
    },
    {
      title: "Building a Referral Culture in Your Firm",
      category: "Culture",
      date: "Feb 28, 2024",
      excerpt: "Transform your team into referral champions with these proven frameworks.",
    },
    {
      title: "Client Acquisition in a Changing Market",
      category: "Strategy",
      date: "Feb 20, 2024",
      excerpt: "Adapt your client acquisition strategy to today's economic environment.",
    },
    {
      title: "The Power of Non-Salesy Referral Conversations",
      category: "Communication",
      date: "Feb 15, 2024",
      excerpt: "Master the art of asking for referrals in a way that feels natural and authentic.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-4">Insights & Resources</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights to help you grow your advisory practice
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
