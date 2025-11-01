import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-8">
              Conditions d'Utilisation
            </h1>
            <p className="text-muted-foreground mb-12">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">1. Acceptation des Conditions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  En accédant et en utilisant la plateforme Auréa IA, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">2. Description du Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Auréa IA est une plateforme d'intelligence artificielle dédiée à l'analyse et l'optimisation d'investissements immobiliers. Nos 4 agents IA analysent en temps réel plus de 1 500 sources de données pour vous fournir des recommandations personnalisées.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">3. Inscription et Compte</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pour utiliser nos services, vous devez :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fournir des informations exactes et complètes</li>
                  <li>Maintenir la confidentialité de vos identifiants</li>
                  <li>Être responsable de toutes les activités sur votre compte</li>
                  <li>Avoir au moins 18 ans</li>
                  <li>Nous informer immédiatement de toute utilisation non autorisée</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">4. Utilisation Acceptable</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vous vous engagez à ne pas :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Utiliser le service à des fins illégales ou frauduleuses</li>
                  <li>Tenter d'accéder sans autorisation aux systèmes d'Auréa IA</li>
                  <li>Copier, modifier ou distribuer notre contenu sans autorisation</li>
                  <li>Interférer avec le fonctionnement du service</li>
                  <li>Utiliser des robots ou systèmes automatisés non autorisés</li>
                  <li>Partager votre compte avec des tiers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">5. Propriété Intellectuelle</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tous les contenus, algorithmes, designs, logos et marques présents sur la plateforme Auréa IA sont notre propriété exclusive ou celle de nos partenaires. Toute reproduction ou utilisation non autorisée est strictement interdite.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">6. Limitations de Responsabilité</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Auréa IA fournit des outils d'analyse et de recommandation, mais :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Nous ne garantissons pas la rentabilité des investissements</li>
                  <li>Les analyses sont fournies à titre informatif uniquement</li>
                  <li>Vous restez seul responsable de vos décisions d'investissement</li>
                  <li>Nous ne sommes pas responsables des pertes financières</li>
                  <li>Les données de marché peuvent contenir des erreurs</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Il est recommandé de consulter des professionnels (notaires, avocats, conseillers financiers) avant toute décision d'investissement majeure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">7. Tarifs et Paiements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les tarifs de nos services sont indiqués sur notre site. Les paiements sont non remboursables sauf indication contraire. Nous nous réservons le droit de modifier nos tarifs avec un préavis de 30 jours.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">8. Résiliation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vous pouvez résilier votre compte à tout moment. Nous nous réservons le droit de suspendre ou résilier votre accès en cas de violation de ces conditions, sans remboursement.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">9. Modifications du Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous nous réservons le droit de modifier, suspendre ou interrompre tout ou partie du service à tout moment, avec ou sans préavis. Nous ne serons pas responsables envers vous ou des tiers pour toute modification ou interruption.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">10. Loi Applicable</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ces conditions sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux français.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">11. Clause de Non-Responsabilité Financière</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les informations fournies par Auréa IA ne constituent pas des conseils en investissement financier au sens de la réglementation applicable. Nous ne sommes pas un conseiller en investissement financier agréé. Toute décision d'investissement doit être prise après consultation de professionnels qualifiés.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">12. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour toute question concernant ces conditions d'utilisation, contactez-nous à : <a href="mailto:contact@aureaia.fr" className="text-primary hover:text-accent">contact@aureaia.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">13. Modifications des Conditions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous pouvons modifier ces conditions à tout moment. Les modifications seront effectives dès leur publication. Votre utilisation continue du service après les modifications constitue votre acceptation des nouvelles conditions.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
