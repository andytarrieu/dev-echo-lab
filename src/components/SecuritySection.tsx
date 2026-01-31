import { Shield, Lock, ServerOff, Trash2, Globe, Eye, FileCheck } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Globe,
      title: "Souveraineté des données",
      description: "Hébergement sur des serveurs sécurisés (HDS/RGPD) en Europe. Vos données restent en France.",
    },
    {
      icon: Lock,
      title: "Étanchéité totale",
      description: "Les documents d'un client A ne servent jamais à répondre à un client B. Chaque Vault est une cellule isolée.",
    },
    {
      icon: Eye,
      title: "Transparence absolue",
      description: "Chaque réponse de l'IA est accompagnée d'une \"preuve\" : le scan du paragraphe exact du document source.",
    },
    {
      icon: ServerOff,
      title: "Jamais pour l'entraînement",
      description: "Vos données ne servent jamais à améliorer nos modèles. Votre avantage concurrentiel reste privé.",
    },
    {
      icon: Trash2,
      title: "Suppression immédiate",
      description: "Fermez votre Vault à tout moment. Vos documents sont immédiatement et définitivement supprimés.",
    },
    {
      icon: FileCheck,
      title: "L'IA ne devine pas, elle prouve",
      description: "Zéro hallucination. Chaque information est traçable jusqu'à sa source exacte dans vos documents.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Le Serment d'Aurea</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Sécurité & Éthique
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Dans l'immobilier, la donnée est sensible : patrimoine, identité, coordonnées bancaires. 
              Nous prenons cette responsabilité très au sérieux.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-primary-foreground/5 rounded-xl p-5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
