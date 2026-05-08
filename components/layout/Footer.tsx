import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-1 mb-4">
            <span className="font-display text-3xl text-white">CARRO</span>
            <span className="font-display text-3xl text-[#e01c1c]">PRO</span>
          </div>
          <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-xs">
            Pièces carrosserie d'occasion pour toutes marques de voitures.
            Qualité garantie, prix imbattables, disponible rapidement.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h3 className="font-display text-lg tracking-widest text-white mb-4">
            NAVIGATION
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              { href: "/", label: "Accueil" },
              { href: "/catalog", label: "Catalogue" },
              { href: "/about", label: "À propos" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#a0a0a0] hover:text-[#e01c1c] text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg tracking-widest text-white mb-4">
            CONTACTEZ-NOUS
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="tel:0635620605"
                className="flex items-center gap-2 text-[#a0a0a0] hover:text-white text-sm transition-colors"
              >
                <Phone size={14} className="text-[#e01c1c]" />
                0635 620 605
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/212635620605"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#a0a0a0] hover:text-white text-sm transition-colors"
              >
                <MessageCircle size={14} className="text-[#e01c1c]" />
                WhatsApp disponible
              </a>
            </li>
            <li>
              <span className="flex items-center gap-2 text-[#a0a0a0] text-sm">
                <MapPin size={14} className="text-[#e01c1c]" />
                Agadir, Maroc
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1e1e1e] px-4 py-4 text-center">
        <p className="text-[#555555] text-xs tracking-widest font-display">
          CARROPRO — LA RÉFÉRENCE POUR VOS PIÈCES CARROSSERIE D'OCCASION
        </p>
      </div>
    </footer>
  );
}