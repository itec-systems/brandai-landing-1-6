import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { sendToWebhook, FormData } from '../utils/webhook';
import { X, Check, Loader2 } from 'lucide-react';

interface MultiStepFormProps {
  onClose: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    investment: '',
  });

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Send step 1 data
    const step1Data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    const success = await sendToWebhook(step1Data);
    
    if (success) {
      setStep(2);
    } else {
      alert('Hubo un error. Por favor intenta de nuevo.');
    }
    
    setIsLoading(false);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Send complete data
    const success = await sendToWebhook(formData);
    
    if (success) {
      setStep(3);
      setTimeout(() => {
        onClose();
      }, 3000);
    } else {
      alert('Hubo un error. Por favor intenta de nuevo.');
    }
    
    setIsLoading(false);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border relative">
          <Button 
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className={`w-3 h-3 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-gray-300'}`}></div>
              <div className={`w-3 h-3 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
              <div className={`w-3 h-3 rounded-full transition-colors ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            </div>
            <span className="text-sm text-muted-foreground">Paso {step} de 3</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2" data-edit="form-step1-title">
                ¡Comencemos!
              </h3>
              <p className="text-muted-foreground mb-6" data-edit="form-step1-subtitle">
                Ingresa tus datos para ver cómo SoloBrand puede transformar tu marca.
              </p>
              
              <form onSubmit={handleStep1Submit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    <span data-edit="form-name-label">Nombre completo *</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Tu nombre"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    <span data-edit="form-email-label">Email empresarial *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="tu@empresa.com"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">
                    <span data-edit="form-phone-label">Teléfono *</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+52 55 1234 5678"
                    className="mt-2"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-hero text-white font-semibold hover:opacity-90 transition-all duration-200"
                  size="lg"
                >
                  {isLoading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> <span data-edit="form-step1-loading">Enviando...</span></>
                  ) : (
                    <span data-edit="form-step1-button">Continuar</span>
                  )}
                </Button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2" data-edit="form-step2-title">
                Cuéntanos más sobre tu empresa
              </h3>
              <p className="text-muted-foreground mb-6" data-edit="form-step2-subtitle">
                Esto nos ayuda a personalizar tu experiencia y mostrarte ejemplos relevantes.
              </p>
              
              <form onSubmit={handleStep2Submit} className="space-y-4">
                <div>
                  <Label htmlFor="company" className="text-sm font-medium">
                    <span data-edit="form-company-label">Nombre de tu empresa/marca *</span>
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Mi Empresa S.A."
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="investment" className="text-sm font-medium">
                    <span data-edit="form-investment-label">¿Cuánto invierte mensualmente en branding/marketing? *</span>
                  </Label>
                  <select
                    id="investment"
                    required
                    value={formData.investment}
                    onChange={(e) => handleInputChange('investment', e.target.value)}
                    className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="0-5000">$0 - $5,000 MXN</option>
                    <option value="5000-15000">$5,000 - $15,000 MXN</option>
                    <option value="15000-30000">$15,000 - $30,000 MXN</option>
                    <option value="30000-50000">$30,000 - $50,000 MXN</option>
                    <option value="50000+">Más de $50,000 MXN</option>
                  </select>
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-hero text-white font-semibold hover:opacity-90 transition-all duration-200"
                  size="lg"
                >
                  {isLoading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> <span data-edit="form-step2-loading">Enviando...</span></>
                  ) : (
                    <span data-edit="form-step2-button">Ver mi propuesta personalizada</span>
                  )}
                </Button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2" data-edit="form-success-title">
                ¡Perfecto!
              </h3>
              <p className="text-muted-foreground mb-4" data-edit="form-success-message">
                Hemos recibido tu información. Nuestro equipo se pondrá en contacto contigo en las próximas 2 horas para mostrarte una propuesta personalizada.
              </p>
              <p className="text-sm text-muted-foreground" data-edit="form-success-note">
                Revisa tu email (incluyendo spam) para más detalles.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;