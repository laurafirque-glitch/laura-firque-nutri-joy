import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como me preparar para a primeira consulta?",
      answer:
        "Traga seus exames mais recentes (hemograma, glicemia, colesterol, vitaminas). Anote sua rotina alimentar dos últimos dias e seus objetivos. Venha com roupas confortáveis para a avaliação física.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Aceito PIX, cartão de crédito (com parcelamento) e boleto bancário. O pagamento deve ser realizado antes da consulta para garantir seu horário.",
    },
    {
      question: "Como funciona a primeira consulta?",
      answer:
        "A primeira consulta dura entre 1h e 1h30. Faremos uma anamnese completa, avaliação física, análise de exames e definição do seu plano nutricional personalizado.",
    },
    {
      question: "Posso remarcar minha consulta?",
      answer:
        "Sim! Remarcações devem ser feitas com pelo menos 24h de antecedência. Faltas sem aviso prévio são descontadas do pacote.",
    },
    {
      question: "O atendimento online é tão completo quanto o presencial?",
      answer:
        "Sim! A consulta online tem a mesma qualidade técnica. A diferença está apenas na avaliação física, que é realizada através de um aplicativo com análise de fotos.",
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre o atendimento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border-none shadow-soft data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
