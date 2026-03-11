"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: "ongoing" | "planned";
  type?: string;
  details?: string;
  focusAreas?: string[];
  components?: string[];
  objectives?: string[];
}

const projects: Project[] = [
  // Ongoing Projects
  {
    id: "1",
    title: "Monthly Public Health Webinars Series",
    description:
      "Virtual health webinars aimed at increasing public awareness, promoting preventive health practices, and empowering individuals and communities with reliable health information.",
    image_url: "/projects/health_awareness.jpg",
    category: "ongoing",
    type: "Ongoing",
    details:
      "GHIAN organizes monthly virtual health webinars that bring together health professionals, researchers, policy experts, patient groups, and community advocates to discuss emerging and priority public health issues in Ghana, identify gaps within the health system, and foster dialogue and collective action towards better health outcomes.",
    focusAreas: [
      "Vaccination access strategies",
      "Viral hepatitis prevention and care",
      "Maternal, neonatal, and child health",
      "Adolescent health and well-being",
      "Communicable and non-communicable disease prevention and management",
      "Community health system strengthening",
      "Health equity and vulnerable populations",
    ],
  },
  {
    id: "2",
    title: "Hepatitis B Research and Linkage-to-Care Initiative",
    description:
      "Research and community-based interventions to enhance understanding of hepatitis B prevalence, raise awareness, reduce stigma, and improve access to care.",
    image_url: "/projects/hep-b.webp",
    category: "ongoing",
    type: "Ongoing",
    details:
      "GHIAN is actively engaged in research and community-based interventions to enhance understanding of hepatitis B prevalence, raise awareness, reduce stigma, and improve access to care. The initiative strengthens testing, counselling, and care coordination for individuals diagnosed with hepatitis B, ensuring they receive timely and appropriate support.",
    components: [
      "Community screening and education",
      "Data collection to inform research and policy recommendations",
      "Referrals and linkage to clinical care services",
      "Collaboration with healthcare facilities and NGOs",
    ],
  },
  {
    id: "3",
    title: "Neonatal Mortality Survey and Health System Strengthening",
    description:
      "National survey on neonatal deaths in Ghana in collaboration with GIANT to identify key determinants and propose evidence-based interventions.",
    image_url: "/projects/neo-natal.jpg",
    category: "ongoing",
    type: "Ongoing",
    details:
      "GHIAN is currently conducting a national survey on neonatal deaths in Ghana in collaboration with the Global Immunization and Action Network Team (GIANT). This study aims to identify key determinants of neonatal deaths and propose evidence-based interventions to improve newborn survival outcomes.",
    objectives: [
      "To Assess contributing medical, social, and system-level factors",
      "To Strengthen health worker capacity in newborn care",
      "To Support policy dialogue to enhance newborn health services",
    ],
  },
  {
    id: "4",
    title: "Disease Prevention and Management",
    description:
      "Comprehensive initiatives focused on communicable and non-communicable disease prevention strategies across Ghana.",
    image_url: "/projects/disease_prevention.jpeg",
    category: "ongoing",
    type: "Ongoing",
    details:
      "Our comprehensive disease prevention initiatives focus on both communicable and non-communicable disease prevention strategies. We work to strengthen community awareness, improve early detection, and facilitate timely intervention across Ghana.",
    focusAreas: [
      "Communicable disease surveillance and prevention",
      "Non-communicable disease management strategies",
      "Community health education",
      "Early detection and intervention programs",
    ],
  },
  {
    id: "5",
    title: "Maternal and Child Health",
    description:
      "Targeted programs improving maternal, neonatal, and child health outcomes in underserved communities.",
    image_url: "/projects/maternal_health.jpg",
    category: "ongoing",
    type: "Ongoing",
    details:
      "Our targeted programs focus on improving maternal, neonatal, and child health outcomes in underserved communities. We provide comprehensive services including prenatal care, skilled delivery support, and postnatal follow-up.",
    focusAreas: [
      "Prenatal care and maternal health services",
      "Skilled birth attendance programs",
      "Postnatal care and follow-up",
      "Child health and nutrition initiatives",
      "Community health worker training",
    ],
  },
  // Planned Projects
  {
    id: "6",
    title: "Community Health & Linkage Outreach Campaigns",
    description:
      "Rural districts outreach by engaging communities to improve access to essential health services and strengthen linkage to care.",
    image_url: "/projects/community_mobilization.jpg",
    category: "planned",
    type: "Planned",
    details:
      "This planned initiative will conduct outreach campaigns in rural districts, engaging communities to improve access to essential health services and strengthen linkage to care. We will work with community leaders and health workers to identify local health needs and develop sustainable solutions.",
    focusAreas: [
      "Community engagement and mobilization",
      "Local health needs assessment",
      "Health service accessibility improvement",
      "Linkage to care coordination",
    ],
  },
  {
    id: "7",
    title: "Health Literacy & Behavior Change Communication Program",
    description:
      "Promoting healthy behaviors through schools, radio, and community groups to raise awareness and empower communities.",
    image_url: "/projects/health_awareness.jpg",
    category: "planned",
    type: "Planned",
    details:
      "This comprehensive program aims at promoting healthy behaviors through multiple channels including schools, radio, and community groups. We will develop tailored messaging to raise awareness and empower communities to make informed health decisions.",
    focusAreas: [
      "School-based health education",
      "Radio broadcast campaigns",
      "Community group discussions",
      "Behavior change communication",
      "Health messaging development",
    ],
  },
  {
    id: "8",
    title: "Capacity Building Training Series",
    description:
      "Strengthen skills and knowledge of frontline CHPS compound staff and community health nurses to enhance service delivery.",
    image_url: "/projects/policy_advocacy.jpeg",
    category: "planned",
    type: "Planned",
    details:
      "This training series will strengthen the skills and knowledge of frontline CHPS compound staff and community health nurses. Through comprehensive training programs, we aim to enhance service delivery quality and improve health outcomes in communities.",
    objectives: [
      "Enhance technical skills of health workers",
      "Improve service delivery quality",
      "Strengthen community health systems",
      "Build sustainable capacity at local level",
    ],
  },
  {
    id: "9",
    title: "Digital Health Support System Pilot",
    description:
      "Improve referrals, follow-up care, and continuity of services in remote communities through digital solutions.",
    image_url: "/projects/networking.webp",
    category: "planned",
    type: "Planned",
    details:
      "This pilot project will test digital health solutions to improve referrals, follow-up care, and continuity of services in remote communities. The system will enable better communication between healthcare providers and patients, ensuring no one falls through the cracks.",
    objectives: [
      "Implement digital referral system",
      "Enable remote follow-up care capabilities",
      "Improve service continuity tracking",
      "Pilot in select remote communities",
      "Evaluate for scaling potential",
    ],
  },
];

