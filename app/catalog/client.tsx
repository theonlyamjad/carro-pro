"use client";

import { useState } from "react";
import Image from "next/image"; 
import { Search, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "212635620605"; 

const categories = [
  "Tous",
  "Pare-choc",
  "Phares",
  "Ailes",
  "Capot",
  "Accessoires",
];

const demoParts = [
  { id: 1, name: "Pare-choc Avant", brand: "Dacia Logan", year: "2015-2020", cat: "Pare-choc", ref: "CP-PC-01", img: "/parts/pc-dacia.png" },
  { id: 2, name: "Phare Gauche", brand: "Peugeot 208", year: "2012-2018", cat: "Phares", ref: "CP-PH-02", img: "/parts/ph-208.png" },
];

export default function CatalogClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredParts = demoParts.filter((part) => {
    const matchesSearch = 
      searchTerm === "" || 
      part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.ref.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "Tous" || 
      part.cat === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const getWhatsAppLink = (partName: string, partRef: string) => {
    const message = `Bonjour CarroPro, je suis intéressé par la pièce : ${partName} (Réf: ${partRef}). Est-elle disponible ?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#020202] pt-24 md:pt-32 pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12 lg:mb-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <span className="h-0.5 w-12 bg-[#cc1f1f] shadow-[0_0_10px_#cc1f1f]" />
              <span className="font-display text-[0.6rem] md:text-[0.65rem] tracking-[0.5em] uppercase text-[#cc1f1f] font-900">
                Index Techniques
              </span>
            </div>
            <h1 className="font-display font-900 text-5xl md:text-6xl lg:text-9xl text-white tracking-tighter uppercase leading-[0.85]">
              Catalogue <br />
              <span className="italic text-white/20">Composants</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 border border-white/5 bg-[#050505] p-4 md:p-6 flex flex-col gap-6">
          <div className="relative w-full">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#cc1f1f]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Réf / Marque / Modèle"
              className="w-full bg-white/2 border border-white/10 text-white placeholder-white/30 pl-11 pr-4 py-4 font-display text-[0.7rem] uppercase tracking-widest focus:border-[#cc1f1f] focus:outline-none transition-colors"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap font-display text-[0.6rem] font-800 tracking-[0.25em] px-5 py-3 transition-all uppercase ${
                  cat === activeCategory
                    ? "bg-[#cc1f1f] text-white"
                    : "bg-white/2 border border-white/5 text-white/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredParts.map((part) => (
            <div
              key={part.id}
              className="group bg-[#080808] border border-white/5 p-6 md:p-8 flex flex-col min-h-105 transition-all relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-[0.6rem] font-900 tracking-[0.3em] text-[#cc1f1f]">
                  MOD. {part.cat.substring(0, 2).toUpperCase()}
                </span>
                <span className="font-display text-[0.55rem] text-white/20 uppercase">
                  {part.ref}
                </span>
              </div>
              <div className="aspect-square bg-linear-to-b from-[#0a0a0a] to-[#020202] flex items-center justify-center relative border border-white/3 mb-6">
                <div className="w-24 h-24 rounded-full border border-white/3 flex items-center justify-center relative">
                   {part.img && part.img !== "/parts/" ? (
                      <Image 
                        src={part.img} 
                        alt={part.name} 
                        fill
                        className="object-contain p-2 mix-blend-screen"
                        sizes="96px"
                      />
                    ) : (
                      <span className="text-white/10 text-[0.5rem] font-display uppercase tracking-widest">No Signal</span>
                    )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-display font-800 text-2xl text-white uppercase tracking-tighter mb-1">
                  {part.name}
                </h3>
                <p className="text-white/40 text-[0.6rem] tracking-[0.2em] uppercase font-light">
                  {part.brand} — {part.year}
                </p>
              </div>

              <div className="mt-auto">
                <a 
                  href={getWhatsAppLink(part.name, part.ref)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/3 hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] text-white font-display font-900 text-[0.65rem] uppercase tracking-[0.2em] py-4 flex items-center justify-center gap-3 transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  <span>S'informer</span>
                </a>
              </div>
              <div className="absolute -bottom-4 -right-4 font-display text-[6rem] font-900 text-white/2 pointer-events-none">
                {part.id}
              </div>
            </div>
          ))}
        </div>

        {filteredParts.length === 0 && (
          <div className="text-center py-20 border border-white/5 bg-[#080808]">
             <p className="text-white/40 font-display uppercase tracking-widest text-xs">Index vide</p>
          </div>
        )}
      </div>
    </div>
  );
}