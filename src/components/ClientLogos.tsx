import { Logos3 } from "@/components/ui/logos3";

const ClientLogos = () => {
  const logos = [
    { id: "logo-1", name: "DVF", description: "DVF" },
    { id: "logo-2", name: "INSEE", description: "INSEE" },
    { id: "logo-3", name: "Notaires de France", description: "Notaires de France" },
    { id: "logo-4", name: "SeLoger", description: "SeLoger" },
    { id: "logo-5", name: "LeBonCoin", description: "LeBonCoin" },
    { id: "logo-6", name: "PAP", description: "PAP" },
    { id: "logo-7", name: "Logic-Immo", description: "Logic-Immo" },
    { id: "logo-8", name: "Bien'ici", description: "Bien'ici" },
    { id: "logo-9", name: "MeilleursAgents", description: "MeilleursAgents" },
    { id: "logo-10", name: "Cadastre", description: "Cadastre" },
    { id: "logo-11", name: "Permis de Construire", description: "Permis de Construire" },
    { id: "logo-12", name: "Bases Locatives", description: "Bases Locatives" },
    { id: "logo-13", name: "Données Fiscales", description: "Données Fiscales" },
    { id: "logo-14", name: "Mairies", description: "Mairies" }
  ];

  return (
    <Logos3 
      heading="Plus de 1 500 Sources de Données Immobilières"
      logos={logos}
    />
  );
};

export default ClientLogos;
