"use client";

import { useState } from "react";
import { Search, MessageCircle } from "lucide-react";

// Number to WhatsApp
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
  { id: 1, name: "Pare-choc Avant", brand: "Dacia Logan", year: "2015-2020", state: "Bon état", cat: "Pare-choc", ref: "CP-PC-01" },
  { id: 2, name: "Phare Gauche", brand: "Peugeot 208", year: "2012-2018", state: "Très bon état", cat: "Phares", ref: "CP-PH-02" },
  { id: 3, name: "Aile Avant Droite", brand: "Renault Clio 4", year: "2013-2019", state: "Bon état", cat: "Ailes", ref: "CP-AI-03" },
  { id: 4, name: "Capot Moteur", brand: "Volkswagen Golf 6", year: "2009-2012", state: "Excellent", cat: "Capot", ref: "CP-CT-04" },
  { id: 5, name: "Pare-choc Arrière", brand: "Toyota Yaris", year: "2016-2020", state: "Bon état", cat: "Pare-choc", ref: "CP-PC-05" },
  { id: 6, name: "Phare Droit + Gauche", brand: "Hyundai i10", year: "2014-2018", state: "Bon état", cat: "Phares", ref: "CP-PH-06" },
  { id: 7, name: "Aile Arrière Gauche", brand: "Citroën C3", year: "2017-2022", state: "Très bon état", cat: "Ailes", ref: "CP-AI-07" },
  { id: 8, name: "Rétroviseur Droit", brand: "Ford Focus", year: "2011-2015", state: "Bon état", cat: "Accessoires", ref: "CP-AC-08" },
  { id: 9, name: "Capot Coffre", brand: "Kia Picanto", year: "2018-2022", state: "Excellent", cat: "Capot", ref: "CP-CT-09" },
  { id: 10, name: "Pare-choc Avant", brand: "Mercedes Classe A", year: "2013-2018", state: "Très bon état", cat: "Pare-choc", ref: "CP-PC-10" },
  { id: 11, name: "Phare Full LED Gauche", brand: "BMW Série 3", year: "2015-2019", state: "Bon état", cat: "Phares", ref: "CP-PH-11" },
  { id: 12, name: "Poignée Porte", brand: "Fiat Punto", year: "2012-2016", state: "Bon état", cat: "Accessoires", ref: "CP-AC-12" },
];


