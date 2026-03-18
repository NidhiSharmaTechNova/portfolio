"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// import img1 from "@/assets/UyHDhzBDZAHkZ1TB8W4GIvByAdg.avif";
// import img2 from "@/assets/SzbAMeOcil2a6pOPPU2HhMTAvI.avif";
// import img3 from "@/assets/LreUjZXyJtlHT57BKWERZ4S0b8.png";
// import img4 from "@/assets/LHoHCFH6t06AUW34ncr65e44c4.png";

// const images = [img1.src, img2.src, img3.src, img4.src];

const images = [
  "/images/img1.avif",
  "/images/img2.avif",
  "/images/img3.png",
  "/images/img4.png",
];

export default function ImageTrail() {
  const container = useRef<HTMLDivElement | null>(null);
  const last = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const imgIndex = useRef(0);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      )
        return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const now = Date.now();
      const dx = x - last.current.x;
      const dy = y - last.current.y;
      const dist = Math.hypot(dx, dy);
      const dt = now - lastTime.current || 1;
      const speed = dist / dt;

      const threshold = gsap.utils.clamp(25, 180, 260 / (speed + 0.4));
      const MIN_DELAY = 80;

      if (dist > threshold && now - lastTime.current > MIN_DELAY) {
        spawn(x, y);
        last.current = { x, y };
        lastTime.current = now;
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const spawn = (x: number, y: number) => {
    const containerEl = container.current;
    if (!containerEl) return;

    const rect = containerEl.getBoundingClientRect();

    // responsive image size
    const size = Math.min(rect.width * 0.12, 180);

    const el = document.createElement("img");
    // el.src = images[imgIndex.current];
    el.src = `${window.location.origin}${images[imgIndex.current]}`;
    imgIndex.current = (imgIndex.current + 1) % images.length;

    containerEl.appendChild(el);

    const tl = gsap.timeline({ onComplete: () => el.remove() });

    tl.set(el, {
      position: "absolute",
      left: 0,
      top: 0,
      width: size,
      height: size,
      objectFit: "cover",
      x: x - size / 2,
      y: y - size / 2,
      scale: 0.35,
      opacity: 0,
      pointerEvents: "none",
      zIndex: 10,
    });

    tl.to(el, {
      opacity: 1,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });

    tl.to(el, {
      scale: 0.25,
      opacity: 0,
      duration: 0.45,
      ease: "power2.in",
    });
  };

  return (
    <div className="w-full flex justify-center bg-black">
      <div className="w-[93%]">

        <div ref={container} className="relative w-full h-screen overflow-hidden flex items-center justify-center"
        >
          <h1 className="absolute text-white font-medium pointer-events-none select-none whitespace-nowrap"
            style={{
              fontSize: "clamp(60px,8vw,120px)",
              letterSpacing: "-2px",
            }}
          >
            Hello!
          </h1>
        </div>

      </div>
    </div>
  );
}


// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// // ✅ Simple public folder images
// const images = [
//   "/images/img1.png",
//   "/images/img2.png",
//   "/images/img3.png",
//   "/images/img4.png",
// ];

// export default function ImageTrail() {
//   // ✅ Non-null assertion to fix TS ref error
//   const containerRef = useRef<HTMLDivElement>(null);
//   const lastPos = useRef({ x: 0, y: 0 });
//   const lastTime = useRef(Date.now());
//   const imgIndex = useRef(0);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const onMouseMove = (e: MouseEvent) => {
//       const rect = container.getBoundingClientRect();

//       if (
//         e.clientX < rect.left ||
//         e.clientX > rect.right ||
//         e.clientY < rect.top ||
//         e.clientY > rect.bottom
//       )
//         return;

//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const now = Date.now();
//       const dx = x - lastPos.current.x;
//       const dy = y - lastPos.current.y;
//       const dist = Math.hypot(dx, dy);
//       const dt = now - lastTime.current || 1;
//       const speed = dist / dt;

//       const threshold = gsap.utils.clamp(25, 180, 260 / (speed + 0.4));
//       const MIN_DELAY = 80;

//       if (dist > threshold && now - lastTime.current > MIN_DELAY) {
//         spawnImage(x, y);
//         lastPos.current = { x, y };
//         lastTime.current = now;
//       }
//     };

//     window.addEventListener("mousemove", onMouseMove);
//     return () => window.removeEventListener("mousemove", onMouseMove);
//   }, []);

//   const spawnImage = (x: number, y: number) => {
//     const container = containerRef.current;
//     if (!container) return;

//     const size = Math.min(container.offsetWidth * 0.12, 180);

//     // ✅ Create image element safely
//     const imgEl = document.createElement("img");
//     imgEl.src = images[imgIndex.current];
//     imgIndex.current = (imgIndex.current + 1) % images.length;

//     // style it immediately
//     imgEl.style.position = "absolute";
//     imgEl.style.left = "0px";
//     imgEl.style.top = "0px";
//     imgEl.style.width = `${size}px`;
//     imgEl.style.height = `${size}px`;
//     imgEl.style.objectFit = "cover";
//     imgEl.style.pointerEvents = "none";
//     imgEl.style.zIndex = "10";

//     container.appendChild(imgEl);

//     const tl = gsap.timeline({
//       onComplete: () => imgEl.remove(),
//     });

//     tl.set(imgEl, {
//       x: x - size / 2,
//       y: y - size / 2,
//       scale: 0.35,
//       opacity: 0,
//     })
//       .to(imgEl, {
//         scale: 1.1,
//         opacity: 1,
//         duration: 0.3,
//         ease: "power2.out",
//       })
//       .to(imgEl, {
//         scale: 0.25,
//         opacity: 0,
//         duration: 0.45,
//         ease: "power2.in",
//       });
//   };

//   return (
//     <div className="w-full flex justify-center bg-black">
//       <div className="w-[93%]">
//         <div
//           ref={containerRef}
//           className="relative w-full h-screen overflow-hidden flex items-center justify-center"
//         >
//           <h1
//             className="absolute text-white font-medium pointer-events-none select-none whitespace-nowrap"
//             style={{
//               fontSize: "clamp(60px,8vw,120px)",
//               letterSpacing: "-2px",
//             }}
//           >
//             Hello!
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }