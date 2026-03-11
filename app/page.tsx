import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/logo-cloud";
import InsuranceCards from "@/components/insurance-cards";
import React from "react";
import HomeAbout from "@/components/HomeAbout";
import Services from "@/components/Services";

const page = () => {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <HomeAbout />
      <Services />
      <InsuranceCards />
    </div>
  );
};

export default page;
