import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  const heroImageUrl = 'https://innoboxrr-brandai.s3.amazonaws.com/landings/1/6/images/img_zCy2Q3kJ8SNU.png';

  return (
    <section data-section="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 
              data-edit="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Escala el branding de tu{' '}
              <span className="text-gradient">empresa</span>{' '}
              sin complicar tu operación
            </h1>
            
            <p 
              data-edit="hero-subtitle"
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Crea contenido visual profesional en minutos con IA y haz crecer tu marca más rápido. 
              Sin equipos grandes, sin procesos complejos, sin perder calidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={onOpenForm}
                size="lg"
                className="bg-gradient-hero text-white font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <span data-edit="hero-cta-primary">Ver cómo funciona gratis</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                <span data-edit="hero-cta-secondary">Ver casos de éxito</span>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span data-edit="hero-benefit-1">Sin setup complicado</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span data-edit="hero-benefit-2">Resultados en minutos</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span data-edit="hero-benefit-3">Calidad profesional</span>
              </div>
            </div>
          </div>
          
          {/* Visual mockups */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main hero image */}
              <img
                data-edit="hero-image"
                src={heroImageUrl}
                alt="Professional banner advertisements and marketing materials created with AI"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Floating elements overlay */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Overlay badges */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800" data-edit="hero-status">Generando en tiempo real</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <span className="text-sm font-medium text-gray-800" data-edit="hero-time">⚡ 30 segundos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;