import { motion } from 'framer-motion';
import { Users, Clock, Star, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Users, value: '+500', label: 'Clientes activos' },
  { icon: Clock, value: '24h', label: 'Tiempo de respuesta' },
  { icon: Star, value: '4.9', label: 'Calificacion promedio' },
  { icon: ShieldCheck, value: '100%', label: 'Garantia de calidad' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border/50 bg-muted/30 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 font-body text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
