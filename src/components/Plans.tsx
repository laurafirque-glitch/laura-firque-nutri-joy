import { Button } from "@/components/ui/button";

const Plans = () => {
  const plans = [
    {
      name: "Consulta Avulsa",
      price: "250",
      featured: false,
    },
    {
      name: "Consulta com Retorno",
      price: "300",
      featured: true,
    },
  ];

  return (
    <section id="planos" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Consultas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a opção ideal para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-4xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "ring-2 ring-primary shadow-card"
                  : "shadow-soft hover:shadow-card"
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="text-5xl font-serif font-semibold text-foreground">
                    {plan.price}
                  </span>
                </div>
              </div>

              <Button
                variant={plan.featured ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="https://wa.me/message/4NEEZ32YPZTTK1">
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
