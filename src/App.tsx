import React, { useState } from 'react';
import GeometricBackground from './components/GeometricBackground';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import CasesShowcase from './components/CasesShowcase';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import MultiStepForm from './components/MultiStepForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Geometric Background */}
      <GeometricBackground />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero onOpenForm={() => setIsFormOpen(true)} />
        {/* <Benefits /> */}
        {/* <HowItWorks /> */}
        {/* <CasesShowcase /> */}
        <FAQ />
        <FinalCTA onOpenForm={() => setIsFormOpen(true)} />
      </main>
      
      {/* Multi-step Form Modal */}
      {isFormOpen && (
        <MultiStepForm onClose={() => setIsFormOpen(false)} />
      )}
    </div>
  );
}

export default App;