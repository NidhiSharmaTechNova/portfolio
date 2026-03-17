// "use client";

// import { useEffect, useRef, useState } from "react";

// interface CDSleevePlayerProps {
//   cover: string;
//   title: string;
// }

// export default function CDSleevePlayer({ cover, title }: CDSleevePlayerProps) {
//   const [open, setOpen] = useState(false);
//   const discRef = useRef<HTMLDivElement | null>(null);
//   const spinRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!open || !spinRef.current) return;

//     let rot = 0;
//     let raf: number;

//     const spin = () => {
//       rot += 0.35;
//       spinRef.current!.style.transform = `rotate(${rot}deg)`;
//       raf = requestAnimationFrame(spin);
//     };

//     spin();
//     return () => cancelAnimationFrame(raf);
//   }, [open]);

//   return (
//     <div className="relative w-[300px] h-[300px] group">
//       {/* DISC (behind) */}
//       <div
//         ref={discRef}
//         className={`absolute left-[120px] top-[120px] transition-transform duration-700
//         ${open ? "translate-x-[160px]" : "translate-x-0"}`}
//         style={{ width: 240, height: 240 }}
//       >
//         <div ref={spinRef} className="w-full h-full rounded-full vinyl-disc">
//           <div className="absolute inset-[35%] rounded-full overflow-hidden">
//             <img src={cover.src} className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </div>

//       {/* COVER */}
//       <button
//         onClick={() => setOpen((v) => !v)}
//         className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(.3,.8,.2,1)]
//         ${open ? "-rotate-12 translate-x-[-50px]" : ""}`}
//       >
//         <img src={cover.src} className="w-full h-full object-cover" />
//       </button>

//       {/* TITLE */}
//       <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-black/70 text-white px-5 py-1.5 rounded-full backdrop-blur opacity-0 group-hover:opacity-100 transition">
//         {title}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { StaticImageData } from "next/image";

// interface AlbumPlayerProps {
//   albumImg: string | StaticImageData;
//   vinylImg: string | StaticImageData;
// }

// export default function AlbumPlayer({
//   albumImg,
//   vinylImg,
// }: AlbumPlayerProps) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       onClick={() => setOpen(!open)}
//       className="relative w-[192px] h-[192px] cursor-pointer"
//     >
//       {/* 🎵 Vinyl */}
//       <div
//         className={`absolute top-0 left-0 w-[192px] h-[192px] rounded-full 
//         bg-[radial-gradient(circle,_#0b0b0b_35%,_#000_70%)]
//         z-[1] animate-spin-slow transition-transform duration-500 ease-in-out
//         ${open ? "-translate-x-[65px]" : ""}`}
//       >
//         {/* Inner circle border */}
//         <div className="absolute inset-[18px] rounded-full border border-white/10" />

//         {/* Label */}
//         <div className="absolute top-1/2 left-1/2 w-[70px] h-[70px] 
//         -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden 
//         shadow-[0_0_0_3px_#111] border-2 border-red-500">
//           <Image
//             src={vinylImg}
//             alt="vinyl"
//             fill
//             className="object-cover rounded-full"
//           />
//         </div>
//       </div>

//       {/* 💿 Album Cover */}
//       <div
//         className={`absolute w-[192px] h-[192px] rounded-[12px] 
//         overflow-hidden z-[2] transition-transform duration-500 ease-in-out
//         ${open ? "translate-x-[90px]" : ""}`}
//       >
//         <Image
//           src={albumImg}
//           alt="album"
//           fill
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";

export default function AlbumPlayer({
  albumImg,
  vinylImg,
}: {
  albumImg: any;
  vinylImg: any;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative w-[192px] h-[192px] cursor-pointer"
    >
      {/* VINYL */}
      <div
        className={`absolute w-[192px] h-[192px] rounded-full bg-[radial-gradient(#0b0b0b_35%,#000_70%)] left-0 top-0 z-[1] transition-transform duration-500
          ${open ? "-translate-x-[65px]" : ""}
        `}
      >
        {/* spinning wrapper */}
        <div className="absolute inset-0 animate-spin-slow">
          <Image
            src={vinylImg}
            alt="vinyl"
            className="absolute w-[70px] h-[70px] rounded-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_3px_#111] border-2 border-red-500"
          />
        </div>
      </div>

      {/* ALBUM COVER */}
      <div
        className={`absolute w-[192px] h-[192px] rounded-[12px] overflow-hidden z-[2] transition-transform duration-500 ${open ? "translate-x-[90px]" : ""}
        `}
      >
        <Image
          src={albumImg}
          alt="album"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}