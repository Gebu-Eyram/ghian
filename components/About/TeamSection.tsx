"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/motion-primitives/carousel";

const TeamSection = () => {
  interface TeamMember {
    id: string;
    name: string;
    grade: string;
    position: string;
    bio?: string;
    linkedin_url?: string;
    image_url?: string;
  }

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Prof. Bill Willam Remak",
      grade: "GLOBAL HEALTH ADVOCATE",
      position: "PATRON & TECHNICAL ADVISER",
    },
    {
      id: "2",
      name: "Florence Gyebuzie Wongnaah",
      grade: "EPIDEMIOLOGIST",
      position: "CHIEF EXECUTIVE OFFICER (CEO)",
      image_url: "/team/ceo.jpg",
      bio: "Florence is an epidemiologist with over 10 years of experience in disease control and prevention. She coordinated activities of the disease control unit, including TB, malaria, NTDs, EPI, disease surveillance, and outbreak investigation. She is currently conducting research to address healthcare inequalities in low-resource settings with a focus on infectious diseases. She aims to contribute to advancing global health through research, policy, and targeted interventions that prioritize vulnerable populations.",
    },
    {
      id: "3",
      name: "Ferdinard Aasire-Nifawuo",
      grade: "PUBLIC HEALTH NURSE",
      position: "MANAGING DIRECTOR",
      image_url: "/team/md.jpg",
      bio: "Ferdinard is a passionate Public Health Nurse and Global Health advocate dedicated to improving healthcare access and outcomes in underserved communities. He holds a Bachelor of Science in Public Health Nursing from the University of Health and Allied Sciences (UHAS) and is currently pursuing a Master of Public Health (MPH) in Global Health at the University for Development Studies (UDS). With a strong background in community health, health systems strengthening, and disease prevention, he champions initiatives that build capacity among health workers, enhance health education, and promote universal health coverage in Ghana.",
    },
    {
      id: "4",
      name: "Hilary Vuurong",
      grade: "PUBLIC HEALTH NURSE",
      position: "PROJECT OFFICER",
    },
    {
      id: "5",
      name: "Mailda Ayeltige",
      grade: "",
      position: "SECRETARY",
    },
    {
      id: "6",
      name: "Shaibu Adams",
      grade: "",
      position: "TRAINING COORDINATOR",
    },
    {
      id: "7",
      name: "Cynthia Lawrence",
      grade: "NURSE",
      position: "ASSISTANT SECRETARY",
    },
    {
      id: "8",
      name: "Felicia Darkwaa",
      grade: "NURSE",
      position: "TREASURE",
    },
    {
      id: "9",
      name: "Dr. Kwame Asare Obuobi",
      grade: "MEDICAL OFFICER",
      position: "MEDICAL OFFICER",
    },
    {
      id: "10",
      name: "Peter Acheampong",
      grade: "DISEASE CONTROL OFFICER",
      position: "ADMINITRATOR",
    },
    {
      id: "11",
      name: "Paul Kombat",
      grade: "PUBLIC HEALTH OFFICER",
      position: "PUBLIC RELATION OFFICE",
      image_url: "/team/pro.jpg",
      bio: "Paul is currently working as a Public Health Officer with a strong background in nutrition and health systems. Before his current position, he worked as a technical officer (nutrition) with 8 years of experience, coordinating activities of the nutrition unit including community-based management of malnutrition, growth monitoring and promotion, nutrition surveys, and pregnancy school education. His career objective is to become an efficient, self-motivated public health researcher and global health specialist, with the ability to make effective decisions leading to growth and effectiveness of health system strategies towards positive health outcomes.",
      linkedin_url: "https://www.linkedin.com/in/kombat-paul-396379107",
    },
  ];

  const [avatars, setAvatars] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;

    fetch("https://randomuser.me/api/?results=3&inc=picture&seed=legal")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        const urls = data.results.map((r: any) => r.picture.large);
        setAvatars(urls);
      })
      .catch(() => {
        setAvatars([
          "/avatars/avatar1.svg",
          "/avatars/avatar2.svg",
          "/avatars/avatar3.svg",
        ]);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <p className="text-sm font-semibold tracking-widest text-teal-700 mb-8">
        OUR TEAM
      </p>
      <div className="relative w-full">
        <Carousel>
          <CarouselContent className="-ml-2">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={member.id}
                className="basis-full md:basis-1/2 lg:basis-1/4 pl-2"
              >
                <div className="flex flex-col h-full">
                  <div className="w-full h-80 rounded-lg overflow-hidden relative mb-4">
                    <Image
                      src={
                        member.image_url ? member.image_url : "/placeholder.jpg"
                      }
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-teal-700 mb-1">
                      {member.position}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation
            className="absolute -bottom-16 left-auto top-auto w-full justify-end gap-2"
            classNameButton="bg-gray-800 *:stroke-gray-50 dark:bg-gray-200 dark:*:stroke-gray-800"
            alwaysShow
          />
        </Carousel>
      </div>
    </section>
  );
};

export default TeamSection;
