"use client"

import { Card } from "@/components/ui/card"
import { MessageCircle, Instagram, MessageSquare, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description:
        "Conecte múltiplos números de WhatsApp e gerencie todas as conversas em uma fila organizada, com distribuição automática entre os agentes da sua equipe.",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description:
        "Receba e responda DMs do Instagram diretamente na plataforma, sem alternar entre abas. Integre respostas rápidas e automações com IA.",
    },
    {
      icon: MessageSquare,
      title: "Messenger",
      description:
        "Centralize as conversas do Facebook Messenger com sua equipe. Transfira entre setores, adicione notas internas e nunca perca o contexto.",
    },
    {
      icon: Mail,
      title: "E-mail",
      description:
        "Gerencie e-mails de suporte como conversas em tempo real, com histórico completo e rastreamento por cliente para um atendimento personalizado.",
    },
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32" id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-balance font-display">
          Relacionamento facilitado com clientes
        </h2>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
          Sua equipe ganha velocidade, produtividade e colaboração em um único lugar.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors h-full">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-display">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
