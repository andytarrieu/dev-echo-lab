import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "20+ years of experience helping financial advisors scale their practices.",
    },
    {
      name: "Michael Chen",
      role: "Chief Marketing Officer",
      bio: "Former VP of Marketing at leading wealth management firms.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Coaching",
      bio: "Certified executive coach with a track record of advisor success.",
    },
    {
      name: "David Thompson",
      role: "Director of Operations",
      bio: "Expert in operational excellence and practice management.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-4">Our Team</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Industry experts dedicated to your success
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
