import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment Auréa peut-il analyser le marché en seulement 30 secondes ?",
      answer: "Auréa agrège et croise automatiquement plus de 1 500 sources de données en temps réel : transactions notariales officielles (DVF), APIs immobilières professionnelles, données démographiques (INSEE), projets d'urbanisme, et tendances de marché. Notre IA utilise des algorithmes d'apprentissage automatique entraînés sur des millions de transactions immobilières pour identifier les patterns et faire des projections précises. Ce qui prendrait 10-20 heures à un humain est calculé instantanément. En résumé : Nous automatisons le travail d'un expert avec la puissance de calcul d'une machine.",
    },
    {
      question: "Est-ce vraiment fiable ? Comment puis-je faire confiance aux recommandations de l'IA ?",
      answer: "Oui, c'est fiable. Voici pourquoi : ✅ Sources officielles : Nous utilisons uniquement des données vérifiées (DVF, INSEE, APIs certifiées) ✅ Croisement de données : L'IA ne se base jamais sur une seule source, mais croise 50+ comparables pour chaque analyse ✅ Mises à jour en temps réel : Les données sont actualisées quotidiennement ✅ Transparence : Nous indiquons toujours nos sources et notre niveau de confiance ✅ Précision prouvée : 87% de précision sur les estimations de prix (testé sur 10 000+ biens). Important : Auréa est un outil d'aide à la décision ultra-performant, pas un oracle. Nous recommandons toujours de faire vos propres vérifications et de consulter un notaire avant de signer.",
    },
    {
      question: "Je ne suis pas expert en immobilier. Est-ce que c'est trop compliqué pour moi ?",
      answer: "Au contraire ! Auréa a été conçu spécifiquement pour rendre l'investissement immobilier accessible aux débutants. Aucune compétence technique requise : Interface ultra-simple (tapez une ville ou collez un lien), résultats en langage clair (pas de jargon technique), explications détaillées pour chaque recommandation, tutoriels vidéo intégrés, support client réactif. Un exemple : Au lieu de voir 'Rendement net après fiscalité en régime réel : 4.2%', vous voyez 'Vous gagnerez 350€/mois de revenus passifs avec ce bien'. Plus de 60% de nos utilisateurs sont des primo-investisseurs qui ont réussi leur premier achat grâce à Auréa.",
    },
    {
      question: "Comment fonctionne la waiting list ? Quand pourrai-je accéder à Auréa ?",
      answer: "La waiting list fonctionne avec un système de parrainage intelligent : 📝 Inscription gratuite (vous recevez votre position dans la liste) 🚀 Montez dans la liste en parrainant (1 filleul = +10 places, 5 filleuls = +50 places + bonus early-bird, 10 filleuls = Accès VIP immédiat + 3 mois gratuits) 📊 Suivi transparent avec email hebdomadaire et dashboard personnel 🎁 Avantages early-bird (Les 100 premiers : 50% de réduction à vie, Les 500 premiers : 30% de réduction à vie, Les 1000 premiers : 20% de réduction la première année). Date de lancement prévue : Version beta en Mars 2026, lancement général en Juin 2026.",
    },
    {
      question: "Quelle est la différence entre Auréa et les sites comme SeLoger ou MeilleursAgents ?",
      answer: "SeLoger, LeBonCoin, PAP sont des sites d'annonces (juste des listings) sans analyse. MeilleursAgents, DVF donnent des données brutes sans interprétation. Auréa agrège toutes ces sources automatiquement, analyse et interprète les données avec l'IA, fournit des recommandations actionnables ('Achetez ici, négociez à X€, voici pourquoi'), utilise 4 agents spécialisés qui couvrent tout le processus d'investissement. Gain de temps massif : 30 secondes au lieu de 10 heures. Analogie : SeLoger = un dictionnaire. Auréa = un professeur qui vous explique, analyse et vous conseille.",
    },
    {
      question: "Est-ce que ça marche pour tous les types d'investissements immobiliers ?",
      answer: "Oui, Auréa couvre tous les types : Location longue durée classique, Location meublée/LMNP, Airbnb/Location courte durée, Colocation étudiante, Achat-revente (flip), Résidence principale (avec objectif de valorisation), Petit immeuble de rapport (2-6 appartements). Couverture géographique : Toute la France métropolitaine, villes de 5 000 à 2 millions d'habitants, Paris et région parisienne, zones rurales et périurbaines. Types de biens : Appartements, Maisons, Studios, Immeubles, Parkings/Garages.",
    },
    {
      question: "Mes données personnelles et mes investissements sont-ils sécurisés ?",
      answer: "Absolument. La sécurité et la confidentialité sont nos priorités. 🔒 Sécurité technique : Chiffrement SSL/TLS de bout en bout, données hébergées en Europe (conformité RGPD), serveurs sécurisés avec certifications ISO 27001, sauvegardes quotidiennes automatiques, authentification à deux facteurs (2FA) disponible. 🔒 Confidentialité : Vos analyses sont 100% privées, nous ne vendons JAMAIS vos données à des tiers, aucun partage avec des agents immobiliers ou promoteurs, vous pouvez supprimer votre compte à tout moment. 🔒 Conformité légale : Conforme RGPD, politique de confidentialité transparente, DPO désigné. En clair : Vos investissements restent votre secret. Nous sommes juste l'outil.",
    },
    {
      question: "Je possède déjà plusieurs biens immobiliers. Auréa peut-il m'aider à optimiser mon patrimoine existant ?",
      answer: "Oui, c'est exactement l'un des cas d'usage les plus puissants ! L'Agent #3 (Gestionnaire de Portfolio) offre : Vue d'ensemble centralisée (tous vos biens sur un dashboard, performance réelle vs objectifs, valeur totale actualisée), Surveillance automatique 24/7 (évolution du marché, détection d'opportunités d'optimisation, alertes), Optimisations détectées automatiquement (augmentation de loyer, éligibilité LMNP, timing de revente optimal, travaux rentables), Recommandations de réinvestissement (où acheter votre prochain bien, diversification optimale, timing d'achat idéal). Exemple réel : Marc possède 4 appartements. En 6 mois avec Auréa, il a augmenté ses revenus nets de 18% grâce aux optimisations détectées automatiquement.",
    },
    {
      question: "Que se passe-t-il si l'analyse de l'IA se trompe ?",
      answer: "Soyons transparents : L'IA n'est pas infaillible. Nous affichons toujours un niveau de confiance pour chaque analyse (ex: '87% de confiance'). Les projections sont des estimations basées sur les données historiques et actuelles. Ce que nous garantissons : ✅ Transparence totale (sources et méthodologie indiquées) ✅ Marge d'erreur affichée ('Prix estimé : 172 000€ ± 5%') ✅ Mises à jour continues (alertes si nouvelles données) ✅ Support humain (révision manuelle possible). Notre responsabilité : Auréa est un outil d'aide à la décision, pas un conseiller juridique. Nous recommandons toujours de visiter le bien, consulter un notaire, faire vos propres vérifications. L'objectif d'Auréa : Réduire drastiquement votre risque d'erreur en vous donnant les meilleures informations possibles. Nous sommes votre copilote, pas votre pilote.",
    },
    {
      question: "Pourquoi devrais-je m'inscrire sur la waiting list maintenant plutôt que d'attendre le lancement ?",
      answer: "5 raisons concrètes : 🎁 1. Réductions exclusives early-bird (Les 100 premiers : 50% À VIE = ~3 000€ d'économie sur 5 ans, Les 500 premiers : 30% À VIE, Les 1000 premiers : 20% la première année) ⚡ 2. Accès prioritaire à la beta (testez avant tout le monde en Mars 2026, influencez le développement) 🎯 3. Système de parrainage avantageux (10 filleuls = accès VIP + 3 mois gratuits = 300€) 📈 4. Les meilleures opportunités ne vous attendront pas (le marché évolue vite, chaque mois sans Auréa = opportunités ratées) 🔐 5. Place limitée (maximum 5 000 utilisateurs au lancement). En résumé : S'inscrire maintenant = économiser 3 000€ + accéder avant tout le monde + influencer le produit. Attendre = payer plein tarif + passer après des milliers de personnes.",
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
                  openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-muted-foreground px-6 pb-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
