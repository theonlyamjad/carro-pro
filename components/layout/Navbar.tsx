"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const NAV = [
  { href: "/",        label: "Accueil",    n: "01" },
  { href: "/catalog", label: "Catalogue",  n: "02" },
  { href: "/about",   label: "À propos",   n: "03" },
  { href: "/contact", label: "Contact",    n: "04" },
];

export default function Navbar() {
  const [solid, setSolid]   = useState(false);
  const [open, setOpen]     = useState(false);
  const pathname            = usePathname();
  const barRef              = useRef<HTMLElement>(null);

  /* entry animation */
  useEffect(() => {
    gsap.fromTo(barRef.current,
      { yPercent: -100 },
      { yPercent: 0, duration: 0.9, ease: "power4.out", delay: 0.1 }
    );
  }, []);

  /* scroll solidify */
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        ref={barRef}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-black/95 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        {/* Progress-bar style top line */}
        <div className={`absolute top-0 left-0 right-0 h-[1.5px] transition-opacity duration-500 ${solid ? "opacity-100" : "opacity-0"}`}
          style={{ background: "linear-gradient(90deg, transparent, #cc1f1f 40%, #cc1f1f 60%, transparent)" }}
        />

        <div className="wrap flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-0 group select-none">
            <span className="f-display font-800 italic text-[1.55rem] tracking-tight text-white uppercase">
              Carro
            </span>
            <span className="f-display font-800 italic text-[1.55rem] tracking-tight text-[#cc1f1f] uppercase">
              Pro
            </span>
            {/* small superscript dot */}
            <sup className="ml-0.5 w-[5px] h-[5px] rounded-full bg-[#cc1f1f] inline-block mb-1 opacity-80" />
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center">
            {NAV.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative group flex items-center gap-1.5 px-5 py-1.5 transition-colors duration-150 ${
                      active ? "text-white" : "text-white/40 hover:text-white"
                    }`}
                  >
                    <span className="f-display font-600 text-[0.55rem] tracking-widest text-[#cc1f1f] opacity-50 group-hover:opacity-100 transition-opacity">
                      {l.n}
                    </span>
                    <span className="f-display font-600 text-[0.78rem] tracking-[0.14em] uppercase">
                      {l.label}
                    </span>
                    {active && (
                      <span className="absolute bottom-[-1px] left-5 right-5 h-[1.5px] bg-[#cc1f1f]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="tel:0635620605"
            className="hidden md:flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
          >
            {/* Blinking status dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#cc1f1f] animate-pulse" />
            <span className="f-display font-600 text-[0.72rem] tracking-[0.16em] uppercase">
              0635 620 605
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9"
          >
            <span className={`h-[1.5px] bg-white transition-all duration-200 origin-left ${open ? "w-6 rotate-[38deg] translate-y-[0px]" : "w-6"}`} />
            <span className={`h-[1.5px] bg-[#cc1f1f] transition-all duration-200 ${open ? "opacity-0 w-3" : "w-4"}`} />
            <span className={`h-[1.5px] bg-white transition-all duration-200 origin-left ${open ? "w-6 -rotate-[38deg]" : "w-6"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)" }}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[280px] z-50 md:hidden flex flex-col bg-[#080808] border-l border-white/[0.05] transition-transform duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/[0.05]">
          <div className="flex items-baseline gap-0">
            <span className="f-display font-800 italic text-white text-xl uppercase">Carro</span>
            <span className="f-display font-800 italic text-[#cc1f1f] text-xl uppercase">Pro</span>
          </div>
          <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white text-lg leading-none">✕</button>
        </div>

        <nav className="flex flex-col flex-1 px-6 py-10 gap-0.5">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 py-4 border-b border-white/[0.04] group"
            >
              <span className="f-display text-[0.55rem] tracking-widest text-[#cc1f1f]/50 group-hover:text-[#cc1f1f] transition-colors">{l.n}</span>
              <span className="f-display font-700 text-xl uppercase tracking-wide text-white/50 group-hover:text-white transition-colors">{l.label}</span>
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-8">
          <a href="tel:0635620605" className="btn btn-red w-full justify-center">
            0635 620 605
          </a>
        </div>
      </div>
    </>
  );
}