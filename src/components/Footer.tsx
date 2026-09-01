import { ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface FooterProps {
  onNavigateToContact?: () => void;
}

export function Footer({ onNavigateToContact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de atuação', href: '#areas' },
    { label: 'Sobre e método', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#0A101E] border-t border-brand-gold/15 text-slate-300 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-brand-gold/10">
          {/* Brand Signature & Positioning (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative flex items-center justify-center w-9 h-9 border border-brand-gold/40 bg-surface-elevated">
                <span className="font-serif text-lg font-semibold text-brand-gold">A</span>
                <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-brand-gold"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-medium text-foreground">
                  Aurora
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-medium">
                  Advocacia Empresarial
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-light max-w-sm leading-relaxed pt-2">
              Assessoria jurídica orientada ao ambiente corporativo. Estratégia, prevenção de riscos e
              sustentação jurídica para decisões determinantes.
            </p>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    id={`footer-link-${link.href.replace('#', '')}`}
                    className="text-sm text-slate-400 hover:text-foreground transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Atendimento
            </h4>
            <div className="space-y-2 text-sm text-slate-400 font-light">
              <p>{CONTACT_INFO.address}</p>
              <p>
                Telefone:{' '}
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-foreground hover:text-brand-gold transition-colors"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contato"
                id="footer-cta-button"
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-gold-light transition-colors group"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light text-center md:text-left">
          <p className="max-w-xl">
            As informações deste site possuem caráter institucional e não representam promessa ou
            garantia de resultado.
          </p>
          <p>
            © {currentYear} Aurora Advocacia Empresarial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
