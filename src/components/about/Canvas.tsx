"use client";

import React, { useRef, useEffect, useState } from "react";
import BrushIcon from "@mui/icons-material/Brush";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const lastPoint = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  const [color, setColor] = useState("#5b7cfa");
  const [showPicker, setShowPicker] = useState(false);

  const COLORS = [
    "#ff9800",
    "#6fe07f",
    "#4fa3ff",
    "#ff6b6b",
    "#ffd23f",
    "#9b5cff",
  ];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const scale = window.devicePixelRatio || 1;
    canvas.width = 360 * scale;
    canvas.height = 360 * scale;
    canvas.style.width = "360px";
    canvas.style.height = "360px";
    ctx.scale(scale, scale);

    ctx.fillStyle = "#f3e6cc";
    ctx.fillRect(0, 0, 360, 360);

    const text = "hello";
    let i = 0;

    ctx.font = "64px Pacifico";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const centerX = 180;
    const centerY = 180;

    const type = () => {
      if (i <= text.length) {
        ctx.fillStyle = "#f3e6cc";
        ctx.fillRect(0, 0, 360, 360);

        ctx.fillStyle = color;

        const shakeX = (Math.random() - 0.5) * 2;
        const shakeY = (Math.random() - 0.5) * 2;

        ctx.fillText(text.slice(0, i), centerX + shakeX, centerY + shakeY);

        i++;
        setTimeout(type, 180);
      }
    };

    type();
  }, []);

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    drawing.current = true;
    lastPoint.current = { x: null, y: null };
    draw(e);
  };

  const endDraw = () => {
    drawing.current = false;
    lastPoint.current = { x: null, y: null };
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x += (Math.random() - 0.5) * 2;
    y += (Math.random() - 0.5) * 2;

    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();

    if (lastPoint.current.x !== null && lastPoint.current.y !== null) {
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    lastPoint.current = { x, y };
  };

  const eraseCanvas = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    ctx.clearRect(0, 0, 360, 360);
    ctx.fillStyle = "#f3e6cc";
    ctx.fillRect(0, 0, 360, 360);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[360px] h-[360px] bg-[#f3e6cc] rounded-[10px] border-[4px] border-[#d1b98b] overflow-hidden">

        <canvas
          ref={canvasRef}
          className="w-[360px] h-[360px] cursor-crosshair"
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
        />

        

        {/* ACTIONS */}
        <div className="absolute bottom-[14px] left-[85%] -translate-x-1/2 flex items-center gap-[10px] z-10">

          {/* Erase Button */}
          <button
            onClick={eraseCanvas}
            className="w-[36px] h-[36px] rounded-[6px] bg-white shadow-md flex items-center justify-center"
          >
            <BrushIcon />
          </button>

          {/* Color Picker */}
          <div className="relative">

            {/* Main Color */}
            <div
              onClick={() => setShowPicker(!showPicker)}
              className="w-[40px] h-[40px] rounded-[6px] shadow-md border-[3px] border-white cursor-pointer"
              style={{ background: color }}
            />

            {/* Picker Dropdown */}
            <div
              className={`absolute bottom-[44px] left-1/2 -translate-x-1/2 flex flex-col gap-[6px] transition-all duration-300 ${showPicker
                  ? "translate-y-0 opacity-100 pointer-events-auto"
                  : "translate-y-3 opacity-0 pointer-events-none"
                }`}
            >
              {COLORS.map((c) => (
                <div
                  key={c}
                  onClick={() => {
                    setColor(c);
                    setShowPicker(false);
                  }}
                  className="w-[40px] h-[40px] rounded-[6px] border-[4px] border-white cursor-pointer"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}