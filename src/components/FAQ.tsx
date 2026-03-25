import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

const FAQ: React.FC = () => {
  const faqs = [
    {
      id: 'faq-1',
      question: '¿Qué tan profesional es el contenido que genera la IA?',
      answer: 'Nuestro contenido es indistinguible del diseño de agencia. La IA está entrenada con más de 100,000 casos de éxito y mantiene los estándares de diseño más altos. Muchas de nuestras PyMEs han incrementado sus conversiones entre 150-300% usando nuestro contenido.'
    },
    {
      id: 'faq-2', 
      question: '¿Cuánto tiempo realmente toma generar contenido?',
      answer: 'El proceso completo toma entre 2-5 minutos. Subir tu información de marca toma 30 segundos, la generación automática 1-2 minutos, y revisar/descargar otros 2 minutos. Es literalmente más rápido que hacer una llamada telefónica.'
    },
    {
      id: 'faq-3',
      question: '¿Es más caro que contratar un diseñador freelance?',
      answer: 'No, es hasta 10x más económico. Un diseñador freelance cobra $2,000-5,000 MXN por banner y tarda 2-3 días. Con SoloBrand generas 10+ piezas profesionales en minutos por una fracción del costo.'
    },
    {
      id: 'faq-4',
      question: '¿Qué pasa si no me gusta el resultado?',
      answer: 'Puedes generar variaciones ilimitadas hasta quedar 100% satisfecho. Además, nuestro equipo está disponible para ajustes personalizados sin costo extra. Garantizamos tu satisfacción total.'
    },
    {
      id: 'faq-5',
      question: '¿Necesito conocimientos técnicos o de diseño?',
      answer: 'Absolutamente no. La plataforma está diseñada para empresarios sin conocimiento técnico. Solo necesitas saber qué quieres comunicar - nosotros nos encargamos de todo lo visual y técnico.'
    },
    {
      id: 'faq-6',
      question: '¿Qué formatos de contenido pueden generar?',
      answer: 'Generamos banners para web, posts para redes sociales, ads para Facebook/Instagram, flyers digitales, presentaciones corporativas, logos, y prácticamente cualquier pieza visual que necesites para tu marca.'
    }
  ];

  return (
    <section data-section="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-edit="faq-title">
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground" data-edit="faq-subtitle">
            Resolvemos las dudas más comunes de PyMEs como la tuya
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-b border-border/50 last:border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-foreground pr-4" data-edit={`faq-${index + 1}-question`}>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed" data-edit={`faq-${index + 1}-answer`}>
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Still have questions section */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-hero text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4" data-edit="faq-contact-title">
                ¿Tienes alguna otra pregunta?
              </h3>
              <p className="text-lg mb-6 opacity-90" data-edit="faq-contact-subtitle">
                Nuestro equipo está aquí para ayudarte. Contáctanos directamente.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span data-edit="faq-contact-email">hola@solobrand.mx</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span data-edit="faq-contact-phone">+52 55 1234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span data-edit="faq-contact-hours">Respuesta en 2 horas</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Common concerns addressed */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2" data-edit="faq-guarantee-title">
                100% Garantizado
              </h4>
              <p className="text-sm text-muted-foreground" data-edit="faq-guarantee-desc">
                Si no estás satisfecho, te devolvemos tu dinero sin preguntas
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2" data-edit="faq-speed-title">
                Súper rápido
              </h4>
              <p className="text-sm text-muted-foreground" data-edit="faq-speed-desc">
                Resultados profesionales en menos de 5 minutos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 1010.691 15.75 9.745 9.745 0 00-1.636-3.218 9.745 9.745 0 01-9.055 0 9.75 9.75 0 000-19.484z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2" data-edit="faq-support-title">
                Soporte expert
              </h4>
              <p className="text-sm text-muted-foreground" data-edit="faq-support-desc">
                Equipo dedicado para ayudarte cuando lo necesites
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;