import { Building2, FileText, ShieldCheck, Users, Scale, Lock, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PRACTICE_AREAS } from '../data';
import { fadeInUp, staggerContainer } from '../lib/animations';

interface PracticeAreasProps {
  onSelectArea: (subject: string) => void;
}

const iconMap = {
  Building2,
  FileText,
  ShieldCheck,
  Users,
  Scale,
  Lock,
};

export function PracticeAreas({ onSelectArea }: PracticeAreasProps) {
  return (
    <section
      id="areas"
      aria-label="Áreas de atuação jurídica"
      className="relative py-24 lg:py-32 bg-[#0C1425] border-t border-brand-gold/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

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
              id="areas-eyebrow"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold"
            >
              ÁREAS DE ATUAÇÃO
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            id="areas-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[-0.01em] text-foreground mb-6 font-normal"
          >
            Direito conectado à realidade da empresa.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            id="areas-subheading"
            className="text-base sm:text-lg text-slate-300 font-light leading-relaxed"
          >
            Cada frente jurídica é conduzida com leitura de contexto, avaliação de risco e alinhamento
            aos objetivos do negócio.
          </motion.p>
        </motion.div>

        {/* Practice Areas Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {PRACTICE_AREAS.map((area, index) => {
            const IconComponent = iconMap[area.iconName as keyof typeof iconMap] || Building2;
            // Asymmetry: top 2 cards span 6 cols each on desktop, remaining 4 span 6 cols on md and 6 or 6 on lg
            const isLarge = index === 0 || index === 1;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className={`${
                  isLarge ? 'lg:col-span-6' : 'lg:col-span-6'
                } group relative bg-surface-elevated/70 hover:bg-surface-elevated border border-brand-gold/15 hover:border-brand-gold/45 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/40`}
              >
                {/* Gold Accent corner on hover */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-gold opacity-30 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
                </div>

                <div>
                  {/* Top line with Number and Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-gold/10">
                    <span className="font-serif text-2xl sm:text-3xl font-light text-brand-gold/80 tracking-wider">
                      {area.number}
                    </span>
                    <div className="w-10 h-10 flex items-center justify-center border border-brand-gold/20 bg-[#0F172A] group-hover:border-brand-gold/60 transition-colors">
                      <IconComponent className="w-5 h-5 text-brand-gold stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    id={`area-title-${area.id}`}
                    className="font-serif text-xl sm:text-2xl text-foreground font-normal mb-4 group-hover:text-brand-gold-light transition-colors"
                  >
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-slate-300 font-light leading-relaxed mb-8">
                    {area.description}
                  </p>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => onSelectArea(area.subjectKey)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold group-hover:text-brand-gold-light transition-colors"
                    aria-label={`Solicitar orientação para ${area.title}`}
                  >
                    <span>Consultar esta área</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
