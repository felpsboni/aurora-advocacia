import { Shield, Eye, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { TRUST_CARDS } from '../data';
import { fadeInUp, staggerContainer } from '../lib/animations';

const trustIcons = [Eye, Shield, Compass];

export function InstitutionalTrust() {
  return (
    <section
      id="confianca"
      aria-label="Confiança institucional e rigor ético"
      className="relative py-24 lg:py-32 bg-[#0B1222] border-t border-brand-gold/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-brand-gold"></span>
            <span
              id="trust-eyebrow"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold"
            >
              RIGOR INSTITUCIONAL
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            id="trust-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[-0.01em] text-foreground mb-6 font-normal"
          >
            Confiança construída em cada decisão.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            id="trust-subheading"
            className="text-base sm:text-lg text-slate-300 font-light leading-relaxed"
          >
            Uma relação jurídica sólida exige discrição, comunicação precisa e entendimento real das
            prioridades da empresa.
          </motion.p>
        </motion.div>

        {/* 3 Institutional Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_CARDS.map((card, idx) => {
            const Icon = trustIcons[idx] || Shield;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="relative bg-surface-elevated/60 border border-brand-gold/15 p-8 sm:p-10 flex flex-col justify-between hover:border-brand-gold/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 flex items-center justify-center border border-brand-gold/30 bg-[#0F172A] mb-8">
                    <Icon className="w-5 h-5 text-brand-gold stroke-[1.5]" />
                  </div>

                  <h3 className="font-serif text-2xl text-foreground font-normal mb-4">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-slate-300 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-brand-gold/10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full" />
                  <span className="text-[11px] tracking-wider uppercase text-slate-400 font-medium">
                    Conduta Aurora
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
