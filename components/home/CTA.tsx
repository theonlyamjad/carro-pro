"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageCircle, MapPin, Navigation, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-main",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.5, ease: "expo.out",
          scrollTrigger: { trigger: sRef.current, start: "top 80%" } }
      );

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;
        gsap.to(gridRef.current, { x: xPos, y: yPos, duration: 2, ease: "power2.out" });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, sRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sRef} className="relative overflow-hidden bg-[#020202] py-40 lg:py-60">
      <div 
        ref={gridRef}
        className="absolute inset-[-10%] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #fa0000 4px, transparent 4px), 
                            linear-gradient(to bottom, #fa0000 4px, transparent 4px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fa0000 0, #fa0000 4px, transparent 0, transparent 100%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="cta-main opacity-0">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 border border-white/5 bg-black/40 backdrop-blur-3xl overflow-hidden min-h-150">
            <div className="lg:col-span-7 p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/5 relative flex flex-col justify-center">

              <h2 className="font-display font-900 text-white leading-[0.8] uppercase mb-10"
                style={{ fontSize: "clamp(3.5rem, 12vw, 9.5rem)" }}>
                VOTRE <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#cc1f1f] to-[#ff4d4d] italic">PIÈCE</span><br />
                MAINTENANT
              </h2>

              <div className="flex flex-col md:flex-row gap-6 mt-16">
                <a href="tel:0635620605" className="group relative flex items-center justify-between bg-[#cc1f1f] px-8 py-6 transition-all duration-500 hover:pr-12 overflow-hidden">
                  <div className="flex items-center gap-4 relative z-10">
                    <Phone size={20} className="text-white" />
                    <span className="font-display font-900 text-white tracking-[0.2em] text-xs uppercase">Appel Direct</span>
                  </div>
                  <ArrowUpRight size={20} className="text-white relative z-10 group-hover:rotate-45 transition-transform" />
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <style jsx>{`.group:hover span, .group:hover svg { color: black; }`}</style>
                </a>

                <a href="https://wa.me/212635620605" className="group flex items-center justify-between border border-white/10 px-8 py-6 transition-all duration-500 hover:bg-[#25D366]/10 hover:border-[#25D366]/40">
                  <div className="flex items-center gap-4">
                    <MessageCircle size={20} className="text-white group-hover:text-[#25D366] transition-colors" />
                    <span className="font-display font-900 text-white tracking-[0.2em] text-xs uppercase">WhatsApp Business</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col">
              <div className="p-10 lg:p-12 border-b border-white/5 group hover:bg-white/2 transition-colors cursor-crosshair grow">
                <div className="flex items-center justify-between mb-6">
                  <MapPin size={16} className="text-[#cc1f1f]" />
                  <span className="text-[0.5rem] text-white/20 font-black tracking-[0.4em]">LOC_01</span>
                </div>
                <h4 className="font-display text-white text-3xl font-800 uppercase tracking-tighter">AGADIR, MAROC</h4>
                <p className="text-white/30 text-[0.65rem] tracking-[0.2em] uppercase mt-2">Hay El Farah</p>
              </div>
              <div className="p-10 lg:p-12 border-b border-white/5 group hover:bg-white/2 transition-colors grow">
                <div className="flex items-center justify-between mb-6">
                  <Navigation size={16} className="text-[#cc1f1f]" />
                  <span className="text-[0.5rem] text-white/20 font-black tracking-[0.4em]">TIM_02</span>
                </div>
                <h4 className="font-display text-white text-3xl font-800 uppercase tracking-tighter">09:00 — 19:00</h4>
                <p className="text-white/30 text-[0.65rem] tracking-[0.2em] uppercase mt-2">Lundi au Samedi / Service Client</p>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Carropro+Agadir+Hay+El+Farah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-10 lg:p-12 bg-[#cc1f1f]/10 flex items-center justify-between group transition-all duration-500 hover:bg-[#cc1f1f]/20 border-t border-white/5"
              >
                <div>
                  <p className="text-white font-display text-lg font-700 tracking-tight mt-1 group-hover:translate-x-2 transition-transform duration-500">
                    OUVRIR GOOGLE MAPS
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#cc1f1f]/30 flex items-center justify-center group-hover:bg-[#cc1f1f] group-hover:border-[#cc1f1f] transition-all duration-500">
                  <Navigation size={18} className="text-[#cc1f1f] group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}