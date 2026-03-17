import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  year: string;
  category: string;
  title: string;
  imageSrc?: string;
  backgroundColor?: string;
  pageLink?: string,
  textColor?: string;
}

export default function ProjectCard({
  year,
  category,
  title,
  imageSrc,
  backgroundColor = "#ff5722",
  pageLink,
  textColor,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (

    <Link href={pageLink ?? "/"} className="block w-full">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group w-full rounded-xl md:rounded-2xl overflow-hidden relative mt-6 md:mt-10"
        style={{ backgroundColor, color: textColor }}
      >

        
        <div className="p-4 sm:p-5 md:p-8 flex flex-col gap-4 md:gap-6">

         
          <div className="flex items-start justify-between text-[12px] sm:text-[14px] md:text-[16px]">
            <span className="opacity-90">{year}</span>
            <span className="opacity-90">{category}</span>
          </div>

         
          <div className="border-t border-black/20" />

         
          <div className="flex items-center justify-between gap-4 md:gap-6">

            <h3 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
              {title}
            </h3>

            <div className="w-16 h-10 sm:w-24 sm:h-14 md:w-40 md:h-20 flex items-center justify-center">
              <svg
                className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[110px] md:h-[110px] transition-transform duration-500 ease-in-out group-hover:-rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke={textColor}
                strokeWidth="1.4"
              >
                <path d="M5 11h11 " />
                <path d="M11 5l6 6-6 6" />
              </svg>
            </div>

          </div>
        </div>

       
        <div className="w-full px-4 md:px-6 pb-4 md:pb-6">
          <div className="rounded-lg md:rounded-xl overflow-hidden">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-[28vh] sm:h-[38vh] md:h-[52vh] lg:h-[58vh] object-cover"
              />
            ) : (
              <div className="w-full h-[28vh] sm:h-[38vh] md:h-[52vh] lg:h-[58vh] bg-black/10" />
            )}
          </div>
        </div>

      </div>
    </Link>
  );
}