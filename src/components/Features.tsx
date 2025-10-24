import { TrendingUp, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "The Challenge",
      description: "Missed opportunities from referrals that never materialize. Under-optimized marketing from your #1 source of new clients. Operational inefficiencies that limit sustainable growth.",
    },
    {
      icon: Target,
      title: "The Opportunity",
      description: "53% growth in organic AUM. Systematically replicate your ideal client relationships. A more predictable growth trajectory within your business.",
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Our streamlined approach delivers real results. See measurable referral growth in your first month, with compounding benefits over 12 months.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Unlock Your Practice's Hidden Potential</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground text-lg">
            <p>93% of clients value their advisor enough to refer.</p>
            <p>51% believe they've sent at least one referral in the past year.</p>
            <p>82% tried to refer by sharing your name which rarely leads to you meeting the prospect.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
