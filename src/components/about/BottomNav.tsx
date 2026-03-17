// "use client";

// import { useEffect, useState, useRef } from "react";
// import { useRouter, usePathname } from "next/navigation";

// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";

// const HomeIcon = () => (
//   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
//     <path d="M3 10.5L12 3L21 10.5V21H14V14H10V21H3V10.5Z"
//       stroke="currentColor" strokeWidth="1.6" />
//   </svg>
// );

// const ProjectIcon = () => (
//   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
//     <path d="M12 2L3 7L12 12L21 7L12 2Z"
//       stroke="currentColor" strokeWidth="1.6"/>
//     <path d="M3 7V17L12 22V12"
//       stroke="currentColor" strokeWidth="1.6"/>
//     <path d="M21 7V17L12 22"
//       stroke="currentColor" strokeWidth="1.6"/>
//   </svg>
// );

// const tabs = [
//   { id: "home", label: "Home", path: "/", icon: <HomeIcon /> },
//   { id: "projects", label: "Project", path: "/projects", icon: <ProjectIcon /> },
// ];

// export default function BottomNav() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const [dark, setDark] = useState(false);
//   const [tooltipId, setTooltipId] = useState("");
//   const hoverTimer = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     const isDark = saved === "dark";
//     setDark(isDark);
//     document.documentElement.classList.toggle("dark", isDark);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", dark);
//     localStorage.setItem("theme", dark ? "dark" : "light");
//   }, [dark]);

//   const handleMouseEnter = (id: string) => {
//     if (hoverTimer.current) clearTimeout(hoverTimer.current);
//     hoverTimer.current = setTimeout(() => {
//       setTooltipId(id);
//     }, 1000);
//   };

//   const handleMouseLeave = () => {
//     if (hoverTimer.current) clearTimeout(hoverTimer.current);
//     setTooltipId("");
//   };

//   const handleClick = (path: string) => {
//     setTooltipId("");
//     router.push(path);
//   };

//   return (
//     <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50
//       flex gap-1 p-2 rounded-xl border
//       bg-white border-gray-200
//       dark:bg-[#121417] dark:border-[#27282a]">

//       {tabs.map((tab) => {
//         const active =
//           pathname === tab.path ||
//           (pathname.startsWith(tab.path) && tab.path !== "/");

//         return (
//           <div key={tab.id} className="relative">
//             <button
//               onClick={() => handleClick(tab.path)}
//               onMouseEnter={() => handleMouseEnter(tab.id)}
//               onMouseLeave={handleMouseLeave}
//               className={`flex items-center gap-2 h-11 rounded-full
//               px-3 transition-all duration-300
//               ${active
//                 ? "bg-gray-200 dark:bg-[#2a2b2d]"
//                 : "hover:bg-gray-200 dark:hover:bg-[#2a2b2d]"
//               }`}
//             >
//               <span className="text-black dark:text-white">
//                 {tab.icon}
//               </span>

//               <span className={`text-sm font-medium whitespace-nowrap
//                 transition-all duration-300
//                 ${active
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 -translate-x-2 w-0 overflow-hidden"
//                 }
//                 text-black dark:text-white`}
//               >
//                 {tab.label}
//               </span>
//             </button>

//             {/* Tooltip */}
//             <span
//               className={`absolute bottom-[120%] left-1/2 -translate-x-1/2
//               px-3 py-1 text-sm rounded-md shadow-lg
//               bg-white text-black border border-gray-200
//               dark:bg-[#121417] dark:text-white dark:border-[#27282a]
//               transition-all duration-200
//               ${tooltipId === tab.id
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-2 pointer-events-none"
//               }`}
//             >
//               {tab.label}
//             </span>
//           </div>
//         );
//       })}

//       <div className="w-px h-8 bg-gray-300 dark:bg-gray-700 mx-2 mt-1" />

//       {/* Dark Mode Button */}
//       <button
//         onClick={() => setDark(!dark)}
//         className="h-11 w-11 flex items-center justify-center
//         rounded-full text-black dark:text-white
//         hover:bg-gray-200 dark:hover:bg-[#2a2b2d]"
//       >
//         {dark ? <LightModeIcon /> : <DarkModeIcon />}
//       </button>

