import { Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-foreground text-muted">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-heading text-xl font-bold text-background">
              Tu Marca
            </span>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-muted-foreground">
              Soluciones que transforman tu negocio. Impulsamos tu crecimiento con
              tecnologia y estrategia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-background mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-body text-sm">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="tel:+525512345678"
                  className="text-muted-foreground transition-colors hover:text-background"
                >
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3 font-body text-sm">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:info@tumarca.com"
                  className="text-muted-foreground transition-colors hover:text-background"
                >
                  info@tumarca.com
                </a>
              </li>
              <li className="flex items-center gap-3 font-body text-sm">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">Ciudad de Mexico, Mexico</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-background mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {['Aviso de privacidad', 'Terminos y condiciones', 'Politica de cookies'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground transition-colors hover:text-background"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <Separator className="mt-12 bg-muted-foreground/20" />

        <p className="mt-8 text-center font-body text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Tu Marca. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
