"use client";
import React from "react";
import { TextEffect } from "./motion-primitives/text-effect";

interface Stat {
  value: string;
  label: string;
}

const HomeAbout = () => {
  const stats: Stat[] = [
    { value: "500+", label: "Communities Reached" },
    { value: "100+", label: "Partner Organizations" },
    { value: "2M+", label: "Lives Impacted" },
  ];

  return (
    <section className="py-20 bg-black rounded-2xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl">
      <div className="px-8 sm:px-12">
        {/* Label */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-red-500 text-sm font-semibold tracking-widest">
            ABOUT US
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white text-center mb-8 leading-tight">
          <TextEffect per="char" preset="fade">
            At the GHIAN Health advocacy organization we advocate for equitable
            health solutions, empowering underserved communities through
            partnerships and sustainable initiatives that drive transformative
            change.
          </TextEffect>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
