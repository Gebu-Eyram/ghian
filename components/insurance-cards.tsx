import React from "react";
import Image from "next/image";
import { Check, Phone, PhoneOff } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "./motion-primitives/carousel";

const cards = [
  {
    title: "Serving Communities",
    description:
      "We support underserved rural and urban communities, women and children with limited access to care, and individuals affected by infectious and non-communicable diseases.",
    image: "/agenda/agenda-1.webp",
    alt: "Community support illustration",
  },
  {
    title: "Partnering for Change",
    description:
      "We collaborate with youth, community health workers, volunteers, policymakers, and donor organizations to scale solutions and ensure lasting impact.",
    image: "/agenda/agenda-2.jpg",
    alt: "Partnership and collaboration illustration",
  },
  {
    title: "Sustainable Development",
    description:
      "Partnering with us means joining a community dedicated to making a positive impact on the world through sustainable and scalable solutions.",
    image: "/agenda/agenda-3.webp",
    alt: "Sustainable development illustration",
  },
  {
    title: "Lasting Impact",
    description:
      "Our mission is to create meaningful change by addressing healthcare gaps and empowering communities for long-term health and wellness.",
    image: "/agenda/agenda-4.jpeg",
    alt: "Impact and growth illustration",
  },
];

export default function InsuranceCards() {
  return (
    <section className="md:py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Empowering Communities <br />
              Through Health & Partnership
            </h1>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 text-lg">
              We work alongside communities, partners, and changemakers to
              create sustainable health solutions that drive lasting impact and
              transform lives.
            </p>
          </div>
        </div>

        {/* Card section */}
        <div className="relative w-full">
          <Carousel>
            <CarouselContent className="-ml-4">
              {cards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div>
                    <div className="flex w-full mb-4 h-80 relative">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover rounded-4xl"
                      />
                    </div>
                    <h3 className="text-2xl px-2 font-medium text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 px-2 line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNavigation
              className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
              classNameButton="bg-gray-800 *:stroke-gray-50 dark:bg-gray-200 dark:*:stroke-gray-800"
              alwaysShow
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
