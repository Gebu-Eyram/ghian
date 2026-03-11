"use client";
import React from "react";

const AboutDetails = () => {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-teal-700 mb-4">
            START WITH US
          </p>
          <h2 className="text-4xl sm:text-5xl font-medium text-balance font-serif text-gray-900  leading-tighter">
            Building equitable health outcomes through community partnerships
          </h2>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <p className="text-gray-800 text-lg leading-relaxed">
            We organize health education and community sensitization campaigns
            on disease prevention, maternal and child health, nutrition, and
            immunization. Through our screening programs, we conduct free health
            screening exercises in rural and underserved areas. Our capacity
            building initiatives provide workshops and training for health
            workers and community leaders.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            We partner with local and international organizations to facilitate
            linkage to care, health policy advocacy, and research-driven
            interventions. Our digital health innovations and resource
            distribution programs ensure equitable access to healthcare services
            and support for facilities with essential medicines and equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
