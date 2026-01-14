import { Monitor, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nutritionist.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-8">
      <div className="container-narrow mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground mb-6">
            Nutrição que cuida da{" "}
            <em className="text-primary not-italic">saúde</em> e valoriza tua{" "}
            <em className="text-primary not-italic">beleza natural</em>.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Acredito em uma alimentação que respeita tua rotina, tuas preferências e até teus momentos de exceção. Minha motivação é te ajudar a construir esse equilíbrio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar consulta online com a Laura.">
                <Monitor className="w-5 h-5" />
                Atendimento Online
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar consulta presencial com a Laura.">
                <MapPin className="w-5 h-5" />
                Atendimento Presencial
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Atendimento em São Paulo
          </p>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-secondary rounded-[60%_40%_50%_50%/50%_50%_40%_60%] scale-110 -z-10" />
            <img
              src={heroImage}
              alt="Laura Firque - Nutricionista Clínica"
              className="w-full max-w-md lg:max-w-lg rounded-[60%_40%_50%_50%/50%_50%_40%_60%] object-cover shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
