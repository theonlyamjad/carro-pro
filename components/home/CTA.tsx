"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-inner",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sRef.current, start: "top 80%" } }
      );
    }, sRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sRef} className="relative overflow-hidden" style={{ padding: "clamp(5rem,10vw,9rem) 0", background: "#0e0e0e" }}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d42b2b] to-transparent opacity-60" />

      {/* Red glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#d42b2b] opacity-[0.07] blur-[100px] pointer-events-none animate-pulse-glow" />

      {/* Diagonal stripes background */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #d42b2b 0, #d42b2b 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="cta-inner opacity-0 max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="rule-red" />
            <span className="eyebrow">Venez nous rendre visite</span>
            <span className="rule-red" />
          </div>

          {/* Headline */}
          <h2 className="font-display font-700 text-white mb-3"
            style={{ fontSize: "clamp(3rem,8vw,6.5rem)", textTransform: "uppercase", lineHeight: 0.88 }}>
            ON VOUS
          </h2>
          <h2 className="font-display font-700 text-[#d42b2b] mb-8"
            style={{ fontSize: "clamp(3rem,8vw,6.5rem)", textTransform: "uppercase", lineHeight: 0.88 }}>
            ACCUEILLE
          </h2>

          <p className="text-white/40 text-sm font-light leading-relaxed max-w-sm mx-auto mb-10">
            Disponible également sur WhatsApp pour toute demande rapide.
            Votre satisfaction est notre priorité.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <a href="tel:0635620605" className="btn-primary w-full sm:w-auto justify-center text-sm">
              <Phone size={14} />
              0635 620 605
            </a>
            <a
              href="https://wa.me/212635620605"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto justify-center text-sm"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          {/* Location strip */}
          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <span className="eyebrow text-white/30" style={{ fontSize: "0.6rem" }}>
              📍 Agadir, Maroc
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
            <span className="eyebrow text-white/30" style={{ fontSize: "0.6rem" }}>
              Lun – Sam : 9h00 – 19h00
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
            <span className="eyebrow text-white/30" style={{ fontSize: "0.6rem" }}>
              WhatsApp disponible
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}