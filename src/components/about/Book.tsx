// "use client";

// import { useState } from "react";

// interface OpeningBookProps {
//   title: string;
//   cover: string;
// }

// export default function OpeningBook({ title, cover }: OpeningBookProps) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className="relative w-[210px] h-[280px] book-perspective"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       {/* Book Body */}
//       <div className="absolute inset-0 book-shell">

//         {/* Pages */}
//         <div className="absolute right-0 top-1 bottom-1 w-[14px] book-pages" />

//         {/* Cover */}
//         <div
//           className={`absolute inset-0 rounded-xl overflow-hidden book-cover transition-transform duration-700 ease-[cubic-bezier(.3,.9,.2,1)]
//             ${open ? "book-open" : ""}`}
//         >
//           <img src={cover.src} className="w-full h-full object-cover" />
//         </div>
//       </div>

//       {/* Floating Title */}
//       <div
//         className={`absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded-full text-sm backdrop-blur transition-all duration-500
//         ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
//       >
//         {title}
//       </div>
//     </div>
//   );
// }




// "use client";

// import Image from "next/image";
// import bookImg from "@/assets/the_making_of_prince_of_persia (15).webp";

// type BookProps = {
//   cover?: any;
//   title?: string;
//   backColor?: string;
//   pageColor?: string;
// };

// export default function Book({
//   cover,
//   title = "The Making of Prince of Persia",
//   backColor = "#0b4cff",
//   pageColor = "#ffffff",
// }: BookProps) {
//   const finalCover = cover || bookImg;

//   return (
//     <div className="flex flex-col items-center w-[30px] group">
//       {/* ================= BOOK 3D ================= */}
//       <div
//         tabIndex={0}
//         className="
//           relative
//           w-[135px]
//           h-[200px]
//           cursor-pointer
//           [transform-style:preserve-3d]
//           [transform-origin:left_center]
//           [perspective:1000px]
//           transition-transform
//           duration-300
//           ease-out
//           group-hover:rotate-y-[-20deg]
//           group-hover:scale-[1.03]
//           group-hover:-translate-x-[2px]
//           focus:rotate-y-[-20deg]
//         "

//       >
//         {/* BACK PAGE */}
//         <div
//           className="
//             absolute
//             inset-0
//             rounded-[6px]
//             opacity-0
//             transition-all
//             duration-300
//             ease-out
//             group-hover:translate-x-[16px]
//             group-hover:opacity-100
//           "
//           style={{ background: backColor }}
//         />

//         {/* WHITE PAGE */}
//         <div
//           className="
//             absolute
//             right-0
//             top-[6px]
//             h-[calc(100%-12px)]
//             w-full
//             rounded-[6px]
//             opacity-0
//             transition-all
//             duration-300
//             ease-out
//             group-hover:translate-x-[10px]
//             group-hover:opacity-100
//           "
//           style={{ background: pageColor }}
//         />

//         {/* COVER */}
//         <div
//           className="
//             relative
//             z-[2]
//             w-full
//             h-full
//             overflow-hidden
//             rounded-r-[6px]
//             shadow-[0_18px_35px_rgba(0,0,0,0.18)]
//           "
//         >
//           <Image
//             src={finalCover}
//             alt={title}
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>

//       {/* ================= TITLE ================= */}
//       <div
//         className="
//           mt-4
//           px-5
//           py-2
//           bg-white
//           rounded-[10px]
//           text-[14px]
//           shadow-[0_6px_18px_rgba(0,0,0,0.12)]
//           opacity-0
//           -translate-y-[6px]
//           pointer-events-none
//           transition-all
//           duration-200
//           ease-out
//           whitespace-nowrap
//           group-hover:opacity-100
//           group-hover:translate-y-0
//         "
//       >
//         {title}
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import bookImg from "@/assets/the_making_of_prince_of_persia (15).webp";

type BookProps = {
  cover?: any;
  title?: string;
  backColor?: string;
  pageColor?: string;
};

export default function Book({
  cover,
  title = "The Making of Prince of Persia",
  backColor = "#0b4cff",
  pageColor = "#ffffff",
}: BookProps) {

  const finalCover = cover || bookImg;

  return (
    <div className="flex flex-col items-center w-[30px] group">

      <div style={{ perspective: "1000px" }}>

        {/* 3D Book */}
        <div tabIndex={0} style={{
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
        }}
          className="relative w-[135px] h-[200px] cursor-pointer transition-transform duration-[350ms] ease-out  group-hover:[transform:rotateY(-20deg)_scale(1.03)_translateX(-2px)]  focus:[transform:rotateY(-20deg)_scale(1.03)_translateX(-2px)]" >

          {/* BACK PAGE */}
          <div className="absolute w-full h-full rounded-[6px] opacity-0 transition-all duration-[350ms] ease-out group-hover:translate-x-[16px] group-hover:opacity-100 z-0"
            style={{ background: backColor }}
          />

          {/* WHITE PAGE */}
          <div className="absolute w-full rounded-[6px] opacity-0 transition-all duration-[350ms] ease-out  group-hover:translate-x-[10px] group-hover:opacity-100 z-[1]"
            style={{
              background: pageColor,
              top: "6px",
              height: "calc(100% - 12px)",
            }}
          />

          {/* COVER */}
          <div className="relative w-full h-full overflow-hidden rounded-r-[6px] shadow-[0_18px_35px_rgba(0,0,0,0.18)] z-[2]">
            <Image
              src={finalCover}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

      {/* TITLE */}
      <div className="mt-4 px-5 py-2 bg-white rounded-[10px] text-[14px] shadow-[0_6px_18px_rgba(0,0,0,0.12)] opacity-0 -translate-y-[6px] pointer-events-none transition-all duration-[250ms] ease-out whitespace-nowrap group-hover:opacity-100 group-hover:translate-y-0">{title}
      </div>
    </div>
  );
}