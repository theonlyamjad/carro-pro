"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const carWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 }); 

      tl.fromTo(".bg-car-wrapper", 
        { opacity: 0, x: 20, scale: 1.05 },
        { opacity: 0.4, x: 0, scale: 1, duration: 1.5, ease: "power3.out" }
      )
      tl.fromTo(".h-title-line", 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: "power4.out",
          onStart: () => gsap.set(".h-title-line", { visibility: "visible" }) 
        }
      )
      .fromTo(".h-details", 
        { opacity: 0, y: 10 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20; 
        const yPos = (clientY / window.innerHeight - 0.5) * 10;

        gsap.to(carWrapperRef.current, {
          x: xPos,
          y: yPos,
          duration: 1.5,
          ease: "power2.out"
        });
      };

      if (window.innerWidth > 1024) {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }
    }, rootRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-screen bg-[#020202] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            ref={carWrapperRef}
            className="bg-car-wrapper opacity-0 absolute right-[-5%] top-1/2 -translate-y-1/2 w-full lg:w-[85%] aspect-video lg:aspect-auto h-[40vh] lg:h-[80vh]"
          >
            <Image 
              src="/bugatti-chiron.png" 
              alt="Bugatti Chiron CarroPro" 
              fill
              priority
              fetchPriority="high"
              className="object-contain" 
              sizes="(max-width: 768px) 100vw, 85vw"
            />
          </div>
        <div className="absolute inset-0 bg-linear-to-r from-[#020202] via-[#020202]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)] z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20 lg:pt-0">
        <div className="h-details opacity-0 flex items-center gap-4 mb-8">
          <span className="w-12 h-px bg-[#cc1f1f] shadow-[0_0_12px_#cc1f1f]" />
          <span className="font-display text-[0.65rem] tracking-[0.5em] uppercase text-[#cc1f1f] font-900">
            Performance Absolue
          </span>
        </div>

        <h1 className="font-display font-900 leading-[0.85] text-white uppercase text-[clamp(3rem,8vw,7.5rem)]">
  <div className="overflow-hidden py-1 h-[1.15em]"> 
    <div className="h-title-line gsap-reveal italic tracking-tighter">Pure</div>
  </div>
  <div className="overflow-hidden py-1 h-[1.15em]">
    <div className="h-title-line gsap-reveal text-[#cc1f1f]">Performance</div>
  </div>
</h1>

        <div className="h-details opacity-0 mt-10 max-w-xl">
          <p className="text-white/60 font-light leading-relaxed text-base lg:text-lg border-l border-white/20 pl-8 backdrop-blur-[2px]">
            Partenaire privilégié à <span className="text-white">Agadir</span> pour des composants 
            de carrosserie haut de gamme. Chaque pièce est une promesse de précision.
          </p>
          
          <div className="flex flex-wrap gap-6 mt-14">
            <Link 
              href="/catalog" 
              className="group relative overflow-hidden px-12 py-5 bg-[#cc1f1f] text-white font-display font-900 tracking-[0.25em] text-[0.7rem] uppercase transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-4 group-hover:text-black transition-colors duration-500">
                Découvrir le stock <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
            </Link>
            
            <a 
              href="tel:+212635620605" 
              className="px-12 py-5 border border-white/10 bg-white/2 hover:bg-white/5 hover:border-[#cc1f1f] text-white font-display font-800 tracking-[0.25em] text-[0.7rem] uppercase transition-all duration-500 backdrop-blur-xl flex items-center gap-3"
            >
              <Phone size={14} className="text-[#cc1f1f]" /> +212 635 620 605
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}