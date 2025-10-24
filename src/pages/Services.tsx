import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-4">Our Services</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate your firm's growth
              </p>
            </div>

            <Tabs defaultValue="coaching" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="coaching">Coaching</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
              </TabsList>

              <TabsContent value="coaching" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Coaching Programs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Individual Coaching</h3>
                      <p className="text-muted-foreground">
                        One-on-one coaching tailored to your specific goals and challenges. Get personalized guidance 
                        to accelerate your growth and overcome obstacles.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Group Coaching</h3>
                      <p className="text-muted-foreground">
                        Learn and grow with a cohort of peers facing similar challenges. Share insights, best practices, 
                        and build lasting professional relationships.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Firm-Wide Programs</h3>
                      <p className="text-muted-foreground">
                        Transform your entire team with comprehensive coaching programs designed to align your organization 
                        around common goals and strategies.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="marketing" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Marketing Services</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fractional CMO</h3>
                      <p className="text-muted-foreground">
                        Get executive-level marketing leadership without the full-time cost. Strategic guidance to 
                        develop and execute your marketing vision.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                      <p className="text-muted-foreground">
                        Comprehensive digital marketing services including website optimization, SEO, content marketing, 
                        and social media management.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Referral Systems</h3>
                      <p className="text-muted-foreground">
                        Implement proven referral systems that turn your best clients into your most effective 
                        marketing channel.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="development" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Advisor Development</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Online Learning</h3>
                      <p className="text-muted-foreground">
                        Access our library of on-demand courses and resources designed to sharpen your skills 
                        and stay ahead of industry trends.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">AI Coaching Tools</h3>
                      <p className="text-muted-foreground">
                        Leverage cutting-edge AI technology for personalized coaching insights and recommendations 
                        available 24/7.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Workshops & Events</h3>
                      <p className="text-muted-foreground">
                        Participate in intensive workshops and networking events designed to accelerate your 
                        professional development.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
