// "use client";
// import Hero from "@/components/about/Hero";
// import DragComponent from "@/components/about/DragComponent";
// import DragCanvas from "@/components/about/DragComponent";
// import Footer from "@/components/footer";
// import BottomNav from "@/components/about/BottomNav";



// export default function Home() {
//   return (
//     <main className="min-h-screen w-full">

//       <section className="h-[100vh]">
//         <Hero />
//       </section>

// <section className="min-h-screen w-full bg-black flex items-center">
//   <div className="w-full px-5 sm:px-8 md:px-[60px]">

//     <h1 className="font-medium text-[22px] leading-[24px] sm:text-[28px] sm:leading-[30px] md:text-[34px] md:leading-[36px] lg:text-[40px] lg:leading-[40px] tracking-[-3.2px] pb[20px] text-white">
//       Hey there! I am Mohit Sharma.
//     </h1>

//     <div className="w-full h-[55vh] min-h-[320px] md:min-h-[350px] max-h-[750px]">
//       <DragCanvas />
//     </div>

//   </div>
// </section>

//     </main>
//   );
// }

// "use client";

// import Hero from "@/components/about/Hero";
// import dynamic from "next/dynamic";

// const DragCanvas = dynamic(() => import("@/components/about/DragComponent"), {
//   ssr: false,
// });

// export default function Home() {
//   return (
//     <main className="min-h-screen w-full">

//       <section className="h-[100vh]">
//         <Hero />
//       </section>

//       <section className="min-h-screen w-full bg-black flex items-center">
//         <div className="w-full px-5 sm:px-8 md:px-[60px]">

//           <h1 className="font-medium text-[22px] leading-[24px] sm:text-[28px] sm:leading [30px] md:text-[34px] md:leading-[36px] lg:text-[40px] lg:leading-[40px]  pb-[20px] text-white">
//             Hey there! I am Mohit Sharma.
//           </h1>

//           <div className="w-full h-[55vh] min-h-[320px] md:min-h-[350px] max-h-[750px]">
//             <DragCanvas />
//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }


"use client";

import DragComponent from "@/components/about/DragComponent";
import Hero from "@/components/about/Hero";
import dynamic from "next/dynamic";

const DragCanvas = dynamic(() => import("@/components/about/DragComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen w-full">

      <section className="h-screen">
        <Hero />
      </section>

      <section className="min-h-screen w-full bg-black">
        <div className="w-full px-5 sm:px-8 md:px-[60px]">

          <h1 className="font-medium text-[22px] leading-[24px] sm:text-[28px] sm:leading-[30px] md:text-[34px] md:leading-[36px] lg:text-[40px] lg:leading-[40px] pb-[20px] text-white">
            Hey there! I am Mohit Sharma.
          </h1>

          {/* <div className="w-full h-[55vh] min-h-[320px] md:min-h-[350px] max-h-[750px] overflow-auto" >
            
            <DragComponent/>
          </div> */}
          {/* <div className="sticky w-full h-[55vh] min-h-[320px] md:min-h-[350px] max-h-[750px] overflow-hidden">
            <div className="h-full overflow-auto">
              <DragComponent />
            </div>
          </div> */}

          {/* <div className="sticky top-0 w-full h-[55vh] min-h-[320px] md:min-h-[350px] max-h-[750px] overflow-hidden"> */}
          <div className="sticky top-0 w-full h-[calc(100dvh+80px)] md:h-[65vh] min-h-[320px] md:min-h-[350px] max-h-[750px] overflow-hidden">

            <div
              // className="h-full overflow-auto overscroll-contain"
              className="h-full md:overflow-auto overflow-hidden md:overscroll-contain"
              onWheel={(e) => {
                const el = e.currentTarget;

                const isScrollingUp = e.deltaY < 0;
                const isScrollingDown = e.deltaY > 0;

                const isAtTop = el.scrollTop <= 0;
                const isAtBottom =
                  el.scrollTop + el.clientHeight >= el.scrollHeight;


                if ((isAtTop && isScrollingUp) || (isAtBottom && isScrollingDown)) {
                  e.preventDefault();
                }


                e.stopPropagation();
              }}
            >

              <DragComponent />

            </div>

          </div>


        </div>
      </section>

    </main>
  );
}