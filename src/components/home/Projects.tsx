"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    year: "2025",
    category: "Personal Project",
    title: "bizz buzz",
    backgroundColor: "#ff6200",
    imageSrc:
      "https://framerusercontent.com/images/cak7U7dY4h898WLby7suvljdOcA.jpg?width=120&height=129",
    pageLink: "/platform",
    textColor: "#000",
  },
  {
    year: "2024",
    category: "Branding and Identity",
    title: "aquaflow",
    backgroundColor: "#fff",
    imageSrc:
      "https://framerusercontent.com/images/xKHWSysrgFe1ub1CxmcYLHQdpc.jpg?width=1920&height=1440",
    textColor: "#1f00ff",
    pageLink: "/appcard",
  },
  {
    year: "2023",
    category: "UI/UX",
    title: "snackify",
    backgroundColor: "#2e3538",
    imageSrc:
      "https://framerusercontent.com/images/v2Cxh5gAzf3y5i5rvV7stpdreY.jpg?width=1920&height=1440",
    textColor: "#b3ffcb",
    pageLink: "/design",
  },
  {
    year: "2022",
    category: "Personal Project",
    title: "zengo",
    backgroundColor: "#fd0",
    imageSrc:
      "https://framerusercontent.com/images/B4iHZ4n8YkDGgjtcjPiGagMwMzA.jpg?width=1920&height=1440",
    textColor: "#3d3b54",
    pageLink: "/zengo",
  },
  {
    year: "2022",
    category: "Branding and Identity",
    title: "roverride",
    backgroundColor: "#333",
    imageSrc:
      "https://framerusercontent.com/images/ju62vkEreDoQkpYoSbxnVoVcnzo.jpg?width=1920&height=1440",
    textColor: "#949494",
    pageLink: "/roverride",
  },
];

export default function StickyCards() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    const mm = gsap.matchMedia();

    // Desktop animation
    mm.add("(min-width: 809px)", () => {

      const cards = gsap.utils.toArray<HTMLElement>(".card");
      const total = cards.length;

      const stackGap = 80;
      const startOffset = 180;
      const depthScale = 0.04;

      gsap.set(cards, {
        y: window.innerHeight,
        transformOrigin: "top center",
      });

      gsap.set(cards[0], {
        y: startOffset,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${total * 180}%`,
          scrub: 2,
          pin: true,
        },
      });

      cards.forEach((card, i) => {

        if (i === 0) return;

        tl.to(card, {
          y: startOffset,
          scale: 1,
          ease: "power3.out",
        }, i);

        tl.to(cards.slice(0, i), {
          y: (index) => startOffset - (i - index) * stackGap,
          scale: (index) => 1 - (i - index) * depthScale,
          ease: "power2.out",
        }, i);

      });

    });

    return () => mm.revert();

  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-black px-6 sm:px-10 md:px-16 flex justify-center"
    >

      
      <div className="relative w-full h-[150vh] hidden min-[809px]:block">

        {projects.map((project, i) => (
          <div
            key={i}
            className="card absolute left-0 top-0 w-full"
          >
            <ProjectCard {...project} />
          </div>
        ))}

      </div>

      
      <div className="w-full flex flex-col gap-10 min-[809px]:hidden">

        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}

      </div>

    </section>
  );
}




