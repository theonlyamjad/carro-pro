"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Tag, Clock, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: ShieldCheck,
    title: "QUALITÉ",
    desc: "Pièces testées et en bon état. Chaque pièce est vérifiée avant la vente pour vous garantir fiabilité et durabilité.",
  },
  {
    icon: Tag,
    title: "PRIX",
    desc: "Compétitifs pour tous. Nous vous offrons les meilleurs prix du marché sans compromis sur la qualité.",
  },
  {
    icon: Clock,
    title: "SERVICE",
    desc: "Rapide, sérieux et professionnel. Votre demande traitée dans les meilleurs délais avec un suivi personnalisé.",
  },
  {
    icon: MessageSquare,
    title: "CONSEILS",
    desc: "Personnalisés pour bien choisir. Notre équipe vous guide vers la pièce idéale adaptée à votre véhicule.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pillar-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* background accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#e01c1c] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-10 h-[3px] bg-[#e01c1c]" />
            <span className="font-display text-sm tracking-[0.3em] text-[#e01c1c]">
              POURQUOI NOUS CHOISIR
            </span>
            <div className="w-10 h-[3px] bg-[#e01c1c]" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white">
            QUALITÉ • PRIX •{" "}
            <span className="text-[#e01c1c]">SERVICE</span>
          </h2>
          <p className="text-[#a0a0a0] mt-4 max-w-xl mx-auto">
            On a tout ce qu'il vous faut. Votre satisfaction est notre priorité.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="pillar-item group bg-black hover:bg-[#0d0d0d] p-8 transition-colors duration-300 opacity-0"
              >
                <div className="w-12 h-12 border border-[#e01c1c]/30 group-hover:border-[#e01c1c] group-hover:bg-[#e01c1c]/10 flex items-center justify-center mb-6 transition-all duration-300">
                  <Icon size={22} className="text-[#e01c1c]" />
                </div>
                <h3 className="font-display text-2xl tracking-widest text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">
                  {p.desc}
                </p>

                {/* bottom accent */}
                <div className="mt-6 w-0 h-[2px] bg-[#e01c1c] group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 border border-[#1e1e1e] divide-x divide-[#1e1e1e]">
          {[
            { value: "1000+", label: "PIÈCES EN STOCK" },
            { value: "100%", label: "SATISFACTION CLIENT" },
            { value: "24H", label: "DISPONIBILITÉ RAPIDE" },
          ].map((stat) => (
            <div key={stat.label} className="py-8 text-center">
              <div className="font-display text-4xl sm:text-5xl text-[#e01c1c] mb-1">
                {stat.value}
              </div>
              <div className="font-display text-xs tracking-[0.2em] text-[#555555]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}