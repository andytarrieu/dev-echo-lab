import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Megaphone, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Coaching",
      description: "Individual, group, and firm-wide coaching programs to accelerate advisor growth and performance.",
      link: "/services?tab=coaching",
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Fractional CMO and agency services to help you attract high-value clients and grow your AUM.",
      link: "/services?tab=marketing",
    },
    {
      icon: GraduationCap,
      title: "Advisor Development",
      description: "Online development experiences, AI coaching, and workshops to keep your team edge sharp.",
      link: "/services?tab=development",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How We Help</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solutions are grouped into three key areas so you can choose the right fit for your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all group">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <Button variant="link" className="p-0 h-auto text-accent" asChild>
                  <Link to={service.link}>
                    Explore {service.title} →
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
