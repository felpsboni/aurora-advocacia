import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeInUp, staggerContainer, luxuryEase } from '../lib/animations';

interface HeroProps {
  onNavigateToContact?: () => void;
}

export function Hero({ onNavigateToContact }: HeroProps) {
  return (
    <section
      id="inicio"
      aria-label="Apresentação institucional"
      className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#1A243B]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Background Grid Line Accents */}
      <div className="absolute inset-0 pointer-events-none bg-noise opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content: 7 cols on Desktop) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              <span
                id="hero-eyebrow"
                className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-brand-gold"
              >
                AURORA ADVOCACIA EMPRESARIAL · SÃO PAULO
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              id="hero-main-headline"
              className="font-serif text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.02] tracking-[-0.02em] text-foreground mb-6 font-normal"
            >
              Estratégia jurídica para decisões que{' '}
              <span className="italic font-light text-brand-gold">definem</span> empresas.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              id="hero-subheadline"
              className="text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-8 lg:mb-10"
            >
              Assessoria empresarial que transforma complexidade jurídica em direção clara para
              prevenir riscos, proteger operações e sustentar decisões de alto impacto.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <a
                href="#contato"
                id="hero-primary-cta"
                onClick={onNavigateToContact}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-ink bg-brand-gold hover:bg-brand-gold-light border border-brand-gold transition-all duration-200 gold-glow-hover"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#areas"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-medium tracking-wider uppercase text-foreground bg-surface-elevated/60 hover:bg-surface-elevated border border-white/10 hover:border-brand-gold/40 transition-all duration-200"
              >
                <span>Conhecer áreas de atuação</span>
                <ArrowDown className="w-3.5 h-3.5 text-brand-gold" />
              </a>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              variants={fadeInUp}
              id="hero-trust-line"
              className="pt-6 border-t border-brand-gold/15 flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400 font-light"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
              <p className="tracking-wide">
                Atuação consultiva · Prevenção de riscos · Defesa estratégica
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column (Visual Composition: 5 cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: luxuryEase, delay: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Asymmetric Frame & Layering */}
              <div className="relative p-3 sm:p-4 bg-surface-editorial border border-brand-gold/20 shadow-2xl">
                {/* Gold corner accent marks */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-gold" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-gold" />

                {/* Primary Editorial Image */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    alt="Arquitetura contemporânea executiva refletindo precisão e perspectiva corporativa"
                    width={600}
                    height={800}
                    loading="eager"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-110 opacity-80 hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />

                  {/* Watermark Monogram */}
                  <div
                    aria-hidden="true"
                    className="absolute top-4 right-4 font-serif text-6xl text-brand-gold/15 select-none pointer-events-none font-bold"
                  >
                    A
                  </div>

                  {/* Institutional Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0F172A]/85 backdrop-blur-md border border-brand-gold/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-brand-gold">
                        Prática Institucional
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">SP · BR</span>
                    </div>
                    <p className="font-serif text-sm sm:text-base text-foreground leading-snug">
                      Assessoria jurídica estruturada para a solidez do negócio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Offset floating accent element */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-surface-elevated border border-brand-gold/30 p-4 shadow-xl max-w-[200px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-300">
                    Foco Empresarial
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-tight">
                  Orientação para decisões estratégicas de alta relevância.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
