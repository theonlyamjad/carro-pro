import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | CarroPro – Pièces Carrosserie d'Occasion",
  description:
    "Contactez CarroPro à Agadir. Appelez-nous ou envoyez un message WhatsApp pour toute demande de pièces carrosserie d'occasion.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Page header */}
      <div className="bg-[#0d0d0d] border-b border-[#1e1e1e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[3px] bg-[#e01c1c]" />
            <span className="font-display text-sm tracking-[0.3em] text-[#e01c1c]">
              NOUS TROUVER
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            CONTACT
          </h1>
          <p className="text-[#a0a0a0]">
            On vous accueille avec plaisir. Disponible sur WhatsApp.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="font-display text-3xl text-white mb-8">
              CONTACTEZ-<span className="text-[#e01c1c]">NOUS</span>
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-[#e01c1c]/30 flex items-center justify-center shrink-0 group-hover:bg-[#e01c1c]/10 transition-colors">
                  <Phone size={20} className="text-[#e01c1c]" />
                </div>
                <div>
                  <div className="font-display text-sm tracking-widest text-[#555555] mb-1">
                    TÉLÉPHONE
                  </div>
                  <a
                    href="tel:0635620605"
                    className="font-display text-2xl text-white hover:text-[#e01c1c] transition-colors"
                  >
                    0635 620 605
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-[#e01c1c]/30 flex items-center justify-center shrink-0 group-hover:bg-[#e01c1c]/10 transition-colors">
                  <MessageCircle size={20} className="text-[#e01c1c]" />
                </div>
                <div>
                  <div className="font-display text-sm tracking-widest text-[#555555] mb-1">
                    WHATSAPP
                  </div>
                  <a
                    href="https://wa.me/212635620605"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl text-white hover:text-[#e01c1c] transition-colors"
                  >
                    ÉCRIRE SUR WHATSAPP →
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-[#e01c1c]/30 flex items-center justify-center shrink-0 group-hover:bg-[#e01c1c]/10 transition-colors">
                  <MapPin size={20} className="text-[#e01c1c]" />
                </div>
                <div>
                  <div className="font-display text-sm tracking-widest text-[#555555] mb-1">
                    ADRESSE
                  </div>
                  <p className="font-display text-xl text-white">
                    Agadir, Maroc
                  </p>
                  <p className="text-[#a0a0a0] text-sm mt-1">
                    Venez nous rendre visite en boutique
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-[#e01c1c]/30 flex items-center justify-center shrink-0 group-hover:bg-[#e01c1c]/10 transition-colors">
                  <Clock size={20} className="text-[#e01c1c]" />
                </div>
                <div>
                  <div className="font-display text-sm tracking-widest text-[#555555] mb-1">
                    HORAIRES
                  </div>
                  <p className="text-white text-sm">Lun–Sam : 9h00 – 19h00</p>
                  <p className="text-[#a0a0a0] text-sm">Dimanche : sur rendez-vous</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-4 mt-10">
              <a
                href="tel:0635620605"
                className="flex-1 flex items-center justify-center gap-2 bg-[#e01c1c] hover:bg-[#b01414] text-white font-display tracking-widest py-4 transition-colors"
              >
                <Phone size={16} />
                APPELER
              </a>
              <a
                href="https://wa.me/212635620605"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-[#1e1e1e] hover:border-[#e01c1c] text-white font-display tracking-widest py-4 transition-colors"
              >
                <MessageCircle size={16} />
                WHATSAPP
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-[#0d0d0d] border border-[#1e1e1e] flex flex-col items-center justify-center p-12 min-h-[400px] text-center">
            <MapPin size={40} className="text-[#e01c1c] mb-4 opacity-50" />
            <p className="font-display text-lg tracking-widest text-[#555555] mb-2">
              AGADIR, MAROC
            </p>
            <p className="text-[#555555] text-sm mb-6">
              Adresse exacte disponible par téléphone
            </p>
            <a
              href="tel:0635620605"
              className="font-display text-sm tracking-widest text-[#e01c1c] hover:text-white transition-colors"
            >
              NOUS APPELER POUR L'ADRESSE →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}