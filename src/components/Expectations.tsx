import { Check, X } from "lucide-react";

const Expectations = () => {
  const expectations = [
    "Acolhimento e sensibilidade",
    "Conduta baseada em ciência",
    "Foco em resultados reais",
    "Escuta ativa e respeito",
    "Orientação personalizada",
  ];

  const notExpectations = [
    "Julgamentos ou críticas",
    "Dietas restritivas e irrealistas",
    "Promessas milagrosas",
    "Restrições extremas",
    "Soluções genéricas",
  ];

  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            O que esperar do atendimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um espaço seguro para cuidar da sua saúde, sem culpa ou julgamentos e com resultados definitivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* O que esperar */}
          <div className="bg-background rounded-4xl p-8 lg:p-10 shadow-soft">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </span>
              O que esperar
            </h3>
            <ul className="space-y-4">
              {expectations.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* O que NÃO esperar */}
          <div className="bg-background rounded-4xl p-8 lg:p-10 shadow-soft">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-warm/10 flex items-center justify-center">
                <X className="w-5 h-5 text-warm" />
              </span>
              O que NÃO esperar
            </h3>
            <ul className="space-y-4">
              {notExpectations.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-warm/70 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expectations;
