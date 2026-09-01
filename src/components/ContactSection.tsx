import { useState, useId, FormEvent } from 'react';
import { MapPin, Phone, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_SUBJECTS, CONTACT_INFO } from '../data';
import { fadeInUp, staggerContainer } from '../lib/animations';

interface ContactSectionProps {
  initialSubject?: string;
}

export function ContactSection({ initialSubject }: ContactSectionProps) {
  const formId = useId();

  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    assunto: initialSubject || CONTACT_SUBJECTS[0],
    mensagem: '',
    autorizacao: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Sync if initialSubject changes
  if (initialSubject && formData.assunto !== initialSubject && !formData.nome) {
    setFormData((prev) => ({ ...prev, assunto: initialSubject }));
  }

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.nome.trim()) {
      errs.nome = 'Por favor, informe seu nome completo.';
    }
    if (!formData.empresa.trim()) {
      errs.empresa = 'Por favor, informe a empresa.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Por favor, informe um e-mail de contato.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Por favor, informe um formato de e-mail válido.';
    }
    if (!formData.telefone.trim()) {
      errs.telefone = 'Por favor, informe um telefone de contato.';
    }
    if (!formData.mensagem.trim()) {
      errs.mensagem = 'Por favor, descreva brevemente o contexto ou demanda.';
    }
    if (!formData.autorizacao) {
      errs.autorizacao = 'É necessário autorizar o uso dos dados para retorno do contato.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    // Build the formatted WhatsApp message
    // Modelo: “Olá, Aurora Advocacia Empresarial. Meu nome é [nome], represento [empresa] e gostaria de conversar sobre [assunto]. [mensagem]”
    const customText = `Olá, Aurora Advocacia Empresarial. Meu nome é ${formData.nome.trim()}, represento ${formData.empresa.trim()} e gostaria de conversar sobre ${formData.assunto}. ${formData.mensagem.trim()} (E-mail: ${formData.email.trim()} | Tel: ${formData.telefone.trim()})`;

    const targetUrl = `https://wa.me/5559872384629?text=${encodeURIComponent(customText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage('Mensagem preparada. Conclua o envio no WhatsApp.');
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section
      id="contato"
      aria-label="Formulário de contato e informações institucionais"
      className="relative py-24 lg:py-32 bg-[#0F172A] border-t border-brand-gold/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Institutional Info (5 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-brand-gold"></span>
                <span
                  id="contato-eyebrow"
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold"
                >
                  CONTATO INSTITUCIONAL
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                id="contato-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[-0.01em] text-foreground mb-6 font-normal"
              >
                Decisões importantes pedem direção jurídica.
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                id="contato-subheading"
                className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10"
              >
                Apresente o contexto da sua empresa. A Aurora analisará as informações iniciais para
                compreender a demanda e orientar o próximo contato.
              </motion.p>

              {/* Verified Contact Details */}
              <motion.div variants={fadeInUp} className="space-y-6 pt-6 border-t border-brand-gold/15">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-brand-gold/20 bg-surface-elevated flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-xs tracking-wider uppercase text-slate-400 block mb-1">
                      Localização
                    </span>
                    <p className="text-sm sm:text-base text-foreground font-light">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-brand-gold/20 bg-surface-elevated flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-xs tracking-wider uppercase text-slate-400 block mb-1">
                      Telefone e WhatsApp
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.phoneRaw}`}
                      className="text-sm sm:text-base text-foreground hover:text-brand-gold transition-colors font-light"
                      aria-label={`Ligar para ${CONTACT_INFO.phoneDisplay}`}
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Direct WhatsApp Action Link */}
            <motion.div variants={fadeInUp} className="mt-10 pt-6 border-t border-brand-gold/15">
              <a
                href={CONTACT_INFO.whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-brand-gold hover:text-brand-gold-light transition-colors group"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Lead Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-7 bg-surface-editorial border border-brand-gold/20 p-8 sm:p-10 shadow-2xl relative"
          >
            {/* Header Form Note */}
            <div className="pb-6 mb-8 border-b border-brand-gold/15 flex items-center justify-between">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-brand-gold">
                Formulário de Atendimento
              </span>
              <span className="text-[11px] text-slate-400">Atendimento sigiloso</span>
            </div>

            {statusMessage && (
              <div
                role="status"
                aria-live="polite"
                className="mb-8 p-4 bg-brand-gold/10 border border-brand-gold/40 flex items-center gap-3 text-sm text-brand-gold"
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Nome & Empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={`${formId}-nome`}
                    className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Nome completo <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id={`${formId}-nome`}
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.nome}
                    onChange={(e) => {
                      setFormData({ ...formData, nome: e.target.value });
                      if (errors.nome) setErrors({ ...errors, nome: '' });
                    }}
                    aria-invalid={!!errors.nome}
                    aria-describedby={errors.nome ? `${formId}-nome-error` : undefined}
                    placeholder="Seu nome"
                    className={`w-full bg-[#131E35] border ${
                      errors.nome ? 'border-red-500/80' : 'border-brand-gold/20 focus:border-brand-gold'
                    } px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:outline-none transition-colors`}
                  />
                  {errors.nome && (
                    <p id={`${formId}-nome-error`} className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.nome}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-empresa`}
                    className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Empresa <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id={`${formId}-empresa`}
                    type="text"
                    autoComplete="organization"
                    required
                    value={formData.empresa}
                    onChange={(e) => {
                      setFormData({ ...formData, empresa: e.target.value });
                      if (errors.empresa) setErrors({ ...errors, empresa: '' });
                    }}
                    aria-invalid={!!errors.empresa}
                    aria-describedby={errors.empresa ? `${formId}-empresa-error` : undefined}
                    placeholder="Nome da empresa"
                    className={`w-full bg-[#131E35] border ${
                      errors.empresa ? 'border-red-500/80' : 'border-brand-gold/20 focus:border-brand-gold'
                    } px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:outline-none transition-colors`}
                  />
                  {errors.empresa && (
                    <p id={`${formId}-empresa-error`} className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.empresa}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: E-mail & Telefone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={`${formId}-email`}
                    className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2"
                  >
                    E-mail corporativo <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id={`${formId}-email`}
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                    placeholder="contato@suaempresa.com.br"
                    className={`w-full bg-[#131E35] border ${
                      errors.email ? 'border-red-500/80' : 'border-brand-gold/20 focus:border-brand-gold'
                    } px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p id={`${formId}-email-error`} className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-telefone`}
                    className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Telefone / WhatsApp <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id={`${formId}-telefone`}
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => {
                      setFormData({ ...formData, telefone: e.target.value });
                      if (errors.telefone) setErrors({ ...errors, telefone: '' });
                    }}
                    aria-invalid={!!errors.telefone}
                    aria-describedby={errors.telefone ? `${formId}-telefone-error` : undefined}
                    placeholder="(11) 90000-0000"
                    className={`w-full bg-[#131E35] border ${
                      errors.telefone ? 'border-red-500/80' : 'border-brand-gold/20 focus:border-brand-gold'
                    } px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:outline-none transition-colors`}
                  />
                  {errors.telefone && (
                    <p id={`${formId}-telefone-error`} className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.telefone}
                    </p>
                  )}
                </div>
              </div>

              {/* Assunto */}
              <div>
                <label
                  htmlFor={`${formId}-assunto`}
                  className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2"
                >
                  Assunto principal
                </label>
                <select
                  id={`${formId}-assunto`}
                  value={formData.assunto}
                  onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                  className="w-full bg-[#131E35] border border-brand-gold/20 focus:border-brand-gold px-4 py-3 text-sm text-foreground focus:outline-none transition-colors"
                >
                  {CONTACT_SUBJECTS.map((sub) => (
                    <option key={sub} value={sub} className="bg-[#0F172A] text-foreground">
                      {sub}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor={`${formId}-mensagem`}
                  className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-2"
                >
                  Mensagem ou descrição da demanda <span className="text-brand-gold">*</span>
                </label>
                <textarea
                  id={`${formId}-mensagem`}
                  rows={4}
                  required
                  value={formData.mensagem}
                  onChange={(e) => {
                    setFormData({ ...formData, mensagem: e.target.value });
                    if (errors.mensagem) setErrors({ ...errors, mensagem: '' });
                  }}
                  aria-invalid={!!errors.mensagem}
                  aria-describedby={errors.mensagem ? `${formId}-mensagem-error` : undefined}
                  placeholder="Apresente brevemente o contexto da demanda..."
                  className={`w-full bg-[#131E35] border ${
                    errors.mensagem ? 'border-red-500/80' : 'border-brand-gold/20 focus:border-brand-gold'
                  } px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:outline-none transition-colors resize-y`}
                />
                {errors.mensagem && (
                  <p id={`${formId}-mensagem-error`} className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.mensagem}
                  </p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.autorizacao}
                    onChange={(e) => {
                      setFormData({ ...formData, autorizacao: e.target.checked });
                      if (errors.autorizacao) setErrors({ ...errors, autorizacao: '' });
                    }}
                    className="mt-1 h-4 w-4 rounded-none border border-brand-gold/40 bg-[#131E35] text-brand-gold focus:ring-brand-gold focus:ring-offset-0"
                  />
                  <span className="text-xs text-slate-300 font-light leading-snug">
                    Autorizo o uso destes dados exclusivamente para o retorno deste contato.
                  </span>
                </label>
                {errors.autorizacao && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.autorizacao}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="contact-form-submit-cta"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-4 px-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-ink bg-brand-gold hover:bg-brand-gold-light disabled:opacity-50 transition-all duration-200 border border-brand-gold gold-glow-hover"
              >
                <span>{isSubmitting ? 'Processando...' : 'Entrar em contato'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
