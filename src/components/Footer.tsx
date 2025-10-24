import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About", path: "/team" },
      { label: "Services", path: "/services" },
      { label: "Insights", path: "/insights" },
      { label: "Contact", path: "/contact" },
    ],
    Resources: [
      { label: "Blog", path: "/insights" },
      { label: "Case Studies", path: "/insights" },
      { label: "Website Audit", path: "/contact" },
    ],
    Legal: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">MODEL<span className="text-accent">FA</span></span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Empowering financial advisors to grow their practices through modern strategies and operational excellence.
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
              © {currentYear} Model FA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
