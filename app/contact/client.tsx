"use client";

import { Phone, MessageCircle, MapPin, Clock, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "+212635620605";

export default function ContactClient() {
  // Pre-formatted WhatsApp Message for urgent sourcing
  const urgentMessage = `Liaison d'Urgence CarroPro : Je recherche une pièce d'origine compatible avec mon VIN. Pouvez-vous vérifier l'Index ?`;
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(urgentMessage)}`;

  return (
    <div className="min-h-screen bg-[#020202] pt-32 pb-24 overflow-hidden relative">
      
      {/* ── DESIGN BACKGROUND : THE SOUL OF THE SITE (Retained) ── */}
      {/* Dynamic Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      {/* Signature Diagonal Blueprint Stripes */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #fa0000 0, #fa0000 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}/>

      {/* ── PAGE HEADER (Technical Magazine Style) ── */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20 lg:mb-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-[#cc1f1f] shadow-[0_0_10px_#cc1f1f]" />
              <span className="font-display text-[0.65rem] tracking-[0.5em] uppercase text-[#cc1f1f] font-900">
                Liaison & Localisation
              </span>
            </div>
            <h1 className="font-display font-900 text-6xl lg:text-9xl text-white tracking-tighter uppercase leading-[0.85]">
              Contact <br />
              <span className="italic text-white/20">Direct</span>
            </h1>
          </div>
          <div className="lg:mb-3 max-w-xs border-l border-white/10 pl-6">
            <p className="text-white/40 text-xs lg:text-sm leading-relaxed font-light uppercase tracking-widest">
              L'Atelier vous accueille pour le retrait de vos composants certifiés. Sourcing réactif disponible immédiatement via nos canaux de liaison.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION LIAISON & DATA (The Integrated Container) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 border border-white/5 mb-24 overflow-hidden Glassmorph">
          
          {/* LEFT: THE LIAISON PORTS (7 columns) */}
          <div className="lg:col-span-7 bg-[#080808] p-10 md:p-16 relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            <h2 className="font-display font-800 text-4xl text-white mb-10 uppercase tracking-tight">
              CANAUX DE <span className="text-[#cc1f1f]">COMMANDE</span>
            </h2>

            <div className="space-y-10">
              {/* Phone Liaison */}
              <div className="flex items-start gap-6 group cursor-crosshair">
                <div className="w-14 h-14 border border-[#cc1f1f]/20 group-hover:border-[#cc1f1f]/50 group-hover:bg-[#cc1f1f]/10 flex items-center justify-center shrink-0 transition-all duration-300">
                  <Phone size={22} className="text-[#cc1f1f]" />
                </div>
                <div>
                  <div className="font-display text-[0.6rem] tracking-[0.4em] text-white/20 uppercase font-black mb-1.5">
                    Liaison Vocale
                  </div>
                  <a
                    href="tel:0635620605"
                    className="font-display text-3xl font-800 text-white hover:text-[#cc1f1f] transition-all tracking-tighter"
                  >
                    06 35 62 06 05
                  </a>
                  <p className="text-white/30 text-[0.65rem] tracking-widest mt-1 uppercase font-light">Service technique et conseil client</p>
                </div>
              </div>

              {/* WhatsApp Liaison */}
              <div className="flex items-start gap-6 group cursor-crosshair">
                <div className="w-14 h-14 border border-[#cc1f1f]/20 group-hover:border-[#cc1f1f]/50 group-hover:bg-[#cc1f1f]/10 flex items-center justify-center shrink-0 transition-all duration-300">
                  <MessageCircle size={22} className="text-[#cc1f1f]" />
                </div>
                <div>
                  <div className="font-display text-[0.6rem] tracking-[0.4em] text-white/20 uppercase font-black mb-1.5">
                    Liaison Numérique d'Urgence
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-3xl font-800 text-white hover:text-[#cc1f1f] transition-all flex items-center gap-3 tracking-tighter"
                  >
                    WHATSAPP DIRECT <ArrowUpRight size={22} />
                  </a>
                  <p className="text-white/30 text-[0.65rem] tracking-widest mt-1 uppercase font-light">Partage de VIN/Photos pour sourcing précis</p>
                </div>
              </div>
            </div>
            
            {/* Red Pulsing Aura Accent */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#cc1f1f] opacity-[0.03] blur-[60px]" />
          </div>

          {/* RIGHT: THE STATUS DASHBOARD (5 columns) */}
          <div className="lg:col-span-5 bg-[#050505] flex flex-col">
            
            {/* Locale Module (Industrial Spec) */}
            <div className="p-10 md:p-12 border-b border-white/5 group hover:bg-white/[0.02] transition-colors cursor-crosshair flex-grow">
                <div className="flex items-center justify-between mb-8 relative">
                  <MapPin size={16} className="text-[#cc1f1f]" />
                </div>
                <h4 className="font-display text-white text-3xl font-800 uppercase tracking-tighter">AGADIR, MAROC</h4>
                <p className="text-white/30 text-[0.6rem] tracking-[0.2em] uppercase mt-1">Hay El Farah</p>
                
                {/* Secondary detail (Replacing exact address for tech feel) */}
                <p className="text-[#cc1f1f] text-[0.55rem] font-black tracking-[0.3em] uppercase mt-4">Atelier Technique & Point Retrait</p>
            </div>

            {/* Availability Module (Cockpit Data) */}
            <div className="p-10 md:p-12 group hover:bg-white/[0.02] transition-colors flex-grow">
                <div className="flex items-center justify-between mb-8 relative">
                  <Clock size={16} className="text-[#cc1f1f]" />
                  <span className="text-[0.5rem] tracking-[0.4em] text-white/20 font-black">OP_HOURS</span>
                </div>
                <h4 className="font-display text-white text-3xl font-800 uppercase tracking-tighter">09:00 — 19:00</h4>
                <p className="text-white/30 text-[0.6rem] tracking-[0.2em] uppercase mt-1">Lundi au Samedi / Service Client</p>
            </div>

          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          
          <a href="tel:0635620605" className="group relative flex items-center justify-between bg-[#cc1f1f] px-10 py-6 transition-all duration-500 hover:pr-14 overflow-hidden">
            <div className="flex items-center gap-4 relative z-10">
              <Phone size={22} className="text-white group-hover:text-black group-hover:scale-110 transition-transform" />
              <span className="font-display font-900 text-white tracking-[0.3em] text-xs uppercase">Liaison Vocale Immédiate</span>
            </div>
            <ArrowUpRight size={22} className="text-white group-hover:text-black relative z-10 group-hover:rotate-45 transition-transform" />
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <style jsx>{`.group:hover span, .group:hover svg { color: #000 !important; }`}</style>
          </a>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group border border-white/10 px-10 py-6 transition-all duration-500 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <MessageCircle size={22} className="text-white group-hover:text-[#25D366] transition-colors" />
              <span className="font-display font-900 text-white tracking-[0.3em] text-xs uppercase">WhatsApp Business Sourcing</span>
            </div>
            <ArrowUpRight size={22} className="text-white/20 group-hover:text-white transition-colors" />
          </a>

        </div>
        <div className="mt-20 flex justify-between items-center opacity-10">
          <div className="text-[0.5rem] tracking-[1em] text-white font-display uppercase">© CarroPro Liaison HQ v3.0</div>
          <div className="h-[1px] flex-grow bg-white mx-10" />
          <div className="text-[0.5rem] tracking-[1em] text-white font-display uppercase">Agadir Region Hub</div>
        </div>

      </div>
    </div>
  );
}