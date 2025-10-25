"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  name: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [],
}: Logos3Props) => {
  return (
    <section className="py-16 bg-muted">
      <div className="container flex flex-col items-center text-center">
        <h3 className="text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider">
          {heading}
        </h3>
      </div>
      <div className="pt-4">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div className="text-muted-foreground/60 hover:text-muted-foreground transition-colors text-sm md:text-base font-medium">
                      {logo.name}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-muted to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-muted to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
