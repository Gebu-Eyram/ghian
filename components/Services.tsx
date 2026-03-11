import React from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "./motion-primitives/carousel";

interface Service {
  title: string;
  description: string;
}

const Services = () => {
  const services: Service[] = [
    {
      title: "Health Education and Community Sensitization",
      description:
        "Organizes outreach campaigns on disease prevention, maternal and child health, nutrition, sanitation, and immunization.",
    },
    {
      title: "Screening and Early Detection Programs",
      description:
        "Conducts free health screening exercises for conditions such as hepatitis B, hypertension, diabetes, and anaemia in rural and underserved areas.",
    },
    {
      title: "Capacity Building and Training",
      description:
        "Provides workshops and training for health workers, students, and community leaders in areas like public health leadership, emergency preparedness, and community-based care.",
    },
    {
      title: "Mentorship and Career Development",
      description:
        "Implements structured mentorship programs for students and early-career health professionals to build leadership and technical skills.",
    },
    {
      title: "Linkage to Care and Referral Services",
      description:
        "Facilitates access to appropriate care and follow-up treatment through partnerships with local health facilities.",
    },
    {
      title: "Health Policy Advocacy",
      description:
        "Engages policymakers and stakeholders to influence health policy reform and promote equity in healthcare delivery.",
    },
    {
      title: "Research and Data Collection",
      description:
        "Conducts operational and community-based public health research to inform evidence-based interventions and policy recommendations.",
    },
    {
      title: "Partnership Building",
      description:
        "Collaborates with local and international NGOs, government agencies, academic institutions, and private sector actors to improve health access and innovation.",
    },
    {
      title: "Resource Distribution and Logistics",
      description:
        "Supports health facilities with essential medicines, medical supplies, and equipment based on identified needs.",
    },
    {
      title: "Digital Health and Innovation",
      description:
        "Promotes the use of digital technologies and innovative health solutions to enhance healthcare delivery and access, especially in remote areas.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 text-balance max-w-2xl mx-auto">
            Empowering communities through comprehensive healthcare initiatives
            and sustainable development programs
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative w-full">
          <Carousel>
            <CarouselContent className="-ml-2">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 border h-full lg:basis-1/3 pl-4"
                >
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl text-balance font-semibold text-gray-900 mb-6">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </div>
                    <Button className="rounded-full bg-teal-700 hover:bg-teal-800 text-white w-fit">
                      Learn More →
                    </Button>
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
};

export default Services;
