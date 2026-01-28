import { Shield, Lock, ServerOff, Trash2 } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Chiffrement de bout en bout",
      description: "Vos documents sont cryptés dès l'upload et restent protégés tout au long du traitement.",
    },
    {
      icon: ServerOff,
      title: "Jamais utilisé pour l'entraînement",
      description: "Vos données ne servent jamais à améliorer nos modèles. Votre avantage reste privé.",
    },
    {
      icon: Trash2,
      title: "Suppression à la demande",
      description: "Fermez votre Vault à tout moment. Vos documents sont immédiatement et définitivement supprimés.",
    },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="h-8 w-8" />
            <p className="text-sm font-medium uppercase tracking-wide opacity-80">
              Confidentialité & Sécurité
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Sécurité de grade bancaire
          </h2>
          <p className="text-lg text-center opacity-90 mb-12 max-w-2xl mx-auto">
            Nous respectons la confidentialité de vos projets. Vos dossiers de vente sont cryptés 
            et ne sont jamais utilisés pour entraîner nos modèles d'IA.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7" />
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
