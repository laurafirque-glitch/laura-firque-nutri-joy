import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Info profissional */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
              Laura Firque
            </h3>
            <p className="text-sm text-muted-foreground">
              Nutricionista Clínica • CRN 20462
            </p>
          </div>

          {/* Endereço */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              <h4 className="font-medium text-foreground">Atendimento Presencial</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Clínica Integrar Espaço Médico<br />
              Medplex Eixo Norte<br />
              Av. Assis Brasil, 2827<br />
              Porto Alegre - RS
            </p>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a
              href="https://www.instagram.com/laurafirquenutri/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@laurafirque.com.br"
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/message/4NEEZ32YPZTTK1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Laura Firque. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
