"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )
        .fromTo(
          headlineRef.current?.children ?? [],
          { opacity: 0, y: 60, skewY: 3 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current?.children ?? [],
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#e01c1c 1px, transparent 1px), linear-gradient(90deg, #e01c1c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e01c1c] opacity-[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#e01c1c] opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* Diagonal red stripe */}
      <div
        className="absolute right-0 top-0 h-full w-[45%] hidden lg:block"
        style={{
          background:
            "linear-gradient(135deg, transparent 30%, #0d0d0d 30%, #0d0d0d 100%)",
          borderLeft: "3px solid #e01c1c",
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 border border-[#e01c1c]/40 bg-[#e01c1c]/10 px-3 py-1 mb-8 opacity-0"
          >
            <span className="w-2 h-2 bg-[#e01c1c] rounded-full animate-pulse" />
            <span className="font-display text-sm tracking-[0.2em] text-[#e01c1c]">
              PIÈCES D'OCCASION — TOUJOURS AU TOP
            </span>
          </div>

          {/* Headline */}
          <div ref={headlineRef} className="overflow-hidden mb-6">
            <h1 className="font-display text-[4.5rem] sm:text-[6rem] lg:text-[7.5rem] leading-[0.9] tracking-tight text-white opacity-0">
              LA BONNE
            </h1>
            <h1 className="font-display text-[4.5rem] sm:text-[6rem] lg:text-[7.5rem] leading-[0.9] tracking-tight text-[#e01c1c] opacity-0">
              PIÈCE
            </h1>
            <h1 className="font-display text-[4.5rem] sm:text-[6rem] lg:text-[7.5rem] leading-[0.9] tracking-tight text-white opacity-0">
              AU BON PRIX
            </h1>
          </div>

          {/* Sub */}
          <p
            ref={subRef}
            className="text-[#a0a0a0] text-lg max-w-md leading-relaxed mb-10 opacity-0"
          >
            CarroPro vous propose des pièces carrosserie d'occasion de qualité
            pour toutes marques. Pare-chocs, phares, ailes, capots et
            accessoires — près de chez vous.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Link
              href="/catalog"
              className="group flex items-center gap-2 bg-[#e01c1c] hover:bg-[#b01414] text-white font-display text-lg tracking-widest px-6 py-3 transition-colors opacity-0"
            >
              VOIR LE CATALOGUE
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="tel:0635620605"
              className="flex items-center gap-2 border border-white/20 hover:border-white text-white font-display text-lg tracking-widest px-6 py-3 transition-colors opacity-0"
            >
              <Phone size={16} />
              APPELER
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-[1px] h-12 bg-white animate-pulse" />
        <span className="font-display text-xs tracking-[0.3em] text-white">
          SCROLL
        </span>
      </div>
    </section>
  );
}