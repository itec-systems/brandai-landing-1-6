import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Play, CheckCircle } from 'lucide-react';

const CasesShowcase: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const restaurantImage = 'https://innoboxrr-brandai.s3.amazonaws.com/landings/1/6/images/img_BKZ6nKZdDqsL.png';
  const ecommerceImage = 'https://innoboxrr-brandai.s3.amazonaws.com/landings/1/6/images/img_zxXg5WowdZZI.png';
  const socialMediaImage = 'https://innoboxrr-brandai.s3.amazonaws.com/landings/1/6/images/img_RXNLABMy5wCj.png';

  const cases = [
    {
      id: 1,
      title: 'Restaurante Familiar',
      industry: 'Gastronomía',
      challenge: 'Presencia digital limitada y materiales promocionales básicos',
      solution: 'Identidad visual completa + campañas para redes sociales',
      results: [
        '+150% engagement en redes',
        '+80% reservas online', 
        '15 piezas generadas en 1 día'
      ],
      image: restaurantImage,
      time: '2 horas',
      investment: '$8,000 MXN'
    },
    {
      id: 2,
      title: 'Tienda Online',
      industry: 'Ecommerce',
      challenge: 'Diseño inconsistente entre plataformas y bajo conversion rate',
      solution: 'Banners de producto + ads para Facebook e Instagram',
      results: [
        '+220% conversión en ads',
        '+95% CTR en banners',
        '50+ variaciones en 30 min'
      ],
      image: ecommerceImage,
      time: '45 minutos',
      investment: '$12,000 MXN'
    },
    {
      id: 3,
      title: 'Consultora Legal',
      industry: 'Servicios Profesionales',
      challenge: 'Imagen corporativa poco profesional y baja generación de leads',
      solution: 'Contenido educativo + materiales de presentación corporativa',
      results: [
        '+300% leads calificados',
        '+120% tiempo en sitio web',
        '25 presentaciones en 2 horas'
      ],
      image: socialMediaImage,
      time: '1.5 horas',
      investment: '$15,000 MXN'
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[activeCase];

  return (
    <section data-section="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-edit="cases-title">
            Casos de <span className="text-gradient">éxito reales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-edit="cases-subtitle">
            Ve cómo otras PyMEs han transformado su presencia de marca y multiplicado sus resultados con SoloBrand.
          </p>
        </div>

        {/* Main Case Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Case Image */}
          <div className="relative">
            <img
              data-edit={`case-${currentCase.id}-image`}
              src={currentCase.image}
              alt={`Caso de éxito: ${currentCase.title}`}
              className="w-full h-auto rounded-2xl shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Overlay Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="lg"
                className="w-16 h-16 rounded-full bg-white/90 text-primary hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl"
              >
                <Play className="w-6 h-6 ml-1" />
              </Button>
            </div>

            {/* Time & Investment Badges */}
            <div className="absolute top-4 left-4 space-y-2">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                ⚡ {currentCase.time}
              </div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                💰 {currentCase.investment}
              </div>
            </div>
          </div>

          {/* Case Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {currentCase.industry}
                </span>
                <span className="text-2xl font-bold text-foreground" data-edit={`case-${currentCase.id}-title`}>
                  {currentCase.title}
                </span>
              </div>
            </div>

            {/* Challenge */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-red-800 mb-2" data-edit="cases-challenge-label">
                  🚨 Reto inicial:
                </h4>
                <p className="text-red-700" data-edit={`case-${currentCase.id}-challenge`}>
                  {currentCase.challenge}
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-800 mb-2" data-edit="cases-solution-label">
                  🎯 Solución SoloBrand:
                </h4>
                <p className="text-blue-700" data-edit={`case-${currentCase.id}-solution`}>
                  {currentCase.solution}
                </p>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-green-800 mb-3" data-edit="cases-results-label">
                  ✨ Resultados obtenidos:
                </h4>
                <div className="space-y-2">
                  {currentCase.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-green-700" data-edit={`case-${currentCase.id}-result-${index + 1}`}>
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button 
            variant="outline" 
            size="sm"
            onClick={prevCase}
            className="w-10 h-10 p-0"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeCase ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={nextCase}
            className="w-10 h-10 p-0"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Case Thumbnails */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <Card 
              key={caseItem.id}
              className={`cursor-pointer transition-all duration-300 ${
                index === activeCase 
                  ? 'ring-2 ring-primary bg-primary/5' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setActiveCase(index)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {caseItem.id}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground" data-edit={`case-thumb-${caseItem.id}-title`}>
                      {caseItem.title}
                    </p>
                    <p className="text-sm text-muted-foreground" data-edit={`case-thumb-${caseItem.id}-industry`}>
                      {caseItem.industry}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-hero text-white font-semibold">
            <span data-edit="cases-cta-text">Ver tu caso personalizado</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesShowcase;