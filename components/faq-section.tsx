"use client"

import { motion } from "motion/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quais tipos de anexos são permitidos nas mensagens?",
    answer:
      "Voc\u00ea pode anexar fotos (JPG, PNG, GIF) em todos os planos. Nos planos Pro e Enterprise, tamb\u00e9m \u00e9 poss\u00edvel anexar v\u00eddeos (MP4, MOV) para descrever problemas com mais clareza.",
  },
  {
    question: "O Chatyou possui Modo Escuro (Dark Mode)?",
    answer:
      "Sim! A interface \u00e9 personaliz\u00e1vel e inclui Dark Mode nativo. Dispon\u00edvel a partir do plano Pro, sua equipe pode escolher o tema que preferir para mais conforto visual.",
  },
  {
    question: "Como funciona o controle de SLA?",
    answer:
      "Você define os prazos de atendimento (ex: 4h para SLA). O sistema monitora as conversas automaticamente e envia alertas antes do vencimento para que nenhum cliente fique sem resposta.",
  },
  {
    question: "Consigo consultar o histórico de conversas antigas?",
    answer:
      "Sim! Todo o histórico de interações, mensagens e resoluções fica armazenado e pode ser consultado a qualquer momento. Isso facilita auditorias e a retomada de contexto no suporte.",
  },
  {
    question: "Posso cancelar meu plano a qualquer momento?",
    answer:
      "Sim, voc\u00ea pode cancelar sua assinatura a qualquer momento sem multas ou penalidades. Acreditamos que nosso servi\u00e7o deve conquistar voc\u00ea todo m\u00eas.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-12"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">FAQ</div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center">
            Perguntas frequentes
          </h2>
          <p className="text-center mt-5 text-muted-foreground">{"Tudo que voc\u00ea precisa saber sobre o Chatyou."}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
