// "use client";

// import { useEffect } from "react";

// export default function Hero() {
//   useEffect(() => {
//     const dots = Array.from(document.querySelectorAll(".dot")) as HTMLElement[];

//     let mouse = { x: 0, y: 0 };
//     let smoothMouse = { x: 0, y: 0 };

//     let raf: number | null = null;

//     const SMOOTH = 0.15; 

//     function update() {
//       raf = null;


//       smoothMouse.x += (mouse.x - smoothMouse.x) * SMOOTH;
//       smoothMouse.y += (mouse.y - smoothMouse.y) * SMOOTH;

//       for (const dot of dots) {
//         const r = dot.getBoundingClientRect();

//         const dx = smoothMouse.x - (r.left + r.width * 0.5);
//         const dy = smoothMouse.y - (r.top + r.height * 0.5);

//         const d = dx * dx + dy * dy;

//         const influence = Math.max(0, 1 - d / 180000); 


//         const scale =
//   1 +
//   influence * 1.2 +
//   influence * influence * 0.8;

//         dot.style.transform = `scale(${scale})`;
//       }

//       raf = requestAnimationFrame(update);
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;

//       if (!raf) raf = requestAnimationFrame(update);
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     raf = requestAnimationFrame(update);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       if (raf) cancelAnimationFrame(raf);
//     };
//   }, []);

//   return (


//     <div className="w-full max-w-[1400px] mx-auto h-[calc(100vh-70px)] flex flex-col pl-[15px] pr-[5px] pt-[15px] mt-[70px] bg-black">
//       {/* <div
//         id="dotGrid"
//         className="flex flex-wrap w-full gap-[18px] sm:gap-[24px] md:gap-[28px] lg:gap-[31px] h-[85%] px-[15px]"
//       > */}
//       <div
//   id="dotGrid"
//   className="flex flex-wrap w-screen gap-[18px] sm:gap-[24px] md:gap-[28px] lg:gap-[31px] h-[85%] px-[15px]"
// >
//         {Array.from({ length: 1000 }).map((_, i) => (
//           <span
//   key={i}
//   className="dot w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] md:w-[3px] md:h-[3px] lg:w-[4px] lg:h-[4px] bg-white will-change-transform
// "
// />
//         ))}
//       </div>

//       <h1 className=" absolute bottom-0 left-0 w-full bg-black font-bold text-[80px] max-[660px]:text-[70px] max-[780px]:text-[120px] min-[820px]:text-[140px] min-[1000px]:text-[170px] min-[1200px]:text-[160px] leading-[1] px-6 " > MOHIT SHARMA </h1>


//     </div>

//   );
// }


"use client";

