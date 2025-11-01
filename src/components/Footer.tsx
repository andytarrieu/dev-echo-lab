import { Link } from "react-router-dom";
import logoImage from "@/assets/aurea-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Entreprise: [
      { label: "À propos", path: "/team" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
    ],
    Légal: [
      { label: "Clause de non-responsabilité", path: "/security" },
      { label: "Politique de confidentialité", path: "/privacy" },
      { label: "Conditions d'utilisation", path: "/terms" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={logoImage} alt="Auréa IA" className="h-20" />
            </Link>
<p className="text-primary-foreground/80 text-sm">
              L'intelligence artificielle au service de l'investissement immobilier. Analysez, évaluez et optimisez vos projets avec nos 4 agents IA spécialisés.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Auréa IA. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
