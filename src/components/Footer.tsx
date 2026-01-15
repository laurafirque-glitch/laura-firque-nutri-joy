import { Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import lauraImage from "@/assets/laura-firque.jpg";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="py-16 px-6 border-t border-border">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Brand & About */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <img 
                  src={lauraImage} 
                  alt="Laura Firque" 
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Laura Firque
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nutricionista Clínica
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto lg:mx-0">
                Ajudando pessoas a construir uma relação mais saudável e equilibrada com a alimentação.
              </p>
              <p className="mt-4 text-xs text-primary font-medium">
                CRN 20462
              </p>
            </div>

            {/* Location */}
            <div className="lg:col-span-4 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Atendimento Presencial</span>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">
                  Clínica Integrar Espaço Médico
                </p>
                <p className="text-sm text-muted-foreground">
                  Medplex Eixo Norte
                </p>
                <p className="text-sm text-muted-foreground">
                  Av. Assis Brasil, 2827
                </p>
                <p className="text-sm text-muted-foreground">
                  Porto Alegre - RS
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Av.+Assis+Brasil,+2827,+Porto+Alegre"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 mt-4 transition-colors"
              >
                Ver no mapa →
              </a>
            </div>

            {/* Social & Contact */}
            <div className="lg:col-span-4 text-center lg:text-right">
              <h4 className="font-medium text-foreground mb-4">Conecte-se comigo</h4>
              <div className="flex items-center justify-center lg:justify-end gap-3 mb-6">
                <a
                  href="https://www.instagram.com/laurafirquenutri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary hover:from-primary hover:to-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contato@laurafirque.com.br"
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary hover:from-primary hover:to-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/message/4NEEZ32YPZTTK1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary hover:from-primary hover:to-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Dúvidas? Entre em contato!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-6 bg-card/50 border-t border-border">
        <div className="container-narrow mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Laura Firque. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-primary fill-primary" /> para você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
