"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, BadgeDollarSign, Zap, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Qualité",
    desc: "Chaque pièce est inspectée et testée avant mise en vente. Vous recevez uniquement des pièces en état de marche.",
  },
  {
    num: "02",
    icon: BadgeDollarSign,
    title: "Prix",
    desc: "Des tarifs compétitifs imbattables sur le marché local. Économisez sur vos réparations sans compromis.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Rapidité",
    desc: "Stock constamment renouvelé. Votre pièce disponible rapidement pour ne pas immobiliser votre véhicule.",
  },
  {
    num: "04",
    icon: Headphones,
    title: "Conseils",
    desc: "Notre équipe vous guide vers la bonne pièce pour votre véhicule. Un accompagnement personnalisé du début à la fin.",
  },
];

export default function WhyUs() {
  const sRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".why-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".why-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".why-card", start: "top 85%" } }
      );
      gsap.fromTo(".why-stat",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.5)",
          scrollTrigger: { trigger: ".why-stat", start: "top 85%" } }
      );
    }, sRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sRef} className="relative bg-black overflow-hidden" style={{ padding: "clamp(5rem,10vw,9rem) 0" }}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#d42b2b] opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="container-wide">
        {/* Header */}
        <div className="why-header opacity-0 text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="rule-red" />
            <span className="eyebrow">Pourquoi nous choisir</span>
            <span className="rule-red" />
          </div>
          <h2 className="font-display font-700 text-white mb-4"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)", textTransform: "uppercase", lineHeight: 0.9 }}>
            Qualité •{" "}
            <span className="text-[#d42b2b]">Prix</span>{" "}
            • Service
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto font-light leading-relaxed">
            Votre satisfaction est notre priorité. On a tout ce qu'il vous faut.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] mb-px">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="why-card opacity-0 bg-[#0e0e0e] p-8 group hover:bg-[#161616] transition-colors duration-300 relative overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-display font-700 text-6xl text-white/[0.03] select-none pointer-events-none leading-none">
                  {p.num}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 border border-[#d42b2b]/20 group-hover:border-[#d42b2b]/60 group-hover:bg-[#d42b2b]/08 flex items-center justify-center mb-6 transition-all duration-300">
                  <Icon size={18} className="text-[#d42b2b]" />
                </div>

                <h3 className="font-display font-600 text-white mb-3 group-hover:text-[#d42b2b] transition-colors"
                  style={{ fontSize: "1.4rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {p.title}
                </h3>
                <p className="text-white/40 text-[0.82rem] leading-relaxed font-light">
                  {p.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#d42b2b] group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 bg-[#0e0e0e] border border-white/[0.04] mt-8">
          {[
            { v: "1 000+", l: "Pièces en stock" },
            { v: "100%", l: "Contrôle qualité" },
            { v: "24H", l: "Disponibilité rapide" },
          ].map((s) => (
            <div
              key={s.l}
              className="why-stat opacity-0 py-8 px-6 text-center border-r border-white/[0.04] last:border-r-0 group hover:bg-[#161616] transition-colors duration-200"
            >
              <div className="font-display font-700 text-[#d42b2b] mb-1.5"
                style={{ fontSize: "clamp(1.8rem,4vw,3rem)", lineHeight: 1 }}>
                {s.v}
              </div>
              <div className="eyebrow text-white/25" style={{ fontSize: "0.6rem" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}