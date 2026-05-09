"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: "01", label: "Pare-choc", sub: "Structures Avant & Arrière", count: "240" },
  { id: "02", label: "Optiques", sub: "Systèmes LED & Xénon", count: "185" },
  { id: "03", label: "Carrosserie", sub: "Ailes & Portières d'Origine", count: "310" },
  { id: "04", label: "Capot", sub: "Composants Moteur & Face", count: "95" },
  { id: "05", label: "Accessoires", sub: "Rétroviseurs & Finitions", count: "420" },
];

export default function Categories() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title entrance
      gsap.fromTo(".section-header",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
      );

      // Cards staggered entrance
      gsap.fromTo(".tech-card",
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "expo.out",
          scrollTrigger: { trigger: ".tech-card", start: "top 90%" } }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#020202] py-24 lg:py-40 overflow-hidden">
      
      {/* ── BACKGROUND ARCHITECTURE ── */}
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      
      {/* Decorative vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="section-header opacity-0 flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-[#cc1f1f] shadow-[0_0_10px_#cc1f1f]" />
              <span className="font-display text-[0.65rem] tracking-[0.5em] uppercase text-[#cc1f1f] font-900">Catalogue Technique</span>
            </div>
            <h2 className="font-display font-900 text-6xl lg:text-8xl text-white tracking-tighter uppercase leading-[0.85]">
              Composants <br />
              <span className="italic text-white/20">de Précision</span>
            </h2>
          </div>
          <div className="lg:mb-2 max-w-xs border-l border-white/10 pl-6">
            <p className="text-white/40 text-xs lg:text-sm leading-relaxed font-light uppercase tracking-widest">
              Index complet des pièces certifiées OEM. <br />
              Sourcing direct pour garantir <span className="text-white/80">l'ajustement parfait</span> de votre châssis.
            </p>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0.5 bg-white/5 border border-white/5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="tech-card opacity-0 group relative bg-[#050505] p-10 flex flex-col justify-between min-h-[320px] transition-all duration-700 overflow-hidden cursor-pointer"
            >
              {/* Hover Light Scan Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#cc1f1f]/10 via-transparent to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              
              {/* Top Bar Label */}
              <div className="flex items-center justify-between mb-12">
                <span className="font-display text-[0.6rem] font-900 tracking-[0.3em] text-[#cc1f1f]">
                  MOD. {cat.id}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#cc1f1f] group-hover:shadow-[0_0_8px_#cc1f1f] transition-all duration-300" />
              </div>

              {/* Main Info */}
              <div className="relative z-10">
                <h3 className="font-display font-800 text-3xl text-white uppercase mb-2 tracking-tight">
                  {cat.label}
                </h3>
                <p className="text-white/30 text-[0.65rem] tracking-[0.15em] uppercase font-light leading-tight">
                  {cat.sub}
                </p>
              </div>

              {/* Counter and CTA Footer */}
              <div className="relative z-10 flex items-end justify-between mt-16">
                <div>
                  <div className="font-display text-4xl font-900 text-white leading-none tracking-tighter transition-transform duration-500 group-hover:-translate-y-1">
                    {cat.count}
                  </div>
                  <div className="text-[0.55rem] tracking-[0.2em] text-[#cc1f1f] font-black uppercase mt-1">Stock Actuel</div>
                </div>
                
                <div className="w-10 h-10 border border-white/10 group-hover:border-[#cc1f1f] group-hover:bg-[#cc1f1f] flex items-center justify-center transition-all duration-500 rounded-none transform group-hover:rotate-45">
                  <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors duration-500 transform group-hover:-rotate-45" />
                </div>
              </div>

              {/* Hidden blueprint-style serial number on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[6rem] font-900 text-white/[0.02] pointer-events-none group-hover:text-[#cc1f1f]/[0.03] transition-colors duration-500">
                {cat.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}