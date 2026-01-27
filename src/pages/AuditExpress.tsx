import NavbarNew from "@/components/NavbarNew";
import AuditHero from "@/components/AuditHero";
import FileUploadZone from "@/components/FileUploadZone";
import Footer from "@/components/Footer";

const AuditExpress = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarNew />
      <main>
        <AuditHero />
        <FileUploadZone />
      </main>
      <Footer />
    </div>
  );
};

export default AuditExpress;
