"use client";
import { Asterisk } from "lucide-react";
import React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

interface Service {
  name: string;
}

const ServicesCarousel = () => {
  const services: Service[] = [
    { name: "Health Education" },
    { name: "Screening Programs" },
    { name: "Capacity Building" },
    { name: "Health Advocacy" },
    { name: "Research & Data" },
    { name: "Digital Health" },
  ];

  return (
    <section className="w-full">
      <div className="bg-teal-900 py-4 px-8 relative overflow-hidden">
        <InfiniteSlider speedOnHover={20} speed={40} gap={48}>
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white text-lg sm:text-xl font-semibold whitespace-nowrap shrink-0"
            >
              <Asterisk className="w-8 h-8 text-teal-300 shrink-0" />
              <span>{service.name}</span>
            </div>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          className="pointer-events-none absolute left-0 top-0 h-full w-20"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute right-0 top-0 h-full w-20"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </section>
  );
};

export default ServicesCarousel;
