"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Zap, Handshake ,Wallet} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "Vérification",
    desc: "Chaque pièce subit un protocole de test rigoureux. Si ce n'est pas parfait, ce n'est pas en stock.",
  },
  {
    num: "02",
    icon: Wallet,
    title: "Optimisation",
    desc: "Économisez jusqu'à 60% par rapport au neuf sans sacrifier l'intégrité structurelle de votre châssis.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Logistique",
    desc: "Système de gestion de stock en temps réel. Disponibilité immédiate pour minimiser l'immobilisation.",
  },
  {
    num: "04",
    icon: Handshake,
    title: "Assistance",
    desc: "Conseils techniques d'experts pour identifier la référence exacte compatible avec votre VIN.",
  },
];

export default function WhyUs() {
  const sRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".why-header",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: sRef.current, start: "top 80%" } }
      );
      gsap.fromTo(".why-card",
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power4.out",
          scrollTrigger: { trigger: ".why-card", start: "top 85%" } }
      );
    }, sRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sRef} className="relative bg-[#020202] py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#cc1f1f]/30 to-transparent" />
      <div className="absolute right-[-10%] top-[20%] w-150 h-150 rounded-full bg-[#cc1f1f]/5 blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="why-header opacity-0 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-[#cc1f1f]" />
              <span className="font-display text-[0.65rem] tracking-[0.5em] uppercase text-[#cc1f1f] font-900">Protocole CarroPro</span>
            </div>
            <h2 className="font-display font-900 text-6xl lg:text-8xl text-white tracking-tighter uppercase leading-[0.85]">
              L'Exigence <br /> 
              <span className="text-[#cc1f1f] italic">Absolue.</span>
            </h2>
          </div>
          <div className="border-l border-white/10 pl-8 pb-2">
            <p className="text-white/40 text-sm lg:text-base font-light leading-relaxed max-w-sm">
              Plus qu'un revendeur, nous sommes les gardiens de la qualité automobile à Agadir. 
              Chaque composant est une pièce d'ingénierie validée.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="why-card opacity-0 bg-[#080808] border border-white/5 p-10 group hover:border-[#cc1f1f]/40 transition-all duration-500 relative"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 bg-white/2 border border-white/5 flex items-center justify-center group-hover:bg-[#cc1f1f]/10 group-hover:border-[#cc1f1f]/50 transition-all duration-500">
                    <Icon size={20} className="text-white/20 group-hover:text-[#cc1f1f] transition-colors" />
                  </div>
                  <span className="font-display text-[0.7rem] font-900 text-white/10 group-hover:text-[#cc1f1f]/20 transition-colors">
                    REF_{p.num}
                  </span>
                </div>

                <h3 className="font-display font-800 text-xl text-white mb-4 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {p.title}
                </h3>
                <p className="text-white/30 text-[0.85rem] leading-relaxed font-light group-hover:text-white/50 transition-colors">
                  {p.desc}
                </p>
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                   <div className="absolute -top-3.75 -right-3.75 w-10 h-10 bg-white/5 rotate-45 group-hover:bg-[#cc1f1f]/20 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 border border-white/5 bg-white/1 backdrop-blur-sm">
          {[
            { v: "1000+", l: "Unités en Stock" },
            { v: "0.0mm", l: "Tolérance Ajustement" },
            { v: "24H", l: "Réponse Logistique" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`py-12 px-10 text-center relative group overflow-hidden ${i !== 2 ? 'border-r border-white/5' : ''}`}
            >
              <div className="font-display font-900 text-white text-5xl lg:text-6xl tracking-tighter mb-2 group-hover:text-[#cc1f1f] transition-colors duration-500">
                {s.v}
              </div>
              <div className="text-[0.6rem] tracking-[0.4em] text-white/20 uppercase font-black">
                {s.l}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#cc1f1f] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}