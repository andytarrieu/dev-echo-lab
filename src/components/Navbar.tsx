import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "features", label: "Fonctionnalités" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">AURÉA<span className="text-accent">IA</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => 
              link.id === "contact" ? (
                <Link
                  key={link.id}
                  to="/contact"
                  className="text-sm font-medium transition-colors hover:text-accent text-foreground"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === link.id ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              )
            )}
            <Button variant="default" size="sm">
              Connexion
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => 
                link.id === "contact" ? (
                  <Link
                    key={link.id}
                    to="/contact"
                    className="text-sm font-medium transition-colors hover:text-accent text-left text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm font-medium transition-colors hover:text-accent text-left ${
                      activeSection === link.id ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </button>
                )
              )}
              <Button variant="default" size="sm" className="w-full">
                Connexion
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
