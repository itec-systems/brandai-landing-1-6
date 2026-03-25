import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-primary shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Llamanos"
      >
        <a href="tel:+525512345678">
          <Phone className="h-5 w-5" />
        </a>
      </Button>
      {/* Pulse ring */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/20" />
    </div>
  );
}
