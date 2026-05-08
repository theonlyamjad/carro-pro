"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageCircle, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#0d0d0d] relative overflow-hidden"
    >
      {/* Red accent top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#e01c1c]" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #e01c1c 0, #e01c1c 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="cta-content max-w-3xl mx-auto text-center opacity-0">
          <span className="font-display text-sm tracking-[0.3em] text-[#e01c1c] block mb-4">
            CONTACTEZ-NOUS
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            VENEZ NOUS
            <br />
            <span className="text-[#e01c1c]">RENDRE VISITE</span>
          </h2>
          <p className="text-[#a0a0a0] mb-10">
            On vous accueille avec plaisir ! Disponible également sur WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0635620605"
              className="group flex items-center gap-3 bg-[#e01c1c] hover:bg-[#b01414] text-white font-display text-xl tracking-widest px-8 py-4 transition-colors w-full sm:w-auto justify-center"
            >
              <Phone size={20} />
              0635 620 605
            </a>
            <a
              href="https://wa.me/212635620605"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/20 hover:border-white text-white font-display text-xl tracking-widest px-8 py-4 transition-colors w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              WHATSAPP
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-[#555555]">
            <MapPin size={14} className="text-[#e01c1c]" />
            <span className="font-display text-sm tracking-widest">
              AGADIR, MAROC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}