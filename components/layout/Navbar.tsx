"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/catalog", label: "Catalogue" },
  { href: "/about", label: "L'Atelier" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(barRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "expo.out" }
    );
    
    const handleScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <nav
        ref={barRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          solid 
            ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/10" 
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <Link href="/" aria-label="CarroPro Accueil" className="flex items-center gap-1 group">
            <span className="font-display font-900 italic text-5xl lg:text-5xl tracking-tighter text-white uppercase transition-all duration-500 group-hover:tracking-normal">
              CARRO<span className="text-[#cc1f1f] drop-shadow-[0_0:10px_rgba(204,31,31,0.6)]">PRO</span>
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-2" role="list">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="relative overflow-hidden group">
                  <Link
                    href={link.href}
                    className={`px-6 py-2 font-display text-[0.65rem] tracking-[0.3em] uppercase transition-all duration-300 flex items-center gap-2 ${
                      active ? "text-white font-900" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span className={`text-[#cc1f1f] text-[0.5rem] transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} aria-hidden="true">
                      //
                    </span>
                    {link.label}
                  </Link>
                  {active && (
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-[#cc1f1f] shadow-[0_0_8px_#cc1f1f]" />
                  )}
                </li>
              );
            })}
          </ul>
          <button 
            onClick={() => setOpen(!open)} 
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="md:hidden group p-2 z-50 relative focus:outline-none focus:ring-1 focus:ring-[#cc1f1f] rounded"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span className={`h-px bg-white transition-all duration-500 ${open ? "w-6 rotate-45 translate-y-1" : "w-8"}`} />
              <span className={`h-px bg-[#cc1f1f] transition-all duration-500 ${open ? "opacity-0" : "w-5"}`} />
              <span className={`h-px bg-white transition-all duration-500 ${open ? "w-6 -rotate-45 -translate-y-1" : "w-6"}`} />
            </div>
          </button>
        </div>
      </nav>
      <div 
        className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl transition-all duration-700 ease-in-out flex flex-col justify-center items-center ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href} 
              onClick={() => setOpen(false)}
              className="group relative font-display text-4xl font-900 tracking-[0.4em] uppercase text-white/40 hover:text-white transition-all focus:text-[#cc1f1f]"
            >
              <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-[#cc1f1f] text-sm opacity-0 group-hover:opacity-100 transition-all tracking-normal" aria-hidden="true">
                0{i + 1}
              </span>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-10 font-display text-[0.6rem] tracking-[1em] text-white/20 uppercase">
          CarroPro Agadir Precision
        </div>
      </div>
    </>
  );
}