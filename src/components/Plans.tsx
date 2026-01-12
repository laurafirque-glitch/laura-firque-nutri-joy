import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Plans = () => {
  const plans = [
    {
      badge: "Contínuo",
      name: "Semestral",
      description: "3 Consultas + 2 Retornos",
      price: "256",
      priceNote: "6x",
      priceTotal: "R$ 1.388 à vista",
      featured: true,
    },
    {
      badge: "Intensivo",
      name: "Trimestral",
      description: "2 Consultas + 1 Retorno",
      price: "290",
      priceNote: "3x",
      priceTotal: "R$ 788 à vista",
      featured: false,
    },
    {
      badge: "Pontual",
      name: "Individual",
      description: "1ª Consulta + Retorno em 30 dias",
      price: "438",
      priceNote: "",
      priceTotal: "Pagamento único",
      featured: false,
    },
  ];

  return (
    <section id="planos" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Planos e Investimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu momento e objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-4xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "ring-2 ring-primary shadow-card"
                  : "shadow-soft hover:shadow-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    <Star className="w-3 h-3" fill="currentColor" />
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                  {plan.badge}
                </span>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">{plan.priceNote}</span>
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="text-4xl font-serif font-semibold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  ou {plan.priceTotal}
                </p>
              </div>

              <Button
                variant={plan.featured ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre o plano de consultas.">
                  Agendar
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
