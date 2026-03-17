// "use client";

// import { useEffect, useRef } from "react";

// interface ScratchCardProps {
//   width: number;
//   height: number;
//   brushSize?: number;
//   coverColor?: string;
//   finishPercent?: number;
//   children: React.ReactNode;
// }

// export default function ScratchCard({
//   width,
//   height,
//   brushSize = 36,
//   coverColor = "#bdbdbd",
//   finishPercent = 55,
//   children,
// }: ScratchCardProps) {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const isDrawing = useRef(false);
//   const finished = useRef(false);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;
//     const dpr = window.devicePixelRatio || 1;

//     canvas.width = width * dpr;
//     canvas.height = height * dpr;
//     canvas.style.width = `${width}px`;
//     canvas.style.height = `${height}px`;
//     ctx.scale(dpr, dpr);

//     ctx.fillStyle = coverColor;
//     ctx.fillRect(0, 0, width, height);
//     ctx.globalCompositeOperation = "destination-out";
//   }, [width, height, coverColor]);

//   const scratch = (x: number, y: number) => {
//     if (finished.current) return;
//     const ctx = canvasRef.current!.getContext("2d")!;
//     ctx.beginPath();
//     ctx.arc(x, y, brushSize, 0, Math.PI * 2);
//     ctx.fill();
//     checkFinish();
//   };

//   const checkFinish = () => {
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;
//     const img = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
//     let cleared = 0;
//     for (let i = 3; i < img.length; i += 4) if (img[i] === 0) cleared++;
//     const percent = (cleared / (img.length / 4)) * 100;

//     if (percent >= finishPercent) {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       finished.current = true;
//     }
//   };

//   const pos = (e: PointerEvent) => {
//     const r = canvasRef.current!.getBoundingClientRect();
//     return { x: e.clientX - r.left, y: e.clientY - r.top };
//   };

//   return (
//     <div className="relative select-none" style={{ width, height }}>
//       <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
//         {children}
//       </div>

//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 z-10 touch-none cursor-pointer"
//         onPointerDown={(e) => {
//           isDrawing.current = true;
//           const p = pos(e.nativeEvent);
//           scratch(p.x, p.y);
//         }}
//         onPointerMove={(e) => {
//           if (!isDrawing.current) return;
//           const p = pos(e.nativeEvent);
//           scratch(p.x, p.y);
//         }}
//         onPointerUp={() => (isDrawing.current = false)}
//         onPointerLeave={() => (isDrawing.current = false)}
//       />
//     </div>
//   );
// }



"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
// import cover from "@/assets/chess-cover.png"

export default function ScratchFloatCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scratching, setScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    canvas.width = w;
    canvas.height = h;

    const img = new window.Image();
    img.src = "/assets/";

    img.onload = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(img, 0, 0, w, h);
    };
  }, []);

  const checkScratch = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let erased = 0;

    for (let i = 3; i < imgData.data.length; i += 4) {
      if (imgData.data[i] === 0) erased++;
    }

    const percent = erased / (imgData.data.length / 4);

    if (percent > 0.35) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setRevealed(true);
    }
  };

  const scratch = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!scratching || revealed) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkScratch();
  };

  return (
    <div
      className={`relative w-[350px] h-[350px] rounded-md overflow-hidden bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
        revealed ? "group revealed" : ""
      }`}
      style={{
        cursor: `url(/assets/cursor.svg) 16 16, auto`,
      }}
    >
      {/* BACK CARD */}
      {/* <div className="absolute inset-0 bg-black">
        <Image
          src={cover}
          alt=""
          fill
          className="object-cover opacity-65"
        /> */}

        {/* TEXT */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center gap-4 pointer-events-none">
          <div className="animate-right w-max px-6 py-2 text-[70px] font-black text-white bg-black rounded-full whitespace-nowrap">
            PLAY PLAY PLAY PLAY PLAY PLAY
          </div>

          <div className="animate-left w-max px-6 py-2 text-[70px] font-black text-white bg-black rounded-full whitespace-nowrap">
            PLAY PLAY PLAY PLAY PLAY PLAY
          </div>
        </div>

        {/* STICKERS */}
        <Image
          src="https://www.andregs.com/about-me/chess-avatar/king-chess-poster.svg"
          alt=""
          width={120}
          height={120}
          className="absolute top-[3%] left-[8%] -rotate-[54deg] z-30"
        />

        <Image
          src="https://www.andregs.com/about-me/chess-avatar/chess-poster.svg"
          alt=""
          width={165}
          height={165}
          className="absolute bottom-[10%] right-[10%] -rotate-[5deg] z-30"
        />
      </div>
      
  );
}