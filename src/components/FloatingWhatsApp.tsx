import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Desktop Tooltip */}
      <div
        id="whatsapp-tooltip"
        role="tooltip"
        className={`hidden sm:block px-3.5 py-1.5 bg-[#0F172A] border border-brand-gold/40 text-xs text-foreground tracking-wide font-light shadow-xl transition-all duration-200 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Entrar em contato</span>
      </div>

      {/* Floating Button */}
      <a
        href={CONTACT_INFO.whatsappHeroUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Entrar em contato pelo WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="relative group flex items-center justify-center w-14 h-14 bg-brand-gold text-brand-ink hover:bg-brand-gold-light border border-brand-gold shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        {/* Subtle Pulse Ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 border border-brand-gold/60 animate-ping opacity-25 pointer-events-none group-hover:opacity-40"
        />

        <MessageCircle className="w-6 h-6 stroke-[2]" />
      </a>
    </aside>
  );
}
