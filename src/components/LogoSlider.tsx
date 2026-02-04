import { useEffect, useRef } from "react";

// Import logos
import seloger from "@/assets/logos/seloger.png";
import leboncoin from "@/assets/logos/leboncoin.png";
import orpi from "@/assets/logos/orpi-new.png";
import century21 from "@/assets/logos/century21.png";
import laforet from "@/assets/logos/laforet.png";
import iad from "@/assets/logos/iad.png";

const LogoSlider = () => {
  const logos = [
    { src: seloger, alt: "SeLoger" },
    { src: leboncoin, alt: "Leboncoin" },
    { src: orpi, alt: "Orpi" },
    { src: century21, alt: "Century 21" },
    { src: laforet, alt: "Laforêt" },
    { src: iad, alt: "IAD" },
  ];

  // Double the logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-6 sm:py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Données analysées depuis les principales sources immobilières
        </p>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Sliding container */}
          <div className="flex animate-slide-logos">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 sm:mx-12 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
