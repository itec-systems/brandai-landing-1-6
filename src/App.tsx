import React, { useState } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import CasesShowcase from './components/CasesShowcase';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import MultiStepForm from './components/MultiStepForm';
import GeometricBackground from './components/GeometricBackground';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      <GeometricBackground />
      
      <section data-section="hero">
        <Hero onOpenForm={() => setIsFormOpen(true)} />
      </section>
      
      <section data-section="benefits">
        <Benefits />
      </section>
      
      <section data-section="how-it-works">
        <HowItWorks />
      </section>
      
      <section data-section="cases">
        <CasesShowcase />
      </section>
      
      <section data-section="faq">
        <FAQ />
      </section>
      
      <section data-section="final-cta">
        <FinalCTA onOpenForm={() => setIsFormOpen(true)} />
      </section>
      
      {isFormOpen && (
        <MultiStepForm onClose={() => setIsFormOpen(false)} />
      )}
    </div>
  );
}

export default App;