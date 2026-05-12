"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loading() {
  const rimRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(rimRef.current, {
      rotate: 360,
      duration: 3, 
      repeat: -1,
      ease: "none",
    });
    gsap.to(textRef.current, {
      opacity: 0.3,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="fixed inset-0 z-100 bg-[#020202] flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20 pointer-events-none" />
      <div className="relative flex flex-col items-center">
        <div className="relative w-24 h-24 mb-10">
          <div className="absolute inset-0 bg-[#cc1f1f]/5 blur-2xl rounded-full" />
          
          <div ref={rimRef} className="relative z-10 w-full h-full">
            <svg 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(204,31,31,0.2)]"
            >
              <circle cx="50" cy="50" r="45" stroke="#cc1f1f" strokeWidth="2" strokeOpacity="0.2" />
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" />
              <g stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9">
                <path d="M50 20V30M50 70V80M20 50H30M70 50H80" />
                <path d="M28 28L35 35M65 65L72 72M72 28L65 35M35 65L28 72" />
              </g>
              <circle cx="44" cy="44" r="2.5" fill="#cc1f1f" />
              <circle cx="56" cy="44" r="2.5" fill="#cc1f1f" />
              <circle cx="44" cy="56" r="2.5" fill="#cc1f1f" />
              <circle cx="56" cy="56" r="2.5" fill="#cc1f1f" />
              <circle cx="50" cy="50" r="5" stroke="#cc1f1f" strokeWidth="1" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#cc1f1f] animate-pulse" />
            <span ref={textRef} className="font-display text-[0.65rem] tracking-[0.6em] text-white uppercase font-900">
              Calibration en cours
            </span>
          </div>
          <div className="h-px w-32 bg-linear-to-r from-transparent via-white/10 to-transparent" />
          <span className="font-display text-[0.5rem] tracking-[0.3em] text-white/20 uppercase">
            Accès sécurisé à l'index technique
          </span>
        </div>
      </div>
    </div>
  );
}