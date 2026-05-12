"use client";

import Link from "next/link";
import { Phone,MapPin,ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      
      {/* Decorative Serial Number Background */}
      <div className="absolute right-[-2%] bottom-0 font-display text-[15rem] font-900 text-white/[0.02] pointer-events-none select-none">
        PRO
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* ── BRAND COLUMN ── */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-1 mb-8 group">
              <span className="font-display font-900 italic text-3xl tracking-tighter text-white uppercase">
                CARRO<span className="text-[#cc1f1f]">PRO</span>
              </span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-sm font-light uppercase tracking-wide">
              L'excellence de la carrosserie à Agadir. Sourcing de précision, 
              validation technique et logistique optimisée pour les passionnés 
              et professionnels de l'automobile.
            </p>
          </div>

          {/* ── NAVIGATION ── */}
          <div className="md:col-span-3">
            <h3 className="font-display text-[0.7rem] tracking-[0.4em] text-white/20 uppercase font-black mb-10">
              Navigation // Index
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { href: "/", label: "Accueil" },
                { href: "/catalog", label: "Catalogue Pièces" },
                { href: "/about", label: "L'Atelier" },
                { href: "/contact", label: "Liaison Directe" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/50 hover:text-white text-xs uppercase tracking-[0.15em] transition-all duration-300"
                  >
                    <span className="w-0 h-[1px] bg-[#cc1f1f] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT & LOCALE ── */}
          <div className="md:col-span-4">
            <h3 className="font-display text-[0.7rem] tracking-[0.4em] text-white/20 uppercase font-black mb-10">
              Connectivité // HQ
            </h3>
            <div className="space-y-6">
              <a
                href="tel:0635620605"
                className="group flex items-center justify-between border-b border-white/5 pb-4 hover:border-[#cc1f1f]/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Phone size={14} className="text-[#cc1f1f]" />
                  <span className="text-white font-display text-sm tracking-widest uppercase">+212 6 35 62 06 05</span>
                </div>
                <ArrowUpRight size={14} className="text-white/20 group-hover:text-white transition-colors" />
              </a>

              <div className="group flex items-start justify-between border-b border-white/5 pb-4">
                <div className="flex gap-4">
                  <MapPin size={14} className="text-[#cc1f1f] mt-1" />
                  <div className="flex flex-col">
                    <span className="text-white font-display text-sm tracking-widest uppercase">Hay El Farah</span>
                    <span className="text-white/30 text-[0.65rem] tracking-[0.2em] uppercase">Agadir 80000, Maroc</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SYSTEM DATA FOOTER ── */}
        <div className=" border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <p className="text-white/10 text-[0.55rem] tracking-[0.3em] font-black uppercase">
              © {currentYear} CARROPRO SYSTEMS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}