import { Shield, Lock, ServerOff, Trash2 } from "lucide-react";

const PrivacySection = () => {
  const features = [
    {
      icon: Lock,
      title: "Chiffrement AES-256",
      description: "Vos documents sont cryptés de bout en bout.",
    },
    {
      icon: ServerOff,
      title: "Jamais pour l'entraînement",
      description: "Vos données restent privées, toujours.",
    },
    {
      icon: Trash2,
      title: "Suppression immédiate",
      description: "Effacez tout en un clic, définitivement.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6" />
            <span className="text-sm font-medium uppercase tracking-wide opacity-80">Confidentialité</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Sécurité de grade bancaire
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-12">
            Vos dossiers immobiliers contiennent des informations sensibles. 
            Nous les protégeons comme un coffre-fort.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