export default function CatalogClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  // Filtering Logic
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

  // Pre-formatted WhatsApp Message
  const getWhatsAppLink = (partName: string, partRef: string) => {
    const message = `Bonjour CarroPro, je suis intéressé par la pièce : ${partName} (Réf: ${partRef}). Est-elle disponible ?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#020202] pt-32 pb-24 overflow-hidden relative">
      
      {/* ── DESIGN BACKGROUND : GRILLE ET MAILLAGE ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      {/* ── EN-TÊTE DE PAGE (Style Magazine Technique) ── */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20 lg:mb-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-[#cc1f1f] shadow-[0_0_10px_#cc1f1f]" />
              <span className="font-display text-[0.65rem] tracking-[0.5em] uppercase text-[#cc1f1f] font-900">
                Index Techniques
              </span>
            </div>
            <h1 className="font-display font-900 text-6xl lg:text-9xl text-white tracking-tighter uppercase leading-[0.85]">
              Catalogue <br />
              <span className="italic text-white/20">Composants</span>
            </h1>
          </div>
          <div className="lg:mb-3 max-w-xs border-l border-white/10 pl-6">
            <p className="text-white/40 text-xs lg:text-sm leading-relaxed font-light uppercase tracking-widest">
              Pièces d'origine vérifiées OEM <br />
              pour préserver l'ajustement de votre châssis.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── BARRE DE FILTRES : Le Panneau de Contrôle Technique ── */}
        <div className="mb-16 border border-white/5 bg-[#050505] p-6 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 items-center">
          
          {/* Recherche (Style Commande Système) */}
          <div className="md:col-span-4 relative md:border-r border-white/5 pr-6">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#cc1f1f]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher: Réf / Marque / Modèle"
              className="w-full bg-white/[0.02] border border-white/10 text-white placeholder-white/30 pl-11 pr-4 py-4 font-display text-[0.7rem] uppercase tracking-widest focus:border-[#cc1f1f] focus:outline-none transition-colors"
            />
          </div>

          {/* Sélecteur de Catégories (Sélecteur Matrice) */}
          <div className="md:col-span-8 flex gap-2 flex-wrap md:pl-6 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group relative overflow-hidden font-display text-[0.6rem] font-800 tracking-[0.25em] px-6 py-4 transition-all duration-300 uppercase ${
                  cat === activeCategory
                    ? "bg-[#cc1f1f] text-white"
                    : "bg-white/[0.02] border border-white/5 text-white/40 hover:border-[#cc1f1f] hover:text-white"
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {cat !== activeCategory && (
                  <div className="absolute inset-0 bg-[#cc1f1f] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── GRILLE DE PRODUITS : Composants Haute Performance ── */}
        {filteredParts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredParts.map((part) => (
              <div
                key={part.id}
                className="group bg-[#080808] border border-white/[0.05] p-8 flex flex-col justify-between min-h-[360px] transition-all duration-700 overflow-hidden relative"
              >
                {/* Effet Scan Lumineux au Survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#cc1f1f]/10 via-transparent to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />

                {/* ID Tag & Référence (Style Étiquette d'Usinage) */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="font-display text-[0.6rem] font-900 tracking-[0.3em] text-[#cc1f1f]">
                    MOD. {part.cat.substring(0, 2).toUpperCase()}
                  </span>
                  <span className="font-display text-[0.6rem] text-white/20 uppercase tracking-[0.1em]">
                    {part.ref}
                  </span>
                </div>

                {/* Informations du Composant */}
                <div className="relative z-10 mb-10 group-hover:opacity-10 transition-opacity duration-300">
                  <h3 className="font-display font-800 text-3xl text-white uppercase mb-2 tracking-tighter">
                    {part.name}
                  </h3>
                  <div className="flex items-center gap-4">
                      <p className="text-white/40 text-[0.65rem] tracking-[0.2em] uppercase font-light leading-tight">
                          {part.brand}
                      </p>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <p className="text-white/40 text-[0.65rem] tracking-[0.2em] uppercase font-light leading-tight">
                          {part.year}
                      </p>
                  </div>
                </div>

                {/* WhatsApp Button Overlay - Revealed on Hover */}
                <div className="absolute inset-0 flex items-center justify-center p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                  <a 
                    href={getWhatsAppLink(part.name, part.ref)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white font-display font-900 text-[0.7rem] uppercase tracking-[0.2em] py-5 flex items-center justify-center gap-3 active:scale-95 transition-transform"
                  >
                    <MessageCircle size={18} />
                    COMMANDER MAINTENANT
                  </a>
                </div>

                {/* Numéro ID Caché en Arrière-plan (Effet Blueprint) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[8rem] font-900 text-white/[0.02] pointer-events-none transition-colors duration-500">
                  {part.id}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-white/5 bg-[#080808]">
            <p className="text-white/40 font-display uppercase tracking-widest text-sm mb-4">Aucune pièce trouvée</p>
            <p className="text-white/20 text-xs">Ajustez votre recherche ou votre filtre.</p>
          </div>
        )}

        {/* ── CTA DE FIN : Requête Technique ── */}
        <div className="mt-24 bg-[#080808] border border-white/5 p-12 text-center relative overflow-hidden">
          {/* Décoration Blueprint Diagonal Stripes */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: "repeating-linear-gradient(45deg, #fa0000 0, #fa0000 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}/>

          <p className="font-display font-800 text-3xl text-white uppercase tracking-tight mb-8">
            Pièce manquante dans <span className="text-[#cc1f1f]">l'Index ?</span>
          </p>
          <a
            href={`tel:${WHATSAPP_NUMBER}`}
            className="group relative inline-flex items-center gap-3 bg-[#cc1f1f] text-white font-display font-900 text-[0.7rem] uppercase tracking-[0.25em] px-12 py-5 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
               Liaison d'Urgence
            </span>
            <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
            <style jsx>{`.group:hover span { color: #000; }`}</style>
          </a>
        </div>
      </div>
    </div>
  );
}