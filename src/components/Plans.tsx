import { Button } from "@/components/ui/button";
import { Check, Sparkles, Star } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Consulta Avulsa",
      price: "250",
      description: "Ideal para quem busca uma orientação pontual",
      featured: false,
      benefits: [
        "Avaliação nutricional completa",
        "Plano alimentar personalizado",
        "Orientações e dicas práticas",
      ],
    },
    {
      name: "Consulta com Retorno",
      price: "300",
      description: "Acompanhamento para melhores resultados",
      featured: true,
      tag: "Mais escolhido",
      benefits: [
        "Tudo da consulta avulsa",
        "Retorno em até 30 dias",
        "Ajustes no plano alimentar",
        "Suporte via WhatsApp",
      ],
    },
  ];

  return (
    <section id="planos" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Invista em você
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Investimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a opção ideal para você e comece sua transformação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-4xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.featured
                  ? "ring-2 ring-primary shadow-card"
                  : "shadow-soft hover:shadow-card"
              }`}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    {plan.tag}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="text-5xl font-serif font-semibold text-foreground">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="https://wa.me/message/4NEEZ32YPZTTK1">
                  Agendar Consulta
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
