import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  Lightbulb, 
  Settings, 
  TrendingUp, 
  Heart, 
  DollarSign,
  ArrowRight 
} from 'lucide-react';

const Benefits: React.FC = () => {
  const teamImageUrl = 'https://innoboxrr-brandai.s3.amazonaws.com/landings/1/6/images/img_3VaKDEnLYgFi.png';

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Velocidad extrema',
      description: 'Genera banners, posts y ads profesionales en menos de 5 minutos. Lo que antes tardaba días, ahora toma segundos.',
      highlight: '10x más rápido'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Calidad profesional',
      description: 'IA entrenada con miles de casos de éxito. Cada pieza mantiene consistencia de marca y estándares de diseño premium.',
      highlight: 'Nivel agencia'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Sin complicaciones',
      description: 'No necesitas conocimientos técnicos, diseñadores o procesos complejos. Todo funciona desde tu navegador.',
      highlight: 'Plug & play'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Escalabilidad ilimitada',
      description: 'Genera cientos de variaciones para diferentes campañas, productos o segmentos sin límites ni costos adicionales.',
      highlight: 'Sin límites'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Consistencia de marca',
      description: 'Todas las piezas mantienen tu identidad visual, colores, tipografías y estilo. Tu marca siempre reconocible.',
      highlight: 'Brand perfect'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'ROI medible',
      description: 'Reduce costos de agencia en 70% mientras multiplicas tu output de contenido. Cada peso invertido se traduce en más ventas.',
      highlight: '70% menos costo'
    }
  ];

  return (
    <section data-section="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-edit="benefits-title">
            ¿Por qué las PyMEs eligen <span className="text-gradient">SoloBrand?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-edit="benefits-subtitle">
            Porque necesitan crecer rápido, sin complicar su operación ni comprometer la calidad de su marca.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm card-hover"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground" data-edit={`benefit-${index + 1}-title`}>
                        {benefit.title}
                      </h3>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full whitespace-nowrap">
                        {benefit.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed" data-edit={`benefit-${index + 1}-desc`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              data-edit="benefits-team-image"
              src={teamImageUrl}
              alt="Small business team working together with SoloBrand"
              className="w-full h-auto rounded-2xl shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold text-foreground" data-edit="benefits-social-title">
                  +500 PyMEs ya confían en nosotros
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-muted-foreground ml-2" data-edit="benefits-rating">4.9/5 estrellas</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4" data-edit="benefits-testimonial">
                "En 3 meses generamos más contenido de calidad que en todo el año anterior. 
                SoloBrand cambió completamente nuestra estrategia de marketing."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-foreground" data-edit="benefits-testimonial-name">María González</p>
                  <p className="text-sm text-muted-foreground" data-edit="benefits-testimonial-company">CEO, Café Central</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-primary">
              <span className="font-medium" data-edit="benefits-cta-text">Ver más testimonios</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;