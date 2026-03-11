"use client";
import React from "react";
import AboutDetails from "./AboutDetails";

interface Stat {
  value: string;
  label: string;
}

const StatsSection = () => {
  const stats: Stat[] = [
    { value: "20+", label: "Communities Served" },
    { value: "250+", label: "Healthcare Experts" },
    { value: "500+", label: "Lives Improved" },
    { value: "1000+", label: "Patients Served" },
  ];

  return (
    <section className="py-16 px-4 sm:px-8  bg-yellow-50 rounded-lg">
      <div className="max-w-7xl w-full mx-auto">
        <AboutDetails />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl sm:text-5xl font-bold text-teal-800 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
