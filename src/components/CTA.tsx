import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="blob -top-20 -right-20 h-72 w-72 bg-primary-foreground/8"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="blob -bottom-24 -left-24 h-72 w-72 bg-accent/10"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Listo para dar el siguiente paso?
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-primary-foreground/75">
            No esperes mas. Empieza hoy y transforma tu negocio con las
            herramientas que necesitas para crecer.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-14 rounded-xl bg-background px-8 text-lg font-semibold text-primary shadow-xl hover:bg-muted hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <a href="#contact" className="gap-2">
                Contactanos ahora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-xl border-2 border-primary-foreground/30 bg-transparent px-8 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              <a href="#features">Ver caracteristicas</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
