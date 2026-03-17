"use client";

import Link from "next/link";
import Image from "next/image";
import img from "@/assets/fe409a24a289272ed2cd064ddcee7c37e16eefb8.png";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  const items = ["Projects", "About", "Playground", "Resume"];

  return (
    <footer className="w-full bg-black text-white mt-40 min-[376px]:mt-0">

      <div className="w-full px-6 sm:px-10 md:px-[60px] py-[80px] md:py-[120px] flex flex-col md:flex-row items-center md:items-center justify-between gap-10">


        <h2 className="text-lg sm:text-xl tracking-wide opacity-70 font-normal text-center md:text-left">
          Mohit Sharma
        </h2>


        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-base">
          {items.map((it) => {
            const path = it === "Projects" ? "/" : `/${it.toLowerCase()}`;
            const isActive =
              normalizedPath === path || normalizedPath.startsWith(path + "/");

            return (
              <Link
                key={it}
                href={path}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors text-base font-normal [font-family:var(--font-funnel-display)]
                ${isActive ? "text-white" : "text-[#ffffff80]"}`}
              >
                {it}
              </Link>
            );
          })}
        </div>


        <div className="flex gap-5">
          <Image src={img} alt="logo" width={22} height={22} />
          <Image src={img} alt="logo" width={22} height={22} />
          <Image src={img} alt="logo" width={22} height={22} />
        </div>

      </div>
    </footer>
  );
}



// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import img from "@/assets/fe409a24a289272ed2cd064ddcee7c37e16eefb8.png";
// import { usePathname } from "next/navigation";

// export default function Footer() {
//   const pathname = usePathname();
//   const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

//   const items = ["Projects", "About", "Playground", "Resume"];

//   return (
//    <footer className="w-full bg-black text-white mt-40 min-[376px]:mt-0">
//       <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-[60px] py-12 md:py-[80px]">

//         <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8">

//           {/* Name */}
//           <h2 className="text-lg sm:text-xl tracking-wide opacity-70 font-normal text-center md:text-left">
//             Mohit Sharma
//           </h2>

//           {/* Links */}
//           <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-base">
//             {items.map((it) => {
//               const path = it === "Projects" ? "/" : `/${it.toLowerCase()}`;
//               const isActive =
//                 normalizedPath === path || normalizedPath.startsWith(path + "/");

//               return (
//                 <Link
//                   key={it}
//                   href={path}
//                   aria-current={isActive ? "page" : undefined}
//                   className={`transition-colors text-base font-normal [font-family:var(--font-funnel-display)]
//                   ${isActive ? "text-white" : "text-[#ffffff80]"}`}
//                 >
//                   {it}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-5">
//             <Image src={img} alt="logo" width={22} height={22} />
//             <Image src={img} alt="logo" width={22} height={22} />
//             <Image src={img} alt="logo" width={22} height={22} />
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// }
