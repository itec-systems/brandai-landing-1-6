import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, Users, TrendingUp } from 'lucide-react';

interface FinalCTAProps {
  onOpenForm: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenForm }) => {
  return (
    <section data-section="final-cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white relative z-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-edit="final-cta-title">
            ¿Listo para <span className="text-yellow-300">transformar</span> tu marca?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8" data-edit="final-cta-subtitle">
            Únete a más de 500 PyMEs que ya están generando contenido profesional 
            y multiplicando sus ventas con SoloBrand.
          </p>
          
          <Button 
            onClick={onOpenForm}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-8 py-4"
          >
            <span data-edit="final-cta-button">Empezar gratis ahora</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="mt-4 text-sm opacity-75" data-edit="final-cta-no-card">
            No necesitas tarjeta de crédito • Resultados inmediatos
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-2xl font-bold mb-1" data-edit="final-stat-1-number">500+</div>
              <div className="text-sm opacity-75" data-edit="final-stat-1-label">PyMEs activas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-2xl font-bold mb-1" data-edit="final-stat-2-number">150%</div>
              <div className="text-sm opacity-75" data-edit="final-stat-2-label">Más conversiones</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-2xl font-bold mb-1" data-edit="final-stat-3-number">5 min</div>
              <div className="text-sm opacity-75" data-edit="final-stat-3-label">Tiempo promedio</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <svg className="w-8 h-8 mx-auto mb-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <div className="text-2xl font-bold mb-1" data-edit="final-stat-4-number">70%</div>
              <div className="text-sm opacity-75" data-edit="final-stat-4-label">Ahorro en costos</div>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Section */}
        <Card className="bg-yellow-400 text-gray-900 border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4" data-edit="final-urgency-title">
              🔥 Oferta por tiempo limitado
            </h3>
            <p className="text-lg mb-6" data-edit="final-urgency-desc">
              Los primeros 100 usuarios este mes obtienen 3 meses gratis de nuestro plan premium. 
              Solo quedan <span className="font-bold text-red-600">23 espacios</span> disponibles.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold" data-edit="final-urgency-days">12</div>
                <div className="text-sm opacity-75">días</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" data-edit="final-urgency-hours">05</div>
                <div className="text-sm opacity-75">horas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" data-edit="final-urgency-minutes">32</div>
                <div className="text-sm opacity-75">min</div>
              </div>
            </div>

            <Button 
              onClick={onOpenForm}
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <span data-edit="final-urgency-button">Reclamar mi descuento ahora</span>
            </Button>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-lg opacity-90 mb-6" data-edit="final-trust-title">
            Empresas que ya confían en SoloBrand:
          </p>
          
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {/* Placeholder logos */}
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold" data-edit="final-trust-logo-1">Empresa 1</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold" data-edit="final-trust-logo-2">Empresa 2</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold" data-edit="final-trust-logo-3">Empresa 3</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold" data-edit="final-trust-logo-4">Empresa 4</span>
            </div>
          </div>
        </div>

        {/* Final guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/10 rounded-full px-6 py-3">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium" data-edit="final-guarantee">
              Garantía de satisfacción 100% • 30 días para probar sin riesgo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;