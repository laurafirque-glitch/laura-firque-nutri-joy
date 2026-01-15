import { Monitor, MapPin, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container-narrow mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8">
          <Heart className="w-4 h-4 text-primary-foreground fill-primary-foreground/50" />
          <span className="text-sm font-medium text-primary-foreground">Sua transformação começa aqui</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium text-primary-foreground mb-6 leading-tight">
          Pronta para começar<br className="hidden sm:block" /> sua jornada?
        </h2>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Agende sua consulta e dê o primeiro passo para uma relação mais saudável e equilibrada com a alimentação.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button
            size="xl"
            className="bg-background text-foreground hover:bg-background/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            asChild
          >
            <a href="https://wa.me/message/4NEEZ32YPZTTK1">
              <Monitor className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Atendimento Online
            </a>
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            asChild
          >
            <a href="https://wa.me/message/4NEEZ32YPZTTK1">
              <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Atendimento Presencial
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-primary-foreground/70">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Atendimento humanizado</span>
          </div>
          <div className="w-px h-4 bg-primary-foreground/30 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Online ou presencial</span>
          </div>
          <div className="w-px h-4 bg-primary-foreground/30 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Plano personalizado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
