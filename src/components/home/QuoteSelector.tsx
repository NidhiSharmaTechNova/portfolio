"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const people = [
  {
    id: 1,
    name: "Sarah Chen",
    img: "https://i.pravatar.cc/150?img=32",
    quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    img: "https://i.pravatar.cc/150?img=12",
    quote:"A product is successful when it solves a real problem beautifully.",
  },
  {
    id: 3,
    name: "Emily Stone",
    img: "https://i.pravatar.cc/150?img=47",
    quote:"Understanding users deeply is the key to meaningful experiences.",
  },
];

export default function QuoteSelector() {
  const [active, setActive] = useState(1);
  const activePerson = people.find((p) => p.id === active);

  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!quoteRef.current) return;

    gsap.killTweensOf(quoteRef.current);

    gsap.fromTo(
      quoteRef.current,
      {
        opacity: 0,
        scale: 0.8,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, [active]);

  return (
    <div className="min-h-screen w-full flex justify-center px-4 sm:px-8 md:px-16 bg-black pt-10">

      <div className="w-full bg-[#f3f3f3] flex flex-col justify-between rounded-sm">

      
        <div className="p-6 sm:p-8">
          <h1
            className="font-medium text-black text-[28px] leading-[32px] sm:text-[34px]sm:leading-[36px] md:text-[40px] md:leading-[42px] lg:text-[48px] lg:leading-[48px]tracking-[-2px]">
            Testimonials
          </h1>
        </div>

        
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 text-center">
          <div className="max-w-4xl">

            <p
              ref={quoteRef} className="text-gray-800 font-normal leading-relaxed transform-gpu will-change-transform text-[18px] leading-[28px] sm:text-[22px] sm:leading-[32px] md:text-[28px] md:leading-[40px] lg:text-[34px] lg:leading-[50px] xl:text-[38px] xl:leading-[60px]"
            > “{activePerson?.quote}”
            </p>

          </div>
        </div>

        
        <div className="pb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4">

          {people.map((p) => {

            const isActive = active === p.id;

            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`group flex items-center h-[42px] sm:h-[48px] md:h-[52px] rounded-full overflow-hidden transition-all duration-500 ease ${isActive ? "bg-black" : "bg-transparent hover:bg-black/10"}
                `}
              >

                
                <img
                  src={p.img}
                  alt=""
                  className={`w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] md:w-[40px] md:h-[40px]
                  rounded-full object-cover ml-1 transition-all duration-300 ${isActive ?  "border-2 border-gray-400" : "border-2 border-transparent"}
                  `}
                />

              
                <span
                  className={`whitespace-nowrap overflow-hidden transition-all duration-500 ease text-[12px] sm:text-[14px] md:text-[16px]

                  ${
                    isActive
                      ? "max-w-[200px] opacity-100 ml-2 sm:ml-3 mr-3 text-white"
                      : "max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:ml-2 sm:group-hover:ml-3 group-hover:mr-3 text-black"
                  }
                  `}
                >
                  {p.name}
                </span>

              </button>
            );
          })}

        </div>
      </div>
    </div>
  );
}