import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PILLARS, WORKFLOW_STEPS, STATS } from '../data';
import { fadeInUp, staggerContainer, luxuryEase } from '../lib/animations';

function AnimatedCounter({ value, prefix = '0' }: { value: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1200; // ms
    const incrementTime = 50;
    const stepCount = duration / incrementTime;
    const increment = end / stepCount;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-gold font-light">
      {count < 10 ? `${prefix}${count}` : count}
    </span>
  );
}

export function AboutMethod() {
  return (
    <section
      id="sobre"
      aria-label="Sobre, posicionamento e método de atuação"
      className="relative py-24 lg:py-32 bg-[#0F172A] border-t border-brand-gold/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Top Eyebrow & Title */}
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
              id="sobre-eyebrow"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold"
            >
              SOBRE E MÉTODO
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            id="sobre-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[-0.01em] text-foreground mb-8 font-normal"
          >
            O direito não deve chegar depois da decisão.
          </motion.h2>
        </motion.div>

        {/* Narrative & Institutional Block with Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">
          {/* Left Text Block (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: luxuryEase }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed">
              A Aurora Advocacia Empresarial integra análise jurídica e compreensão de negócio para
              atuar antes que riscos se transformem em obstáculos. Cada orientação parte do contexto da
              empresa, das prioridades da operação e das consequências práticas de cada escolha.
            </p>
            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
              Mais do que apresentar possibilidades legais, a atuação busca organizar cenários,
              esclarecer impactos e construir caminhos juridicamente consistentes para decisões
              empresariais relevantes.
            </p>
          </motion.div>

          {/* Right Quote Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: luxuryEase, delay: 0.15 }}
            className="lg:col-span-5 relative bg-surface-editorial border-l-2 border-brand-gold p-8 sm:p-10 border border-brand-gold/20"
          >
            <span
              aria-hidden="true"
              className="font-serif text-5xl text-brand-gold/30 block leading-none mb-3"
            >
              “
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl text-foreground font-light leading-snug mb-6 italic">
              Clareza jurídica para decidir com segurança, agir com precisão e avançar com
              consistência.
            </blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-brand-gold/15">
              <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
              <span className="text-xs uppercase tracking-widest text-brand-gold font-medium">
                Princípio Norteador Aurora
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3 Pillars of Action */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-4 h-[1px] bg-brand-gold" />
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold">
              PILARES DE ATUAÇÃO
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: idx * 0.1 }}
                className="bg-surface-elevated/50 border border-brand-gold/15 p-8 relative hover:border-brand-gold/40 transition-colors"
              >
                <span className="text-xs font-mono text-brand-gold block mb-4">
                  0{idx + 1}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-foreground font-normal mb-3">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4-Step Strategic Workflow */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-4 h-[1px] bg-brand-gold" />
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold">
              FLUXO ESTRATÉGICO DE TRABALHO
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: idx * 0.08 }}
                className="relative bg-surface-editorial border border-white/5 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-gold/15">
                    <span className="font-serif text-2xl font-light text-brand-gold">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400">
                      Etapa
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-foreground font-medium mb-3">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conceptual Animated Stats Bar */}
        <div className="border-t border-b border-brand-gold/20 py-12 lg:py-16 bg-surface-editorial/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start sm:items-center text-left sm:text-center px-4"
              >
                <AnimatedCounter value={stat.value} prefix={stat.prefix} />
                <span className="text-xs sm:text-sm text-slate-300 font-light tracking-wide mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
