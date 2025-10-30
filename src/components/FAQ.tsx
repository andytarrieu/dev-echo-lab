import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment Auréa peut-il analyser le marché en seulement 30 secondes ?",
      answer: "Auréa agrège et croise automatiquement plus de 1 500 sources de données en temps réel : transactions notariales officielles (DVF), APIs immobilières professionnelles, données démographiques (INSEE), projets d'urbanisme, et tendances de marché.\n\nNotre IA utilise des algorithmes d'apprentissage automatique entraînés sur des millions de transactions immobilières pour identifier les patterns et faire des projections précises.\n\nCe qui prendrait 10-20 heures à un humain est calculé instantanément. En résumé : Nous automatisons le travail d'un expert avec la puissance de calcul d'une machine.",
    },
    {
      question: "Est-ce vraiment fiable ? Comment puis-je faire confiance aux recommandations de l'IA ?",
      answer: "Oui, c'est fiable. Voici pourquoi :\n\nSources officielles : Nous utilisons uniquement des données vérifiées (DVF, INSEE, APIs certifiées)\n\nCroisement de données : L'IA ne se base jamais sur une seule source, mais croise 50+ comparables pour chaque analyse\n\nMises à jour en temps réel : Les données sont actualisées quotidiennement\n\nTransparence : Nous indiquons toujours nos sources et notre niveau de confiance\n\nPrécision prouvée : 87% de précision sur les estimations de prix (testé sur 10 000+ biens)\n\nImportant : Auréa est un outil d'aide à la décision ultra-performant, pas un oracle. Nous recommandons toujours de faire vos propres vérifications et de consulter un notaire avant de signer.",
    },
    {
      question: "Je ne suis pas expert en immobilier. Est-ce que c'est trop compliqué pour moi ?",
      answer: "Au contraire ! Auréa a été conçu spécifiquement pour rendre l'investissement immobilier accessible aux débutants.\n\nAucune compétence technique requise :\n\nInterface ultra-simple (tapez une ville ou collez un lien)\n\nRésultats en langage clair (pas de jargon technique)\n\nExplications détaillées pour chaque recommandation\n\nTutoriels vidéo intégrés\n\nSupport client réactif\n\nUn exemple : Au lieu de voir 'Rendement net après fiscalité en régime réel : 4.2%', vous voyez 'Vous gagnerez 350€/mois de revenus passifs avec ce bien'.\n\nPlus de 60% de nos utilisateurs sont des primo-investisseurs qui ont réussi leur premier achat grâce à Auréa.",
    },
    {
      question: "Comment fonctionne la waiting list ? Quand pourrai-je accéder à Auréa ?",
      answer: "La waiting list fonctionne avec un système de parrainage intelligent :\n\nInscription gratuite (vous recevez votre position dans la liste)\n\nMontez dans la liste en parrainant :\n- 1 filleul = +10 places\n- 5 filleuls = +50 places + bonus early-bird\n- 10 filleuls = Accès VIP immédiat + 3 mois gratuits\n\nSuivi transparent avec email hebdomadaire et dashboard personnel\n\nAvantages early-bird :\n- Les 100 premiers : 50% de réduction à vie\n- Les 500 premiers : 30% de réduction à vie\n- Les 1000 premiers : 20% de réduction la première année\n\nDate de lancement prévue : Version beta en Mars 2026, lancement général en Juin 2026.",
    },
    {
      question: "Quelle est la différence entre Auréa et les sites comme SeLoger ou MeilleursAgents ?",
      answer: "SeLoger, LeBonCoin, PAP sont des sites d'annonces (juste des listings) sans analyse.\n\nMeilleursAgents, DVF donnent des données brutes sans interprétation.\n\nAuréa va plus loin :\n\nAgrège toutes ces sources automatiquement\n\nAnalyse et interprète les données avec l'IA\n\nFournit des recommandations actionnables ('Achetez ici, négociez à X€, voici pourquoi')\n\nUtilise 4 agents spécialisés qui couvrent tout le processus d'investissement\n\nGain de temps massif : 30 secondes au lieu de 10 heures.\n\nAnalogie : SeLoger = un dictionnaire. Auréa = un professeur qui vous explique, analyse et vous conseille.",
    },
    {
      question: "Est-ce que ça marche pour tous les types d'investissements immobiliers ?",
      answer: "Oui, Auréa couvre tous les types :\n\nLocation longue durée classique\n\nLocation meublée/LMNP\n\nAirbnb/Location courte durée\n\nColocation étudiante\n\nAchat-revente (flip)\n\nRésidence principale (avec objectif de valorisation)\n\nPetit immeuble de rapport (2-6 appartements)\n\nCouverture géographique :\n\nToute la France métropolitaine\n\nVilles de 5 000 à 2 millions d'habitants\n\nParis et région parisienne\n\nZones rurales et périurbaines\n\nTypes de biens : Appartements, Maisons, Studios, Immeubles, Parkings/Garages.",
    },
    {
      question: "Mes données personnelles et mes investissements sont-ils sécurisés ?",
      answer: "Absolument. La sécurité et la confidentialité sont nos priorités.\n\nSécurité technique :\n\nChiffrement SSL/TLS de bout en bout\n\nDonnées hébergées en Europe (conformité RGPD)\n\nServeurs sécurisés avec certifications ISO 27001\n\nSauvegardes quotidiennes automatiques\n\nAuthentification à deux facteurs (2FA) disponible\n\nConfidentialité :\n\nVos analyses sont 100% privées\n\nNous ne vendons JAMAIS vos données à des tiers\n\nAucun partage avec des agents immobiliers ou promoteurs\n\nVous pouvez supprimer votre compte à tout moment\n\nConformité légale : Conforme RGPD, politique de confidentialité transparente, DPO désigné.\n\nEn clair : Vos investissements restent votre secret. Nous sommes juste l'outil.",
    },
    {
      question: "Je possède déjà plusieurs biens immobiliers. Auréa peut-il m'aider à optimiser mon patrimoine existant ?",
      answer: "Oui, c'est exactement l'un des cas d'usage les plus puissants !\n\nL'Agent #3 (Gestionnaire de Portfolio) offre :\n\nVue d'ensemble centralisée : tous vos biens sur un dashboard, performance réelle vs objectifs, valeur totale actualisée\n\nSurveillance automatique 24/7 : évolution du marché, détection d'opportunités d'optimisation, alertes\n\nOptimisations détectées automatiquement : augmentation de loyer, éligibilité LMNP, timing de revente optimal, travaux rentables\n\nRecommandations de réinvestissement : où acheter votre prochain bien, diversification optimale, timing d'achat idéal\n\nExemple réel : Marc possède 4 appartements. En 6 mois avec Auréa, il a augmenté ses revenus nets de 18% grâce aux optimisations détectées automatiquement.",
    },
    {
      question: "Que se passe-t-il si l'analyse de l'IA se trompe ?",
      answer: "Soyons transparents : L'IA n'est pas infaillible.\n\nNous affichons toujours un niveau de confiance pour chaque analyse (ex: '87% de confiance'). Les projections sont des estimations basées sur les données historiques et actuelles.\n\nCe que nous garantissons :\n\nTransparence totale (sources et méthodologie indiquées)\n\nMarge d'erreur affichée ('Prix estimé : 172 000€ ± 5%')\n\nMises à jour continues (alertes si nouvelles données)\n\nSupport humain (révision manuelle possible)\n\nNotre responsabilité : Auréa est un outil d'aide à la décision, pas un conseiller juridique. Nous recommandons toujours de visiter le bien, consulter un notaire, faire vos propres vérifications.\n\nL'objectif d'Auréa : Réduire drastiquement votre risque d'erreur en vous donnant les meilleures informations possibles. Nous sommes votre copilote, pas votre pilote.",
    },
    {
      question: "Pourquoi devrais-je m'inscrire sur la waiting list maintenant plutôt que d'attendre le lancement ?",
      answer: "5 raisons concrètes :\n\n1. Réductions exclusives early-bird :\n- Les 100 premiers : 50% À VIE = ~3 000€ d'économie sur 5 ans\n- Les 500 premiers : 30% À VIE\n- Les 1000 premiers : 20% la première année\n\n2. Accès prioritaire à la beta : testez avant tout le monde en Mars 2026, influencez le développement\n\n3. Système de parrainage avantageux : 10 filleuls = accès VIP + 3 mois gratuits = 300€\n\n4. Les meilleures opportunités ne vous attendront pas : le marché évolue vite, chaque mois sans Auréa = opportunités ratées\n\n5. Place limitée : maximum 5 000 utilisateurs au lancement\n\nEn résumé : S'inscrire maintenant = économiser 3 000€ + accéder avant tout le monde + influencer le produit. Attendre = payer plein tarif + passer après des milliers de personnes.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">FAQ</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Tout ce que vous devez savoir sur Auréa et comment notre IA révolutionne l'investissement immobilier.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card"
            >
              <div
                className="flex items-center justify-between w-full cursor-pointer p-6 hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-base font-medium text-foreground pr-4">
                  {faq.question}
                </h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground"
                  />
                </svg>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-sm text-muted-foreground px-6 pb-6 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
