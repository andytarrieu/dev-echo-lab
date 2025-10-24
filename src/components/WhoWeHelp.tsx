import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhoWeHelp = () => {
  const segments = [
    {
      range: "$0-50M AUM",
      description: "Early-stage advisors seeking to establish a strong foundation and accelerate growth.",
    },
    {
      range: "$50-250M AUM",
      description: "Mid-sized practices looking to systemize operations and marketing for sustainable growth.",
    },
    {
      range: "$250M-1B AUM",
      description: "Growing advisory firms needing scalable systems and firm-wide growth approaches.",
    },
    {
      range: "$1B+ AUM",
      description: "Enterprise-level firms focusing on acquisition strategies and multi-location growth.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Who We Help</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized growth solutions for every stage of your advisory firm, from emerging practices to enterprise leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-accent">{segment.range}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{segment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
