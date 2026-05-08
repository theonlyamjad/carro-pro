"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

/* Ticker items */
const TICKER = [
  "PARE-CHOC", "PHARES", "AILES", "CAPOT", "ACCESSOIRES AUTO",
  "PARE-CHOC", "PHARES", "AILES", "CAPOT", "ACCESSOIRES AUTO",
];

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.35 });

      /* Stagger: label → giant word 1 → word 2 → body → CTAs → right panel → stats */
      tl
        .fromTo(".h-label",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" })
        .fromTo(".h-w1",
          { opacity: 0, y: 100, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: "expo.out" }, "-=0.1")
        .fromTo(".h-w2",
          { opacity: 0, y: 100, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: "expo.out" }, "-=0.7")
        .fromTo(".h-sub",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
        .fromTo(".h-cta",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }, "-=0.4")
        .fromTo(".h-right",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.7")
        .fromTo(".h-stat",
          { opacity: 0 },
          { opacity: 1, duration: 0.4, stagger: 0.08 }, "-=0.3");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-screen bg-black overflow-hidden grain flex flex-col">

      {/* ── Background: dot grid ── */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* ── Background: diagonal red panel (right side) ── */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[45%] pointer-events-none hidden lg:block"
        style={{
          background: "linear-gradient(to right, transparent, #0a0a0a)",
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      {/* thin diagonal slash line */}
      <div
        className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
        style={{
          right: "44.5%",
          width: "1.5px",
          background: "linear-gradient(to bottom, transparent 5%, #cc1f1f 30%, #cc1f1f 70%, transparent 95%)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          transform: "skewX(-4deg)",
        }}
      />

      {/* ── Red glow orbs ── */}
      <div className="pulse-red absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#cc1f1f] blur-[130px] opacity-0 pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[300px] h-[300px] rounded-full bg-[#cc1f1f] blur-[100px] opacity-[0.04] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="wrap relative z-10 flex flex-col lg:flex-row lg:items-center flex-1 pt-24 pb-10 gap-12 lg:gap-0">

        {/* LEFT — Headline */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Label */}
          <div className="h-label flex items-center gap-3 mb-6 opacity-0">
            <span className="rule-red-h w-6" />
            <span className="t-label">Agadir · Maroc</span>
            <span
              className="ml-2 px-2 py-0.5 text-[0.55rem] tracking-widest uppercase font-semibold border"
              style={{ borderColor: "rgba(204,31,31,0.3)", color: "rgba(204,31,31,0.8)", fontFamily: "var(--f-display)" }}
            >
              Pièces occasion
            </span>
          </div>

          {/* Giant headline */}
          <div className="overflow-hidden">
            <div className="h-w1 t-hero text-white opacity-0">La Bonne</div>
          </div>
          <div className="overflow-hidden">
            <div className="h-w2 t-hero opacity-0" style={{ color: "#cc1f1f", WebkitTextStroke: "0px" }}>
              Pièce.
            </div>
          </div>

          {/* Sub */}
          <p className="h-sub t-body max-w-sm mt-6 mb-8 opacity-0">
            Carrosserie d'occasion pour{" "}
            <span className="text-white/80">toutes marques</span> —
            pare-chocs, phares, ailes, capots & accessoires.
            Qualité testée. Prix imbattables.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link href="/catalog" className="h-cta btn btn-red opacity-0">
              Catalogue
              <ArrowRight size={13} />
            </Link>
            <a href="tel:0635620605" className="h-cta btn btn-outline opacity-0">
              <Phone size={12} />
              Appeler
            </a>
          </div>
        </div>

        {/* RIGHT panel */}
        <div className="h-right lg:w-[40%] flex flex-col justify-center gap-5 opacity-0">

          {/* Stats card */}
          <div className="border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm grid grid-cols-3 divide-x divide-white/[0.07]">
            {[
              { v: "1000+", l: "En stock" },
              { v: "5+", l: "Ans d'exp." },
              { v: "24H", l: "Dispo." },
            ].map((s) => (
              <div key={s.l} className="h-stat py-6 px-4 text-center opacity-0">
                <div className="f-display font-800 text-white" style={{ fontSize: "clamp(1.5rem,3.5vw,2.5rem)", lineHeight: 1 }}>
                  {s.v}
                </div>
                <div className="t-label mt-1" style={{ fontSize: "0.55rem" }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {["Pare-choc", "Phares", "Ailes", "Capot", "Accessoires"].map((c, i) => (
              <span
                key={c}
                className="h-stat opacity-0 f-display font-600 text-[0.6rem] tracking-widest uppercase px-3 py-1.5 border"
                style={{
                  borderColor: i === 0 ? "#cc1f1f" : "rgba(255,255,255,0.1)",
                  color:       i === 0 ? "#cc1f1f" : "rgba(255,255,255,0.4)",
                  background:  i === 0 ? "rgba(204,31,31,0.08)" : "transparent",
                }}
              >
                {c}
              </span>
            ))}
          </div>

          {/* WhatsApp badge */}
          <a
            href="https://wa.me/212635620605"
            target="_blank"
            rel="noopener noreferrer"
            className="h-stat opacity-0 flex items-center gap-3 border border-white/[0.07] hover:border-[#cc1f1f]/40 px-4 py-3 transition-colors duration-200 group"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
            <span className="t-body text-xs flex-1">Disponible sur WhatsApp</span>
            <ArrowRight size={12} className="text-white/20 group-hover:text-[#cc1f1f] transition-colors" />
          </a>
        </div>
      </div>

      {/* ── Ticker tape ── */}
      <div className="relative z-10 border-t border-white/[0.05] overflow-hidden py-3 bg-black/60 backdrop-blur-sm">
        <div className="ticker flex gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="f-display font-700 italic text-sm tracking-[0.16em] text-white/20">{item}</span>
              <span className="slash-red opacity-30" style={{ height: "0.7em" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}