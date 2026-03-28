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



            <span className="relative w-[50px] h-[27px] block">

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

            </span>

            {/* Hamburger */}
            <div className="flex flex-col gap-[6px] ">

              <span className={`w-6 h-[2px] bg-white transition ${open ? "rotate-45 translate-y-[4px]" : ""}`} />

              <span className={`w-6 h-[2px] bg-white transition ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />

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




      {/* <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 min-[809px]:hidden
      ${open ? "translate-y-0" : "-translate-y-full"}
    `}> */}
    <div className={`fixed top-0 right-0 h-full w-[80%] bg-black z-40 transition-transform duration-500 min-[809px]:hidden
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

      </div>


    </>
  )
}

