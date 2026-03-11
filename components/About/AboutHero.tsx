"use client";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1  gap-8 items-center">
        {/* Left Content */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16">
          <div>
            <p className="text-xs  sm:text-sm font-semibold tracking-widest text-teal-700 uppercase mb-6">
              WHAT WE DO
            </p>
            <h2 className="text-4xl  lg:text-5xl font-serif font-bold text-gray-900  leading-tighter">
              Advancing health equity in communities
            </h2>
          </div>
          <div>
            <p className="text-gray-800  mb-4 leading-relaxed">
              We empower underserved communities through comprehensive health
              advocacy, education, screening programs, and sustainable
              initiatives that drive transformative change in health outcomes
              and access.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3 bg-teal-900 text-white font-semibold hover:bg-teal-800 transition">
                Free Consultation
              </button>
              <button className="px-8 py-3 border-2 border-teal-900 text-teal-900 font-semibold hover:bg-teal-50 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 sm:h-[450px] lg:h-[550px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/zoom.jpeg"
            alt="Legal professionals in meeting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
