"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {

  const items = ["Projects", "About", "Playground", "Resume"];
  const pathname = usePathname() || "/";
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.3,
        ease: "power2.out"
      })

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <>

      <header className="w-full flex items-center justify-between py-5 px-6 md:px-15 fixed top-0 left-0 right-0 z-50 bg-black">
        {/* <header className="w-full fixed top-0 left-0 right-0 z-50 bg-black ">
        <div className=" px-15 flex items-center justify-between py-5"> */}

        <Link
          href="/"
          className="text-2xl [font-family:var(--font-funnel-display)] cursor-pointer"
        >
          Mohit Sharma
        </Link>


        <nav className="hidden min-[809px]:flex gap-6 items-center">

          {/* {items.map((it) => {

              const path = it === "Projects" ? "/" : `/${it.toLowerCase()}`;

              return (
                <Link
                  key={it}
                  href={path}
                  className="text-lg text-[#ffffff80] hover:text-white transition"
                >
                  {it}
                </Link>
              );
            })} */}

          {items.map((it) => {

            const path = it === "Projects" ? "/" : `/${it.toLowerCase()}`;

            return (
              <Link
                key={it}
                href={path}
                className={`text-lg transition ${pathname === path
                  ? "text-white"
                  : "text-[#ffffff80] hover:text-white"
                  }`}
              >
                {it}
              </Link>
            );
          })}



          <div className="relative group">

            <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-[#e5e5e5] transition">
              Hire us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div className="absolute right-0 mt-2 w-48 bg-[#2a2a2a] rounded-xl p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition duration-200">

              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg">
                <img src="https://cdn.worldvectorlogo.com/logos/upwork-1.svg" className="w-5 h-5" />
                <span className="text-white">Upwork</span>
              </a>

              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#3a3a3a] transition">
                <img src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" className="w-5 h-5" />
                <span className="text-white">Freelancer</span>
              </a>

              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#3a3a3a] transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" className="w-5 h-5" />
                <span className="text-white">Gmail</span>
              </a>

            </div>

          </div>

        </nav>


        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 min-[809px]:hidden"
        >



          {/* <span className="relative w-[50px] h-[27px] block">

            <span
              className={`absolute inset-0 text-white text-lg  tracking-wide transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"
                }`}
            >
              menu
            </span>

            <span
              className={`absolute inset-0 text-white text-lg  tracking-wide transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"
                }`}
            >
              close
            </span>

          </span> */}

          {/* Hamburger */}
          <div className="flex flex-col gap-[6px] ">

            <span className={`w-6 h-[2px] bg-white transition`} />

            <span className={`w-6 h-[2px] bg-white transition`} />

          </div>

        </button>


        <div className="absolute left-[20px] right-[20px] md:left-[60px] md:right-[60px] bottom-[6px] h-[1px] bg-[#ffffff20]" />
        <div className="absolute left-[16px] right-[16px] md:left-[60px] md:right-[60px] bottom-[6px] h-[1px] overflow-hidden">
          {/* <div className="w-full h-[2px] bg-[#ffffff20]">
            <div
              ref={progressBarRef}
              className="h-full bg-white"
              style={{ width: "0%" }}
            />
            </div> */}

          <div className="h-[1px] bg-[#ffffff20] relative overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-white"
              style={{ width: "0%" }}
            />
          </div>
        </div>







      </header>




      {/* <div className={`fixed top-0 right-0 h-full w-[80%] bg-black z-40 transition-transform duration-500 min-[809px]:hidden
  ${open ? "translate-x-0" : "translate-x-full"}
`}>

        <div className="flex justify-between items-center p-6">

          <span className="text-white text-xl">Mohit Sharma</span>

        </div>

        <div className="flex flex-col items-end pr-10 gap-8 text-4xl text-[#ffffff90] mt-20">

          {items.map((it) => {

            const path = it === "Projects" ? "/" : `/${it.toLowerCase()}`;

            return (
              <Link
                key={it}
                href={path}
                onClick={() => setOpen(false)}
              >
                {it}
              </Link>
            )
          })}

        </div>

      </div> */}

      {/* Mobile Sidebar - Full Page */}
      {/* <div className={`fixed inset-0 bg-black z-40 flex flex-col justify-between transition-transform duration-500 min-[809px]:hidden
  ${open ? "translate-x-0" : "translate-x-full"}
`}> */}
    
<div
  className={`fixed top-0 right-0 h-full w-[85%] bg-[#0b0b0b]
  z-[60] transition-transform duration-500 min-[809px]:hidden
  flex flex-col justify-between
  ${open ? "translate-x-0" : "translate-x-full"}
`}
>

        {/* Top: Close button (left side) */}
        <div>
          {/* <div className="flex items-center p-6">
            
          </div> */}

          {/* Nav Links */}
          {/* <div className="flex flex-col gap-7 mt-10 px-8"> */}
          <div className="flex flex-col gap-6 mt-50 px-16">
            {items.map((it) => {
              const path = it === "Projects" ? "/" : `/${it.toLowerCase()}`;
              return (
                <Link
                  key={it}
                  href={path}
                  onClick={() => setOpen(false)}
                  className="text-3xl hover:text-white transition"
                >
                  {it}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom: Social Links */}
        {/* <div className="flex items-center justify-center gap-6 px-8 py-6 border-t border-[#222]"> */}

         <div className="flex items-center justify-center gap-6 px-8 py-6 border-t border-white/10">

          {/* Gmail */}
          <a href="mailto:you@gmail.com" className="text-white opacity-60 hover:opacity-100 transition">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="text-white opacity-60 hover:opacity-100 transition">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* GitHub */}
          <a href="#" className="text-white opacity-60 hover:opacity-100 transition">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* X / Twitter */}
          <a href="#" className="text-white opacity-60 hover:opacity-100 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

        </div>
        
      </div>
      {open && (
              <button
                onClick={() => setOpen(false)}
               className="fixed top-5 left-2.5 z-[70] w-10 h-10 flex items-center justify-center 
               bg-white text-black rounded-full 
               shadow-lg hover:scale-105 active:scale-95 transition"
              >
                ✕
              </button>
            )}

    </>
  )
}

