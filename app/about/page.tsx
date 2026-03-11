import React from "react";
import AboutHero from "@/components/About/AboutHero";
import ServicesCarousel from "@/components/About/ServicesCarousel";
import StatsSection from "@/components/About/StatsSection";
import AboutDetails from "@/components/About/AboutDetails";
import TeamSection from "@/components/About/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <ServicesCarousel />
      <StatsSection />
      <TeamSection />
    </div>
  );
};

export default About;
