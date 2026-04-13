"use client"

import { UserPlus, Headphones, BarChart3 } from "lucide-react"
import { Card } from "@/components/ui/card"

const slides = [
  {
    id: 1,
    icon: UserPlus,
    title: "Para o Cliente",
    description:
      "Abertura rápida de conversa via WhatsApp, Instagram ou Messenger com descrição e mídia. Resolva dúvidas em tempo real e receba notificações no próprio celular.",
    features: ["Mensagem instantânea", "Envio de fotos e vídeos", "Respostas na hora", "Múltiplos canais"],
  },
  {
    id: 2,
    icon: Headphones,
    title: "Para o Agente",
    description:
      "Fila organizada com caixa de entrada unificada. Chat nativo para comunicação direta com o cliente via plataforma. Histórico completo para contexto da negociação.",
    features: ["Fila omnichannel", "Automação com IA", "Chat único e nativo", "Hist\u00f3rico de conversas"],
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Para o Gestor",
    description:
      "Vis\u00e3o total da opera\u00e7\u00e3o com m\u00e9tricas de performance, tempo m\u00e9dio de resolu\u00e7\u00e3o e cumprimento de SLA. Tome decis\u00f5es baseadas em dados.",
    features: ["Dashboard completo", "M\u00e9tricas de performance", "Relat\u00f3rios de SLA", "Vis\u00e3o da equipe"],
  },
]

export function FeaturesSlideshowSection() {

  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-balance max-w-2xl">
            {"A solu\u00e7\u00e3o perfeita para toda a equipe"}
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {slides.map((slide) => {
              const Icon = slide.icon
              return (
                <div key={slide.id} className="group">
                  <Card className="rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-8 h-[300px] flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <ul className="space-y-3">
                      {slide.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <h3 className="text-2xl font-display font-bold mb-3">{slide.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{slide.description}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
