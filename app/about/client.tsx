"use client";

import { ShieldCheck, Wallet, Clock, Award } from "lucide-react";

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-[#020202] pt-32 pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-size-[4rem_4rem opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20 lg:mb-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-0.5 w-12 bg-[#cc1f1f] shadow-[0_0_10px_#cc1f1f]" />
              <span className="font-display text-[0.65rem] tracking-[0.5em] uppercase text-[#cc1f1f] font-900">
                Structure & Vision
              </span>
            </div>
            <h1 className="font-display font-900 text-6xl lg:text-9xl text-white tracking-tighter uppercase leading-[0.85]">
              L'Atelier <br />
              <span className="italic text-white/20">CarroPro</span>
            </h1>
          </div>
          <div className="lg:mb-3 max-w-xs border-l border-white/10 pl-6">
            <p className="text-white/40 text-xs lg:text-sm leading-relaxed font-light uppercase tracking-widest">
              La référence technique pour vos pièces carrosserie d'origine vérifiées OEM à Agadir.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 border border-white/5 mb-24">
          <div className="lg:col-span-7 bg-[#080808] p-10 md:p-16 relative">
            <h2 className="font-display font-800 text-4xl text-white mb-8 uppercase tracking-tight">
              NOTRE GENÈSE<br/> ET <span className="text-[#cc1f1f]">AMBITION</span>
            </h2>
            <div className="space-y-6 text-white/40 text-sm md:text-base leading-relaxed font-light">
              <p>
                CarroPro est né d'une passion pour l'automobile et d'un constat
                simple : trouver des pièces carrosserie d'origine de qualité à bon prix
                n'était pas toujours facile à Agadir.
              </p>
              <p>
                Nous avons créé CarroPro pour vous offrir une alternative fiable
                aux pièces neuves coûteuses — des pièces rigoureusement
                sélectionnées, vérifiées OEM et disponibles immédiatement.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'être l'index local pour
                les composants d'origine, avec un stock constamment
                renouvelé pour préserver l'intégrité de votre châssis.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: "repeating-linear-gradient(45deg, #fa0000 0, #fa0000 1px, transparent 0, transparent 50%)", backgroundSize: "15px 15px" }}/>
          </div>
          <div className="lg:col-span-5 bg-[#050505] p-10 md:p-16 flex flex-col justify-center">
            <h3 className="font-display text-[0.7rem] tracking-[0.4em] text-white/20 uppercase font-black mb-12">
              Piliers techniques
            </h3>
            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
              {[
                { icon: ShieldCheck, title: "QUALITÉ", desc: "Vérification OEM rigoureuse" },
                { icon: Wallet, title: "OPTIMISATION", desc: "Coûts compétitifs validés" },
                { icon: Clock, title: "LOGISTIQUE", desc: "Disponibilité immédiate" },
                { icon: Award, title: "FIABILITÉ", desc: "Ajustement parfait garanti" },
              ].map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-[#080808] p-8 group hover:bg-[#0d0d0d] transition-colors relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                       <Icon size={18} className="text-[#cc1f1f]" />
                       <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#cc1f1f] group-hover:shadow-[0_0_8px_#cc1f1f] transition-all duration-300" />
                    </div>
                    <h4 className="font-display text-[0.65rem] tracking-[0.2em] font-800 text-white mb-1.5 uppercase">
                      {v.title}
                    </h4>
                    <p className="text-white/30 text-[0.6rem] tracking-widest font-light uppercase">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border border-white/5 bg-[#080808] p-12 relative overflow-hidden">
          <h2 className="font-display font-800 text-4xl text-white mb-16 uppercase tracking-tight text-center">
            NOS <span className="text-[#cc1f1f] italic">ENGAGEMENTS</span> TECHNIQUES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { value: "CERTIFICATION OEM", desc: "Toutes les pièces sont inspectées et validées avant la mise en stock." },
              { value: "OPTIMISATION COÛTS", desc: "Économisez jusqu'à 60% par rapport au neuf sans compromis structurel." },
              { value: "SYSTÈME LOGISTIQUE 24H", desc: "Stock important mis à jour en permanence pour répondre à vos besoins." },
            ].map((e) => (
              <div key={e.value} className="bg-[#050505] p-10 text-center flex flex-col items-center justify-center group relative overflow-hidden">
                <div className="font-display text-lg text-[#cc1f1f] mb-3 tracking-[0.2em] uppercase font-900 transition-transform duration-500 group-hover:-translate-y-1">
                  {e.value}
                </div>
                <p className="text-white/30 text-xs md:text-sm font-light leading-relaxed group-hover:text-white/50 transition-colors">{e.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#cc1f1f] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}