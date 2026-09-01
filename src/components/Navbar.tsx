import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigateToContact?: (subject?: string) => void;
}

export function Navbar({ onNavigateToContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de atuação', href: '#areas' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#contato' && onNavigateToContact) {
      onNavigateToContact();
    }
  };

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#inicio"
        id="skip-to-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-brand-gold focus:text-brand-ink focus:font-semibold focus:text-sm focus:shadow-lg focus:outline-none"
      >
        Pular para o conteúdo
      </a>

      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-brand-gold/15 py-3.5 shadow-lg shadow-black/20'
            : 'bg-transparent py-5 lg:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Signature */}
            <a
              href="#inicio"
              id="navbar-brand-logo"
              className="group flex items-center gap-3.5 text-foreground hover:opacity-95 transition-opacity"
              aria-label="Aurora Advocacia Empresarial - Início"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative flex items-center justify-center w-9 h-9 border border-brand-gold/40 bg-surface-elevated/80 group-hover:border-brand-gold transition-colors">
                <span className="font-serif text-lg font-semibold text-brand-gold leading-none">A</span>
                <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-brand-gold"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-medium tracking-wide text-foreground leading-tight">
                  Aurora
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
                  Advocacia Empresarial
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-navigation" aria-label="Navegação Principal" className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`nav-link-${link.href.replace('#', '')}`}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="relative text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex items-center">
              <a
                href="#contato"
                id="navbar-cta-button"
                onClick={() => handleLinkClick('#contato')}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-brand-ink bg-brand-gold hover:bg-brand-gold-light transition-all duration-200 border border-brand-gold gold-glow-hover"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 border border-brand-gold/30 text-foreground hover:border-brand-gold transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-gold" /> : <Menu className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Sheet Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer Content */}
            <motion.div
              id="mobile-navigation-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de Navegação"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-[#0F172A] border-l border-brand-gold/20 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Header in Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-brand-gold/15">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 border border-brand-gold/40 bg-surface-elevated">
                      <span className="font-serif text-base font-semibold text-brand-gold">A</span>
                    </div>
                    <span className="font-serif text-lg font-medium text-foreground">Aurora</span>
                  </div>
                  <button
                    id="mobile-menu-close"
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-10 h-10 border border-brand-gold/30 text-brand-gold hover:border-brand-gold"
                    aria-label="Fechar menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-2 mt-8" aria-label="Links do menu mobile">
                  {navLinks.map((link, idx) => (
                    <a
                      key={link.href}
                      id={`mobile-nav-${link.href.replace('#', '')}`}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="flex items-center justify-between py-3.5 px-3 text-base text-foreground/90 hover:text-brand-gold hover:bg-surface-elevated/50 border-b border-white/5 transition-all"
                    >
                      <span className="font-medium tracking-wide">{link.label}</span>
                      <span className="text-xs text-brand-gold font-serif opacity-70">0{idx + 1}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom CTA in Drawer */}
              <div className="pt-6 border-t border-brand-gold/15 space-y-4">
                <a
                  href="#contato"
                  id="mobile-drawer-cta"
                  onClick={() => handleLinkClick('#contato')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-brand-ink bg-brand-gold hover:bg-brand-gold-light transition-colors"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-muted-foreground text-center">
                  São Paulo – SP · (59) 87238-4629
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
