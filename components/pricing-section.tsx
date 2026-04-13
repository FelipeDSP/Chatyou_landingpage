"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ShinyButton } from "@/components/ui/shiny-button"

const pricingTiers = [
  {
    name: "Básico",
    price: "99,90",
    period: "/m\u00eas",
    description: "Ideal para iniciar com canais focados.",
    features: [
      "Até 5 usuários",
      "1 WhatsApp",
      "1 Instagram",
      "Sem Messenger",
      "Painel Centralizado"
    ],
    cta: "Assinar Básico",
    popular: false,
    link: "https://pay.kiwify.com.br/URX3mYy",
  },
  {
    name: "Intermediário",
    price: "149,90",
    period: "/m\u00eas",
    description: "Para equipes que precisam de múltiplos canais.",
    features: [
      "Até 10 usuários",
      "2 WhatsApps",
      "1 Instagram",
      "1 Messenger",
      "Painel Centralizado"
    ],
    cta: "Assinar Intermediário",
    popular: true,
    link: "https://pay.kiwify.com.br/QxYE3oZ",
  },
  {
    name: "Avançado",
    price: "299,90",
    period: "/m\u00eas",
    description: "Para alta demanda e controle avançado.",
    features: [
      "Até 15 usuários",
      "2 WhatsApps",
      "2 Instagrams",
      "2 Messengers",
      "Painel Centralizado"
    ],
    cta: "Assinar Avançado",
    popular: false,
    link: "https://pay.kiwify.com.br/kL0h6bl",
  },
  {
    name: "Customizado",
    price: "Consultar",
    period: "",
    description: "Para grandes operações com necessidades específicas.",
    features: [
      "Tudo Ilimitado",
      "Canais Customizados",
      "Treinamento da equipe",
      "Ambiente isolado",
      "Gerente de conta",
    ],
    cta: "Falar com Consultor",
    popular: false,
    link: "https://wa.me/5569999565508?text=" + encodeURIComponent("Olá! Gostaria de saber mais sobre o plano Customizado do Chatyou."),
  },
]

export function PricingSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Nossos Planos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para sua equipe. Flexível e feito para ajudar a escalar seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative p-8 h-full flex flex-col ${
                  tier.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground min-h-[40px]">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline flex-wrap">
                    {tier.price !== "Consultar" && (
                      <span className="text-3xl font-bold mr-1">R$</span>
                    )}
                    <span className={`font-bold tracking-tight ${tier.price === "Consultar" ? "text-3xl" : "text-4xl"}`}>{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>}
                  </div>
                  {tier.price !== "Consultar" && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      + R$ 990,00 de instalação<br /><span className="opacity-70">(cobrado na 1ª parcela)</span>
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <ShinyButton
                  className="w-full justify-center"
                  onClick={() => window.open(tier.link, "_blank")}
                >
                  {tier.cta}
                </ShinyButton>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Sem fidelidade · Cancele quando quiser
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