//       {/* Volume */}
//       <button
//         className="h-11 w-11 flex items-center justify-center
//         rounded-full text-black dark:text-white
//         hover:bg-gray-200 dark:hover:bg-[#2a2b2d]"
//       >
//         <VolumeUpIcon />
//       </button>
//     </div>
//   );
// }


"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

/* ---------------- SVG Icons (EXACT SAME STYLE) ---------------- */

const SvgWrapper = ({ children }: any) => (
  <svg
    className="w-[20px] h-[20px]"
    viewBox="0 0 24 24"
    fill="none"
  >
    {children}
  </svg>
);

const HomeIcon = () => (
  <SvgWrapper>
    <path d="M3 10.5L12 3L21 10.5V21H14V14H10V21H3V10.5Z" />
  </SvgWrapper>
);

const ProjectIcon = () => (
  <SvgWrapper>
    <path d="M12 2L3 7L12 12L21 7L12 2Z" />
    <path d="M3 7V17L12 22V12" />
    <path d="M21 7V17L12 22" />
  </SvgWrapper>
);

/* ---------------- Tabs ---------------- */

const tabs = [
  { id: "home", label: "Home", path: "/", icon: <HomeIcon /> },
  { id: "projects", label: "Project", path: "/projects", icon: <ProjectIcon /> },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const [dark, setDark] = useState(false);
  const [tooltipId, setTooltipId] = useState("");
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  /* -------- Theme EXACT SAME AS YOUR CSS -------- */

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDark(isDark);
    document.body.classList.toggle("dark-theme", isDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const handleMouseEnter = (id: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setTooltipId(id);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setTooltipId("");
  };

  return (
    <div
      className="fixed bottom-[18px] left-1/2 -translate-x-1/2 flex gap-[5px] p-[5px] rounded-[14px] bg-white border border-[#e4e5e7] z-[9999] overflow-visible dark-theme:bg-[#121417] ">
      {tabs.map((tab) => {
        const active =
          pathname === tab.path ||
          (pathname.startsWith(tab.path) && tab.path !== "/");

        return (
          <div key={tab.id} className="relative inline-block">
            <button
              onClick={() => router.push(tab.path)}
              onMouseEnter={() => handleMouseEnter(tab.id)}
              onMouseLeave={handleMouseLeave}
              className={`relative h-[46px] max-w-[46px] px-[10px] flex items-center gap-[6px]
    rounded-[23px] text-[#111] transition-[max-width,background] duration-[420ms] ease-[cubic-bezier(.22,.9,.35,1)] ${active
                  ? "max-w-[140px] bg-[#e9eaec] rounded-[15px]"  // 🔥 thoda extra width
                  : "hover:bg-[#e9eaec] hover:rounded-[15px]"
                }
  `}
            >
              {/* SVG Styling EXACT LIKE CSS */}
              <span
                className={`
                [&_path]:stroke-current
                [&_path]:stroke-[1.6]
                [&_path]:fill-none
                transition-all
                ${active
                    ? "[&_path]:fill-current [&_path]:stroke-current [&_path]:stroke-[1.4]"
                    : ""
                  }
                `}
              >
                {tab.icon}
              </span>

              {/* Label EXACT -6px slide */}
              <span
                className={`
    text-[14px] font-medium whitespace-nowrap
    transition-all duration-[250ms]
    ${active
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-[6px]"
                  }
  `}
              >
                {tab.label}
              </span>
            </button>

            {/* Tooltip EXACT SAME */}
            <span
              className={`
                absolute bottom-[120%] left-1/2
                -translate-x-1/2
                translate-y-[6px]
                px-[14px] py-[8px]
                text-[14px]
                rounded-[0.5em]
                bg-white text-[#111]
                shadow-[0_10px_24px_rgba(0,0,0,0.18)]
                transition-all duration-200
                ${tooltipId === tab.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 pointer-events-none"
                }
              `}
            >
              {tab.label}
            </span>
          </div>
        );
      })}

      {/* Divider EXACT */}
      <div className="w-[1px] h-[35px] bg-[#ddd] mx-[6px] mt-[6px]" />

      {/* Dark Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="h-[46px] w-[46px] rounded-full text-[#111]"
      >
        {dark ? <LightModeIcon /> : <DarkModeIcon />}
      </button>

      <button className="h-[46px] w-[46px] rounded-full text-[#111]">
        <VolumeUpIcon />
      </button>
    </div>
  );
}