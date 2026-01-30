import NavbarNew from "@/components/NavbarNew";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <NavbarNew />
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-8">
              Politique de Confidentialité
            </h1>
            <p className="text-muted-foreground mb-12">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Auréa IA s'engage à protéger la confidentialité de vos données personnelles. Cette politique décrit comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre plateforme d'intelligence artificielle pour l'investissement immobilier.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">2. Données Collectées</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous collectons les informations suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Informations d'identification (nom, prénom, email)</li>
                  <li>Données d'investissement (budget, préférences, projets)</li>
                  <li>Données d'utilisation de la plateforme</li>
                  <li>Données techniques (adresse IP, type de navigateur)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">3. Utilisation des Données</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vos données sont utilisées pour :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fournir nos services d'analyse IA</li>
                  <li>Personnaliser votre expérience utilisateur</li>
                  <li>Améliorer nos algorithmes et services</li>
                  <li>Communiquer avec vous sur nos services</li>
                  <li>Assurer la sécurité de la plateforme</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">4. Protection des Données</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous mettons en œuvre des mesures de sécurité strictes pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Nos serveurs sont sécurisés et les données sont chiffrées conformément aux standards de l'industrie.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">5. Partage des Données</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour répondre à des obligations légales</li>
                  <li>Avec nos prestataires de services techniques (sous contrat strict)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">6. Vos Droits</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit à la portabilité de vos données</li>
                  <li>Droit d'opposition au traitement</li>
                  <li>Droit de retirer votre consentement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">7. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre plateforme. Vous pouvez contrôler l'utilisation des cookies via les paramètres de votre navigateur.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">8. Conservation des Données</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, ou conformément aux obligations légales de conservation.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">9. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour toute question concernant cette politique ou pour exercer vos droits, contactez-nous à : <a href="mailto:contact@aureaia.fr" className="text-primary hover:text-accent">contact@aureaia.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-foreground mb-4">10. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications seront effectives dès leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette politique.
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

export default Privacy;
