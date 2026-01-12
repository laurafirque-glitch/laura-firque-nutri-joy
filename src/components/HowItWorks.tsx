import { Monitor, MapPin, Clock, Video, Activity, Camera } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta à sua rotina.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Presencial */}
          <div className="card-organic group hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </span>
              <div>
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  Presencial
                </h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  1h a 1h30 de duração
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground">
                <Activity className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Mapeamento metabólico completo</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Activity className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Análise detalhada de exames</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Activity className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Avaliação física completa (Bioimpedância + Medidas)</span>
              </li>
            </ul>
          </div>

          {/* Online */}
          <div className="card-organic group hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-14 h-14 rounded-2xl bg-warm/10 flex items-center justify-center group-hover:bg-warm/20 transition-colors">
                <Monitor className="w-7 h-7 text-warm" />
              </span>
              <div>
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  Online
                </h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Via Google Meet
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground">
                <Activity className="w-5 h-5 text-warm mt-0.5 flex-shrink-0" />
                <span>Mesma entrega técnica e qualidade</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Camera className="w-5 h-5 text-warm mt-0.5 flex-shrink-0" />
                <span>Avaliação física via App (análise de fotos)</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Clock className="w-5 h-5 text-warm mt-0.5 flex-shrink-0" />
                <span>Flexibilidade total de horário</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
