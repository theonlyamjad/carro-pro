"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#020202] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #fa0000 0, #fa0000 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}/>

      <div className="max-w-xl w-full border border-white/5 bg-[#080808] p-12 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#cc1f1f] animate-pulse" />
          <span className="font-display text-[0.6rem] tracking-[0.5em] text-[#cc1f1f] uppercase font-900">
            System Failure
          </span>
        </div>

        <h1 className="font-display text-4xl font-900 text-white uppercase tracking-tighter mb-4">
          Erreur de <br /> Synchronisation
        </h1>
        
        <p className="text-white/30 text-xs uppercase tracking-widest leading-relaxed mb-10">
          Une exception technique a interrompu la liaison avec le serveur. 
          Veuillez tenter une réinitialisation du module.
        </p>

        <button
          onClick={() => reset()}
          className="group relative flex items-center justify-center gap-3 border border-white/10 hover:border-[#cc1f1f] text-white font-display font-900 text-[0.7rem] uppercase tracking-[0.25em] px-10 py-5 transition-all duration-500 w-full"
        >
          <RotateCcw size={16} className="group-hover:rotate-180 transition-transform duration-700" />
          Réinitialiser le Module
        </button>
      </div>
    </div>
  );
}