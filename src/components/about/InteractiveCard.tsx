"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "@/assets/card5.webp"
import img2 from "@/assets/card2.webp"
import img3 from "@/assets/card3.webp"


export default function InteractiveCard() {
  const images = [
   img1,
    img2,
    img3,
  ];

  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        fixed 
        w-[300px] h-[300px]
        bg-black
        rounded
        flex items-center justify-center
        -rotate-6
        z-[9999]
        cursor-pointer
        transition-opacity duration-300
        ${mounted ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >
      <Image
        src={images[index]}
        alt="card"
        width={200}
        height={200}
        className="pointer-events-none"
      />
    </div>
  );
}