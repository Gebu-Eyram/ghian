import React from "react";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
}

const ServicesPage = () => {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase mb-4">
            Our Services
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            What We Do
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering communities through comprehensive healthcare initiatives
            and sustainable development programs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Button className="rounded-full bg-teal-700 hover:bg-teal-800 text-white">
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 bg-teal-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to make a difference?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join us in our mission to advance health equity and improve health
            outcomes in underserved communities.
          </p>
          <Button className="bg-white text-teal-900 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
