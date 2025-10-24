const ClientLogos = () => {
  const clients = [
    "Vanguard",
    "Northwestern Mutual",
    "MassMutual",
    "LPL Financial",
    "TD Wealth",
    "Strategic Advisors",
    "Independence Wealth",
    "Bridge Financial",
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Leading Financial Firms</h2>
          <p className="text-muted-foreground text-lg">Join hundreds of advisors growing their practices</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-background rounded-lg hover:shadow-md transition-shadow"
            >
              <span className="text-lg font-semibold text-muted-foreground">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
