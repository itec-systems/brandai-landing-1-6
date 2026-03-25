import { motion } from 'framer-motion';
import { Zap, Target, Smartphone, BarChart3, Shield, Headphones } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Rapido y eficiente',
    description:
      'Resultados inmediatos con una experiencia optimizada para conversion y rendimiento.',
  },
  {
    icon: Target,
    title: 'Enfocado en resultados',
    description:
      'Cada elemento disenado estrategicamente para guiar al visitante hacia la accion deseada.',
  },
  {
    icon: Smartphone,
    title: 'Responsive total',
    description:
      'Se ve perfecto en cualquier dispositivo, desde moviles hasta pantallas grandes.',
  },
  {
    icon: BarChart3,
    title: 'Analiticas integradas',
    description:
      'Mide el rendimiento de tu landing con metricas claras y accionables.',
  },
  {
    icon: Shield,
    title: 'Seguro y confiable',
    description:
      'Infraestructura robusta con certificados SSL y proteccion de datos.',
  },
  {
    icon: Headphones,
    title: 'Soporte dedicado',
    description:
      'Equipo experto disponible para ayudarte a maximizar tus resultados.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-primary hover:bg-primary/15"
          >
            Caracteristicas
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo lo que necesitas para crecer
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Herramientas disenadas estrategicamente para maximizar tus resultados.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
              >
                <Card className="group h-full border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
                  <CardContent className="p-6 sm:p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground group-hover:ring-primary/30 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-2 font-body leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
