"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";

interface Project {
  year: string;
  category: string;
  title: string;
  backgroundColor: string;
  imageSrc: string;
  pageLink: string;
  textColor: string;
}

interface SwipeCardsProps {
  projects: Project[];
}

const TOTAL = 5;


function getPos(i: number) {
  return {
    rotation: i * 2.2,   
    x: i * 8,         
    y: i * 8,         
    scale: 1 - i * 0.04,
    zIndex: TOTAL - i,
  };
}



export default function SwipeCards({ projects }: SwipeCardsProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const queueRef = useRef(0);
  const animating = useRef(false);
  const dragging = useRef(false);
  const startX = useRef(0);
  const curX = useRef(0);

  const [cardProjects, setCardProjects] = useState<Project[]>(() =>
    Array.from({ length: TOTAL }, (_, i) => projects[i % projects.length])
  );

  const cardOrder = useRef<number[]>(Array.from({ length: TOTAL }, (_, i) => i));

  useEffect(() => {
    queueRef.current = TOTAL;
  }, []);

  function applyPos(domIdx: number, stackIdx: number, animate: boolean, dur = 0.42) {
    const el = cardRefs.current[domIdx];
    if (!el) return;
    const p = getPos(stackIdx);

    if (animate) {
      gsap.to(el, { ...p, duration: dur, ease: "power3.out" });
    } else {
      gsap.set(el, p);
    }
  }

  useEffect(() => {
    cardOrder.current.forEach((domIdx, stackIdx) => {
      applyPos(domIdx, stackIdx, false);
    });
  }, []);

  function doSwipe() {
    if (animating.current) return;
    animating.current = true;

    const frontDomIdx = cardOrder.current[0];
    const frontEl = cardRefs.current[frontDomIdx];
    if (!frontEl) return;

    const backP = getPos(TOTAL - 1);

    
    const newOrder = [...cardOrder.current.slice(1), frontDomIdx];
    cardOrder.current = newOrder;


    const nextProjIdx = queueRef.current % projects.length;
    queueRef.current++;

    setCardProjects((prev) => {
      const next = [...prev];
      next[frontDomIdx] = projects[nextProjIdx];
      return next;
    });

   
    gsap.set(frontEl, { zIndex: 0 });

    
    gsap.to(frontEl, {
      keyframes: [
        {
          rotation: backP.rotation - 18,
          x: backP.x - 60,
          y: backP.y - 25,
          scale: backP.scale,
          duration: 0.28,
          ease: "power2.in",
        },
        {
          rotation: backP.rotation,
          x: backP.x,
          y: backP.y,
          scale: backP.scale,
          zIndex: backP.zIndex,
          duration: 0.24,
          ease: "power2.out",
        },
      ],
      onComplete: () => {
        animating.current = false;
      },
    });

    
    newOrder.slice(0, TOTAL - 1).forEach((domIdx, stackIdx) => {
      applyPos(domIdx, stackIdx, true, 0.38);
    });
  }

  function snapAll() {
    cardOrder.current.forEach((domIdx, stackIdx) => {
      applyPos(domIdx, stackIdx, true, 0.38);
    });
  }

  function onPointerDown(e: React.PointerEvent) {
    if (animating.current) return;
    dragging.current = true;
    startX.current = e.clientX;
    curX.current = 0;

    const frontDomIdx = cardOrder.current[0];
    const frontEl = cardRefs.current[frontDomIdx];
    if (frontEl) gsap.killTweensOf(frontEl);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current) return;

    curX.current = e.clientX - startX.current;


    const dx = Math.min(curX.current, 15);

    const frontDomIdx = cardOrder.current[0];
    const frontEl = cardRefs.current[frontDomIdx];

    if (frontEl) {
      gsap.set(frontEl, {
        x: dx,
        rotation: getPos(0).rotation + dx * 0.04,
      });
    }


    const progress = Math.max(0, Math.min(-dx / 180, 1));

    cardOrder.current.slice(1).forEach((domIdx, idx) => {
      const stackIdx = idx + 1;
      const from = getPos(stackIdx);
      const to = getPos(stackIdx - 1);

      gsap.set(cardRefs.current[domIdx], {
        rotation: from.rotation + (to.rotation - from.rotation) * progress,
        x: from.x + (to.x - from.x) * progress,
        y: from.y + (to.y - from.y) * progress,
        scale: from.scale + (to.scale - from.scale) * progress,
      });
    });
  }

  function onPointerUp() {
    if (!dragging.current) return;
    dragging.current = false;

    if (curX.current < -70) {
      doSwipe();
    } else {
      snapAll();
    }

    curX.current = 0;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <div
        ref={stageRef}
        className="relative"
        style={{
          width: "calc(100vw - 48px)",
          height: "520px",
          marginLeft: "-12px",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {cardProjects.map((project, domIdx) => (
          <div
            key={domIdx}
            ref={(el) => {
              if (el) cardRefs.current[domIdx] = el;
            }}
            className="absolute top-0 left-0 w-full"
            style={{ touchAction: "none" }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

