import { Link } from "react-router-dom";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">AURÉA Vault</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              L'intelligence augmentée au service de l'immobilier. Analysez vos dossiers notariaux, détectez les risques cachés et négociez en toute confiance.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{category}</h3>
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

        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} AURÉA Vault. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
