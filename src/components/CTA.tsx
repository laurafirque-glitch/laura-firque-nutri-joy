import { Monitor, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground mb-4">
          Pronta para começar sua jornada?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Agende sua consulta e dê o primeiro passo para uma relação mais saudável com a alimentação.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="secondary"
            size="xl"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <a href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar consulta online com a Laura.">
              <Monitor className="w-5 h-5" />
              Atendimento Online
            </a>
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar consulta presencial com a Laura.">
              <MapPin className="w-5 h-5" />
              Atendimento Presencial
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
