"use client";
import { link } from "fs/promises";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const path = usePathname();
  return (
    <div className="h-16 p-2 px-4 shadow-2xs flex items-center justify-self-center border-b w-full">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image height={40} width={40} alt="logo" src={`/logo.webp`} />
          <div>
            <p className=" font-semibold">GHIAN</p>
            <p className="text-xs  capitalize -mt-1">
              Health advocacy organization
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm  hover:text-emerald-600 transition-colors ${path === link.href ? "text-emerald-600" : ""}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