export default function ProjectsPage() {
  const ongoingProjects = projects.filter((p) => p.category === "ongoing");
  const plannedProjects = projects.filter((p) => p.category === "planned");

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) => (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group bg-muted rounded-2xl p-1 border  cursor-pointer"
        >
          <div className=" pt-6 p-4 ">
            <div className="flex items-center justify-between gap-2 mb-3">
              <h3 className="text-lg text-balance font-semibold text-foreground leading-tighter line-clamp-1 flex-1">
                {project.title}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {project.description}
            </p>
          </div>
          {/* Project Image */}
          <div className="relative h-60 rounded-xl border overflow-hidden bg-muted">
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              className="object-cover  group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Project Content */}
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader className="text-left">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={project.image_url}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {project.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="px-4 pb-6 space-y-6">
          {project.details && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                About this Project
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.details}
              </p>
            </div>
          )}

          {project.focusAreas && project.focusAreas.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Focus Areas
              </h3>
              <ul className="space-y-2">
                {project.focusAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.components && project.components.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Components Include
              </h3>
              <ul className="space-y-2">
                {project.components.map((component, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{component}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.objectives && project.objectives.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                Project Objectives
              </h3>
              <ul className="space-y-2">
                {project.objectives.map((objective, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <DialogClose asChild>
          <Button variant="outline" className="w-full mt-4">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-medium mb-4">
                Our Projects
              </h1>
              <p className="text-muted-foreground text-balance text-lg max-w-2xl mx-auto">
                Discover the impactful initiatives and projects we're working on
                to improve healthcare in Ghana and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Ongoing Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planned Projects Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Planned / Upcoming Projects
              </h2>
              <p className="text-muted-foreground text-lg">
                Exciting new initiatives we're developing to expand our impact
              </p>
            </div>

            {/* Planned Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {plannedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
