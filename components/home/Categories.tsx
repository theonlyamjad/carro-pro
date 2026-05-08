"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    label: "PARE-CHOC",
    icon: "🚗",
    desc: "Avant & arrière, toutes marques",
    count: "200+ références",
  },
  {
    label: "PHARES",
    icon: "💡",
    desc: "Optiques, feux, projecteurs",
    count: "300+ références",
  },
  {
    label: "AILES",
    icon: "🔧",
    desc: "Ailes avant & arrière",
    count: "150+ références",
  },
  {
    label: "CAPOT",
    icon: "⚙️",
    desc: "Capots moteur, coffre",
    count: "120+ références",
  },
  {
    label: "ACCESSOIRES",
    icon: "🔩",
    desc: "Rétros, poignées, garnitures",
    count: "500+ références",
  },
];

export default function Categories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".category-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".section-title",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#e01c1c]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="section-title flex items-center gap-4 mb-3">
            <div className="w-10 h-[3px] bg-[#e01c1c]" />
            <span className="font-display text-sm tracking-[0.3em] text-[#e01c1c]">
              NOS CATÉGORIES
            </span>
          </div>
          <h2 className="section-title font-display text-5xl sm:text-6xl text-white">
            TOUT CE QU'IL
            <br />
            <span className="text-[#e01c1c]">VOUS FAUT</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="category-card group relative bg-black border border-[#1e1e1e] hover:border-[#e01c1c] p-6 cursor-pointer transition-all duration-300 overflow-hidden opacity-0"
            >
              {/* hover bg */}
              <div className="absolute inset-0 bg-[#e01c1c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top red bar */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#e01c1c] group-hover:w-full transition-all duration-300" />

              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{cat.icon}</span>
                <h3 className="font-display text-lg tracking-widest text-white mb-1 group-hover:text-[#e01c1c] transition-colors">
                  {cat.label}
                </h3>
                <p className="text-[#555555] text-xs mb-3">{cat.desc}</p>
                <span className="font-display text-xs tracking-widest text-[#e01c1c]/60 group-hover:text-[#e01c1c] transition-colors">
                  {cat.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}