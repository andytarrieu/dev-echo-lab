import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "@/assets/aurea-logo-new.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  // Gérer le scroll après navigation
  useEffect(() => {
    if (pendingScroll && location.pathname === "/") {
      // Attendre que la page soit chargée
      setTimeout(() => {
        const element = document.getElementById(pendingScroll);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          setActiveSection(pendingScroll);
        }
        setPendingScroll(null);
      }, 100);
    }
  }, [location.pathname, pendingScroll]);

  const scrollToSection = (sectionId: string) => {
    // Si on n'est pas sur la page d'accueil, rediriger d'abord
    if (location.pathname !== "/") {
      setPendingScroll(sectionId);
      navigate("/");
      setMobileMenuOpen(false);
      return;
    }

    // Sinon, scroller directement
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
    { id: "home", label: "Accueil", type: "scroll" },
    { id: "vault", label: "Vault", type: "link", path: "/services" },
    { id: "about", label: "À propos", type: "link", path: "/team" },
    { id: "faq", label: "FAQ", type: "scroll" },
    { id: "contact", label: "Contact", type: "link", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="Auréa IA" className="h-20 md:h-28" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => 
              link.type === "link" ? (
                <Link
                  key={link.id}
                  to={link.path!}
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
            <Button variant="default" size="sm" asChild>
              <Link to="/waitlist">Réserver mon accès</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Connexion</Link>
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
                link.type === "link" ? (
                  <Link
                    key={link.id}
                    to={link.path!}
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
              <Button variant="default" size="sm" className="w-full" asChild>
                <Link to="/waitlist">Réserver mon accès</Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/login">Connexion</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
