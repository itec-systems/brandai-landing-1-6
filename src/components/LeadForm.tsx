import { motion } from 'framer-motion';
import { Send, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre es muy corto').max(100),
  email: z.string().email('Ingresa un email valido').max(255),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadForm() {
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    // TODO: Replace with your webhook URL or API endpoint
    console.log('Form submitted:', data);
    await new Promise((r) => setTimeout(r, 800));

    toast({
      title: 'Mensaje enviado!',
      description: 'Gracias por contactarnos. Te responderemos en menos de 24 horas.',
    });

    form.reset();
  };

  return (
    <section id="contact" className="bg-gradient-subtle py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <Badge
              variant="secondary"
              className="mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-primary hover:bg-primary/15"
            >
              Contacto
            </Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-4 font-body text-lg text-muted-foreground">
              Completa el formulario y te responderemos en menos de 24 horas.
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-border/50 shadow-xl shadow-primary/5">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body font-medium">
                              Nombre *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Tu nombre"
                                className="h-12 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body font-medium">
                              Email *
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="tu@email.com"
                                className="h-12 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body font-medium">
                            Telefono
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+52 55 1234 5678"
                              className="h-12 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body font-medium">
                            Mensaje
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              rows={4}
                              placeholder="Como podemos ayudarte?"
                              className="resize-none bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={form.formState.isSubmitting}
                        className="h-13 flex-1 rounded-xl bg-primary px-6 text-base font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {form.formState.isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-13 rounded-xl"
                      >
                        <a href="tel:+525512345678" className="gap-2">
                          <Phone className="h-4 w-4" />
                          Llamanos
                        </a>
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
