import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Define tu marca',
      description: 'Sube tu logo, elige colores y comparte el mensaje de tu empresa. La IA aprende tu estilo en segundos.',
      icon: '🎨',
      details: 'Logo + colores + mensaje',
      time: '30 seg'
    },
    {
      number: 2,
      title: 'IA genera contenido',
      description: 'Nuestra inteligencia artificial crea banners, posts y ads adaptados perfectamente a tu identidad visual.',
      icon: '🤖',
      details: 'Banners + posts + ads',
      time: '2 min'
    },
    {
      number: 3,
      title: 'Descarga y usa',
      description: 'Recibe todas las piezas listas para usar en redes sociales, web y campañas publicitarias.',
      icon: '⚡',
      details: 'Listo para publicar',
      time: '1 clic'
    }
  ];

  return (
    <section data-section="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-edit="how-it-works-title">
            Así de <span className="text-gradient">simple</span> es crear tu contenido
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-edit="how-it-works-subtitle">
            Solo 3 pasos entre tu idea y contenido profesional listo para generar ventas.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - Desktop only */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30"></div>

          <div className="grid lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step circle */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-hero rounded-full flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute inset-0 w-24 h-24 mx-auto bg-primary/20 rounded-full animate-pulse-glow"></div>
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-3 border-primary rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-lg z-20">
                    {step.number}
                  </div>

                  {/* Time indicator */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full whitespace-nowrap">
                    {step.time}
                  </div>
                </div>

                {/* Content */}
                <Card className="bg-white/50 border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-foreground" data-edit={`step-${step.number}-title`}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-edit={`step-${step.number}-desc`}>
                      {step.description}
                    </p>
                    
                    {/* Details badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                      <span data-edit={`step-${step.number}-details`}>{step.details}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-6 text-primary text-2xl animate-pulse z-30">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Time indicator */}
        <div className="mt-16 text-center">
          <Card className="inline-block bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-green-500" />
                <div className="text-left">
                  <p className="text-lg font-semibold text-foreground" data-edit="how-it-works-total-time">
                    Tiempo total: menos de 5 minutos
                  </p>
                  <p className="text-sm text-muted-foreground" data-edit="how-it-works-total-desc">
                    De la idea al contenido listo para publicar
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process visualization */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📝</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2" data-edit="process-1-title">Tu input</h4>
              <p className="text-sm text-muted-foreground" data-edit="process-1-desc">"Necesito banners para mi restaurante italiano"</p>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧠</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2" data-edit="process-2-title">IA procesa</h4>
              <p className="text-sm text-muted-foreground" data-edit="process-2-desc">Análisis de marca + generación automática</p>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2" data-edit="process-3-title">Tu output</h4>
              <p className="text-sm text-muted-foreground" data-edit="process-3-desc">10 banners profesionales listos para usar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;