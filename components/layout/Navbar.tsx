"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { gsap } from "gsap";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/catalog", label: "Catalogue" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-sm border-b border-[#1e1e1e]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span
              ref={logoRef}
              className="font-display text-3xl tracking-wider text-white group-hover:text-white transition-colors"
            >
              CARRO
            </span>
            <span className="font-display text-3xl tracking-wider text-[#e01c1c]">
              PRO
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-lg tracking-widest text-[#a0a0a0] hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e01c1c] group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA phone */}
          <a
            href="tel:0635620605"
            className="hidden md:flex items-center gap-2 bg-[#e01c1c] hover:bg-[#b01414] text-white font-display text-sm tracking-widest px-4 py-2 transition-colors"
          >
            <Phone size={14} />
            0635 620 605
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white p-1"
            aria-label="Ouvrir le menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-72 bg-[#0d0d0d] border-l border-[#1e1e1e] flex flex-col p-8">
            <button
              onClick={() => setOpen(false)}
              className="self-end text-[#a0a0a0] hover:text-white mb-10"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-1 mb-10">
              <span className="font-display text-4xl text-white">CARRO</span>
              <span className="font-display text-4xl text-[#e01c1c]">PRO</span>
            </div>

            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl tracking-widest text-[#a0a0a0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="tel:0635620605"
              className="mt-auto flex items-center gap-2 bg-[#e01c1c] text-white font-display text-base tracking-widest px-4 py-3 justify-center"
            >
              <Phone size={16} />
              0635 620 605
            </a>
          </div>
        </div>
      )}
    </>
  );
}