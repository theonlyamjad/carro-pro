"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "01",
    label: "Pare-choc",
    sub: "Avant & arrière",
    count: "200+",
    accent: "bg-[#d42b2b]",
  },
  {
    id: "02",
    label: "Phares",
    sub: "Optiques & projecteurs",
    count: "300+",
    accent: "bg-white",
  },
  {
    id: "03",
    label: "Ailes",
    sub: "Avant & arrière",
    count: "150+",
    accent: "bg-[#d42b2b]",
  },
  {
    id: "04",
    label: "Capot",
    sub: "Moteur & coffre",
    count: "120+",
    accent: "bg-white",
  },
  {
    id: "05",
    label: "Accessoires",
    sub: "Rétros, garnitures...",
    count: "500+",
    accent: "bg-[#d42b2b]",
  },
];

export default function Categories() {
  const sRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cat-header",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".cat-row",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: ".cat-row", start: "top 85%" } }
      );
    }, sRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sRef} className="relative bg-[#0e0e0e] overflow-hidden" style={{ padding: "clamp(5rem,10vw,9rem) 0" }}>
      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-transparent via-[#d42b2b] to-transparent opacity-50" />

      <div className="container-wide">
        {/* Header */}
        <div className="cat-header flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 opacity-0">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="rule-red" />
              <span className="eyebrow">Ce que nous proposons</span>
            </div>
            <h2 className="font-display font-700 text-white" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 0.9, textTransform: "uppercase" }}>
              Nos<br />
              <span className="text-[#d42b2b]">Catégories</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed font-light">
            Plus de 1 000 références disponibles pour toutes marques et modèles.
          </p>
        </div>

        {/* Category list — horizontal rows */}
        <div className="flex flex-col border-t border-white/[0.06]">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="cat-row group opacity-0 flex items-center justify-between py-5 border-b border-white/[0.06] cursor-pointer hover:pl-3 transition-all duration-300"
            >
              {/* Left: number + name */}
              <div className="flex items-center gap-6 sm:gap-10">
                <span className="font-display text-xs text-white/20 tracking-widest w-6">{cat.id}</span>
                <div>
                  <h3 className="font-display font-600 text-white group-hover:text-[#d42b2b] transition-colors duration-200"
                    style={{ fontSize: "clamp(1.3rem, 3vw, 2.2rem)", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                    {cat.label}
                  </h3>
                  <p className="text-white/30 text-xs tracking-widest mt-0.5">{cat.sub}</p>
                </div>
              </div>

              {/* Right: count + arrow */}
              <div className="flex items-center gap-4 sm:gap-8">
                <span className="font-display text-sm text-white/20 group-hover:text-white/60 transition-colors hidden sm:block">
                  {cat.count} réf.
                </span>
                <div className="w-8 h-8 border border-white/10 group-hover:border-[#d42b2b] group-hover:bg-[#d42b2b]/10 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={14} className="text-white/30 group-hover:text-[#d42b2b] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-end">
          <a href="/catalog" className="btn-ghost text-xs">
            Voir tout le catalogue
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}