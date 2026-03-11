"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [avatars, setAvatars] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;

    fetch("https://randomuser.me/api/?results=3&inc=picture")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        const urls = data.results.map((r: any) => r.picture.medium);
        setAvatars(urls);
      })
      .catch(() => {
        // fallback to the local avatars we added earlier
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
    <section className="relative h-[calc(100vh-80px)] p-2">
      <div className="rounded-2xl overflow-hidden h-full  relative">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover w-full h-full"
          priority
        />

        {/* Dark overlay gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

        {/* Left content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full text-white px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex -space-x-2">
                {avatars.length
                  ? avatars.map((src, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-white overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`Avatar ${i + 1}`}
                          width={36}
                          height={36}
                          className="object-cover"
                        />
                      </div>
                    ))
                  : // simple loading placeholders
                    [0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full bg-white/30 border-2 border-white animate-pulse"
                      />
                    ))}
              </div>
              <div className="text-sm opacity-90">197k+ Satisfied Clients</div>
            </div>

            <h1 className="text-5xl font-semibold font-(family-name:--font-inter) md:text-6xl lg:text-8xl  leading-tight">
              Health Equity for
            </h1>

            <div className=" flex items-baseline gap-4">
              <span className=" text-6xl font-semibold md:text-7xl lg:text-8xl  font-(family-name:--font-lobster-two)">
                every Ghanaian
              </span>
            </div>

            <p className="mt-4  md:text-xl text-neutral-200 max-w-lg">
              Building healthier futures with bold advocacy, local leadership,
              and global collaboration.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <button className="bg-white text-black font-semibold px-5 py-3 rounded-full shadow-lg">
                Talk to Us
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4.5 3.5l11 6.5-11 6.5v-13z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right bottom CTA */}
        <div className="absolute bottom-6 right-8">
          <button className="bg-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7 4a1 1 0 011.707-.707l5 5a1 1 0 010 1.414l-5 5A1 1 0 017 13.293L10.586 9 7 5.414V4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Cover Feature</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
