"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Projects",
      href: "/projects",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const path = usePathname();

  return (
    <div className="sticky top-0 z-50 bg-white w-full border-b">
      <div className="h-16 p-2 px-4 flex items-center justify-between">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image height={40} width={40} alt="logo" src={`/logo.webp`} />
            <div>
              <p className="font-semibold">GHIAN</p>
              <p className="text-xs capitalize -mt-1">
                Health advocacy organization
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm hover:text-teal-600 transition-colors ${
                  path === link.href ? "text-teal-600 font-semibold" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col space-y-2 p-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  path === link.href
                    ? "bg-teal-600 text-white font-semibold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
