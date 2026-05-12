import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020202] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20rem] font-900 text-white/[0.02] pointer-events-none">
        404
      </div>

      <div className="max-w-xl w-full border border-white/5 bg-[#080808] p-12 relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 border border-[#cc1f1f]/20 flex items-center justify-center">
            <AlertTriangle size={32} className="text-[#cc1f1f]" />
          </div>
        </div>

        <h1 className="font-display text-4xl font-900 text-white uppercase tracking-tighter mb-4">
          Composant <span className="text-[#cc1f1f]">Introuvable</span>
        </h1>
        
        <p className="text-white/40 text-sm uppercase tracking-widest leading-relaxed mb-10">
          L'adresse demandée n'existe pas dans notre base de données technique. 
          Le fichier a peut-être été déplacé ou supprimé de l'index.
        </p>

        <Link
          href="/"
          className="group relative inline-flex items-center gap-3 bg-[#cc1f1f] text-white font-display font-900 text-[0.7rem] uppercase tracking-[0.25em] px-10 py-5 transition-all duration-500 overflow-hidden w-full justify-center"
        >
          <span className="relative z-10 flex items-center gap-3 text-white transition-colors duration-500 group-hover:text-black">
            <ArrowLeft size={16} /> Retour au Hub Principal
          </span>
          <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
        </Link>
      </div>
    </div>
  );
}