import { useEffect, useRef, useCallback, useState } from "react";

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLElement[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const isMountedRef = useRef(true);

  const GAP = 27; // px — spacing between dot centers
  const [dotSize, setDotSize] = useState(5); // default dot size

  // Update DOT_SIZE based on window width
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDotSize = () => {
        setDotSize(window.innerWidth < 640 ? 3 : 5);
      };

      updateDotSize(); // initial check
      window.addEventListener("resize", updateDotSize);
      return () => window.removeEventListener("resize", updateDotSize);
    }
  }, []);

  const buildGrid = useCallback(() => {
    const container = gridRef.current;
    if (!container) return;

    const W = container.offsetWidth;
    const H = container.offsetHeight;

    const cols = Math.floor(W / GAP);
    const rows = Math.floor(H / GAP);
    const total = cols * rows;

    // Clear old dots
    container.innerHTML = "";
    dotsRef.current = [];

    // Grid CSS
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${cols}, ${GAP}px)`;
    container.style.gridTemplateRows = `repeat(${rows}, ${GAP}px)`;
    container.style.gap = "0";

    const frag = document.createDocumentFragment();
    for (let i = 0; i < total; i++) {
      const span = document.createElement("span");
      span.className = "dot";
      span.style.cssText = `
        display:block;
        width:${dotSize}px;
        height:${dotSize}px;
        background:white;
        will-change:transform;
        place-self:center;
      `;
      frag.appendChild(span);
      dotsRef.current.push(span);
    }
    container.appendChild(frag);
  }, [dotSize]);

  useEffect(() => {
    isMountedRef.current = true;
    buildGrid();

    const SMOOTH = 0.15;

    function update() {
      if (!isMountedRef.current) return;
      rafRef.current = null;

      smoothMouseRef.current.x +=
        (mouseRef.current.x - smoothMouseRef.current.x) * SMOOTH;
      smoothMouseRef.current.y +=
        (mouseRef.current.y - smoothMouseRef.current.y) * SMOOTH;

      const smx = smoothMouseRef.current.x;
      const smy = smoothMouseRef.current.y;
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

      for (const dot of dotsRef.current) {
        const r = dot.getBoundingClientRect();
        const dx = smx - (r.left + r.width * 0.5);
        const dy = smy - (r.top + r.height * 0.5);
        const d = dx * dx + dy * dy;
        const influence = Math.max(0, 1 - d / (isMobile ? 30000 : 60000));
        const scale = isMobile
          ? 1 + influence * 1.2
          : 1 + influence * 0.8 + influence * influence * 0.8;
        dot.style.transform = `scale(${scale})`;
      }

      rafRef.current = requestAnimationFrame(update);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      mouseRef.current.x = t.clientX;
      mouseRef.current.y = t.clientY;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };

    const handleResize = () => {
      buildGrid();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", handleResize);
    rafRef.current = requestAnimationFrame(update);

    return () => {
      isMountedRef.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [buildGrid]);

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-black overflow-hidden px-4 sm:px-8 lg:px-13">
      {/* Dot grid */}
      <div
        ref={gridRef}
        className="w-full"
        style={{ height: "calc(100vh - clamp(70px, 12vw, 160px))" }}
      />

      {/* Big name at the bottom */}
      <h1
        className="absolute bottom-0 left-0 w-full bg-black font-bold leading-none px-4 sm:px-8 lg:px-12"
        style={{ fontSize: "clamp(52px, 10vw, 150px)" }}
      >
        MOHIT SHARMA
      </h1>
    </div>
  );
}

// "use client";

// import { useEffect, useRef, useCallback } from "react";

// export default function Hero() {
//   const gridRef = useRef<HTMLDivElement>(null);
//   const dotsRef = useRef<HTMLElement[]>([]);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const smoothMouseRef = useRef({ x: 0, y: 0 });
//   const rafRef = useRef<number | null>(null);
//   const isMountedRef = useRef(true);

//   const DOT_SIZE = window.innerWidth < 640 ? 3 : 5;       // px — visual dot size
//   const GAP = 27;           // px — spacing between dot centers

//   const buildGrid = useCallback(() => {
//     const container = gridRef.current;
//     if (!container) return;

//     const W = container.offsetWidth;
//     const H = container.offsetHeight;

//     // How many columns & rows fit?
//     const cols = Math.floor(W / GAP);
//     const rows = Math.floor(H / GAP);
//     const total = cols * rows;

//     // Clear old dots
//     container.innerHTML = "";
//     dotsRef.current = [];

//     // Set grid CSS so dots land on exact positions
//     container.style.display = "grid";
//     container.style.gridTemplateColumns = `repeat(${cols}, ${GAP}px)`;
//     container.style.gridTemplateRows = `repeat(${rows}, ${GAP}px)`;
//     container.style.gap = "0";

//     const frag = document.createDocumentFragment();
//     for (let i = 0; i < total; i++) {
//       const span = document.createElement("span");
//       span.className = "dot";
//       // span.style.cssText = `
//       //   display:block;
//       //   width:${DOT_SIZE}px;
//       //   height:${DOT_SIZE}px;
//       //   background:white;
//       //   will-change:transform;
//       //   place-self:center;
//       // `;
//       span.style.cssText = `
//   display:block;
//   width:${DOT_SIZE}px;
//   height:${DOT_SIZE}px;
//   background:white;
//   will-change:transform;
//   place-self:center;
// `;
//       frag.appendChild(span);
//       dotsRef.current.push(span);
//     }
//     container.appendChild(frag);
//   }, []);

//   useEffect(() => {
//     isMountedRef.current = true;
//     buildGrid();

//     const SMOOTH = 0.15;

//     function update() {
//       if (!isMountedRef.current) return;
//       rafRef.current = null;

//       smoothMouseRef.current.x +=
//         (mouseRef.current.x - smoothMouseRef.current.x) * SMOOTH;
//       smoothMouseRef.current.y +=
//         (mouseRef.current.y - smoothMouseRef.current.y) * SMOOTH;

//       const smx = smoothMouseRef.current.x;
//       const smy = smoothMouseRef.current.y;
//       const isMobile = window.innerWidth < 640;

//       for (const dot of dotsRef.current) {
//         const r = dot.getBoundingClientRect();
//         const dx = smx - (r.left + r.width * 0.5);
//         const dy = smy - (r.top + r.height * 0.5);
//         const d = dx * dx + dy * dy;
//         const influence = Math.max(0, 1 - d / (isMobile ? 30000 : 60000));
//         const scale = isMobile
//           ? 1 + influence * 0.9   // thoda bada hover effect
//           : 1 + influence * 1.2 + influence * influence * 1.2;
//         dot.style.transform = `scale(${scale})`;
//       }

//       rafRef.current = requestAnimationFrame(update);
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       mouseRef.current.x = e.clientX;
//       mouseRef.current.y = e.clientY;
//       if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
//     };

//     const handleTouchMove = (e: TouchEvent) => {
//       const t = e.touches[0];
//       mouseRef.current.x = t.clientX;
//       mouseRef.current.y = t.clientY;
//       if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
//     };

//     const handleResize = () => {
//       buildGrid();
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("touchmove", handleTouchMove, { passive: true });
//     window.addEventListener("resize", handleResize);
//     rafRef.current = requestAnimationFrame(update);

//     return () => {
//       isMountedRef.current = false;
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("resize", handleResize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [buildGrid]);

//   return (
//     <div className="relative w-full min-h-screen flex flex-col bg-black overflow-hidden px-4 sm:px-8 lg:px-13">
//       {/* Dot grid — fills full area above the h1 */}
//       <div
//         ref={gridRef}
//         className="w-full"
//         style={{ height: "calc(100vh - clamp(70px, 12vw, 160px))" }}
//       />

//       {/* Big name at the bottom */}
//       <h1
//         className="absolute bottom-0 left-0 w-full bg-black font-bold leading-none px-4 sm:px-8 lg:px-12"
//         style={{ fontSize: "clamp(52px, 10vw, 150px)" }}
//       >
//         MOHIT SHARMA
//       </h1>
//     </div>
//   );
// }
// "use client";

// import { useEffect } from "react";

// export default function Hero() {
//   useEffect(() => {
//     const dots = Array.from(document.querySelectorAll(".dot")) as HTMLElement[];

//     let mouse = { x: 0, y: 0 };
//     let smoothMouse = { x: 0, y: 0 };
//     let raf: number | null = null;

//     const SMOOTH = 0.15;

//     function update() {
//       raf = null;

//       smoothMouse.x += (mouse.x - smoothMouse.x) * SMOOTH;
//       smoothMouse.y += (mouse.y - smoothMouse.y) * SMOOTH;


//       const isMobile = window.innerWidth < 640;

//       for (const dot of dots) {
//         const r = dot.getBoundingClientRect();

//         const dx = smoothMouse.x - (r.left + r.width * 0.5);
//         const dy = smoothMouse.y - (r.top + r.height * 0.5);

//         const d = dx * dx + dy * dy;

//         const influence = Math.max(0, 1 - d / 180000);

//         const scale = isMobile
//           ? 1 + influence * 0.5
//           : 1 + influence * 1.2 + influence * influence * 1.2;

//         dot.style.transform = `scale(${scale})`;
//       }

//       raf = requestAnimationFrame(update);
//     }


//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;

//       if (!raf) raf = requestAnimationFrame(update);
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     raf = requestAnimationFrame(update);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       if (raf) cancelAnimationFrame(raf);
//     };
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen flex flex-col px-4 sm:px-6 lg:px-10 pt-6 bg-black overflow-hidden">


//       <div
//         id="dotGrid"
//         className="flex flex-wrap w-full gap-4 sm:gap-6 md:gap-8 h-[70vh] sm:h-[75vh] lg:h-[80vh]"
//       >



//         {Array.from({ length: 800 }).map((_, i) => (  
//           <span
//             key={i}
//             className="dot w-[2px] h-[2px] sm:w-[3px] sm:h-[3px] md:w-[5px] md:h-[5px] bg-white will-change-transform"
//           />
//         ))}
//       </div>



//       <h1 className="absolute bottom-0 left-0 w-full bg-black font-bold text-[70px] min-[660px:text-[90px] min-[820px]:text-[110px] min-[1000px]:text-[120px] min-[1200px]:text-[140px] leading-[1] px-6">
//         MOHIT SHARMA
//       </h1>

//     </div>
//   );
// }



// for (const dot of dots) {
//   const r = dot.getBoundingClientRect();

//   const dx = smoothMouse.x - (r.left + r.width * 0.5);
//   const dy = smoothMouse.y - (r.top + r.height * 0.5);

//   const d = dx * dx + dy * dy;

//   const influence = Math.max(0, 1 - d / 180000);

//   // const scale = 1 + influence * 2.8 + influence * influence * 2.8;
//   const scale = 1 + influence * 1.2 + influence * influence * 1.2;

//   dot.style.transform = `scale(${scale})`;
// }

{/* Name */ }
{/* <h1 className="
      absolute bottom-0 left-0 w-full bg-black
      font-[700]
      text-[60px] leading-[60px]
      sm:text-[90px] sm:leading-[80px]
      md:text-[90px] md:leading-[100px]
      lg:text-[190px] lg:leading-[190px]
      px-10

      "> */}
{/* <h1 className=" absolute bottom-0 left-0 w-full bg-black font-bold text-[80px] max-[660px]:text-[70px] max-[780px]:text-[120px] min-[820px]:text-[140px] min-[1000px]:text-[120px] min-[1200px]:text-[140px] leading-[1] px-6 " > MOHIT SHARMA </h1> */ }