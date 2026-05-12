"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

// 1. Define routes ONCE to avoid spelling mismatches
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

  return (
    <>
      <nav
        ref={barRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          solid 
            ? "py-3 bg-black/40 backdrop-blur-xl border-b border-white/5" 
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-display font-900 italic text-2xl lg:text-3xl tracking-tighter text-white uppercase transition-all duration-500 group-hover:tracking-normal">
              CARRO<span className="text-[#cc1f1f] drop-shadow-[0_0_10px_rgba(204,31,31,0.6)]">PRO</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="relative overflow-hidden group">
                  <Link
                    href={link.href}
                    className={`px-6 py-2 font-display text-[0.65rem] tracking-[0.3em] uppercase transition-all duration-300 flex items-center gap-2 ${
                      active ? "text-white font-900" : "text-white/30 hover:text-white"
                    }`}
                  >
                    <span className={`text-[#cc1f1f] text-[0.5rem] transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                      //
                    </span>
                    {link.label}
                  </Link>
                  {active && (
                    <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-[#cc1f1f] shadow-[0_0_8px_#cc1f1f]" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setOpen(!open)} className="md:hidden group p-2 z-50 relative">
            <div className="flex flex-col gap-1.5 items-end">
              <span className={`h-[1px] bg-white transition-all duration-500 ${open ? "w-6 rotate-45 translate-y-[4px]" : "w-8"}`} />
              <span className={`h-[1px] bg-[#cc1f1f] transition-all duration-500 ${open ? "opacity-0" : "w-5"}`} />
              <span className={`h-[1px] bg-white transition-all duration-500 ${open ? "w-6 -rotate-45 -translate-y-[4px]" : "w-6"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - FIXED LINKS */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-[40px] transition-all duration-700 flex flex-col justify-center items-center ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center gap-12">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href} // Uses the clean href from our array
              onClick={() => setOpen(false)}
              className="group relative font-display text-4xl font-900 tracking-[0.4em] uppercase text-white/20 hover:text-white transition-all"
            >
              <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-[#cc1f1f] text-sm opacity-0 group-hover:opacity-100 transition-all tracking-normal">
                0{i + 1}
              </span>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-10 font-display text-[0.6rem] tracking-[1em] text-white/10 uppercase">
          CarroPro Agadir Precision
        </div>
      </div>
    </>
  );
}