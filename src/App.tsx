import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PracticeAreas } from './components/PracticeAreas';
import { AboutMethod } from './components/AboutMethod';
import { InstitutionalTrust } from './components/InstitutionalTrust';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>(undefined);

  const handleSelectArea = useCallback((subject: string) => {
    setSelectedSubject(subject);
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleNavigateToContact = useCallback(() => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-brand-gold selection:text-brand-ink">
      {/* Fixed Navigation Bar */}
      <Navbar onNavigateToContact={handleNavigateToContact} />

      {/* Main Semantic Landmark */}
      <main id="main-content">
        {/* 01. Hero Section */}
        <Hero onNavigateToContact={handleNavigateToContact} />

        {/* 02. Practice Areas */}
        <PracticeAreas onSelectArea={handleSelectArea} />

        {/* 03. About, Positioning & Strategic Workflow */}
        <AboutMethod />

        {/* 04. Institutional Trust */}
        <InstitutionalTrust />

        {/* 05. Contact & Lead Generation */}
        <ContactSection initialSubject={selectedSubject} />
      </main>

      {/* Footer */}
      <Footer onNavigateToContact={handleNavigateToContact} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
