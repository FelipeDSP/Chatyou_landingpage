"use client"

import { motion } from "framer-motion"
import { FilePlus, LayoutDashboard, CheckCircle2, Paperclip, Clock, MessageSquare, BarChart3 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Caixas de Entrada Unificadas",
      description:
        "Integre seu WhatsApp, Instagram, Messenger e E-mail em poucos cliques. Toda a sua comunicação dividida por caixas de entrada.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <LayoutDashboard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Caixas de Entrada</p>
                  <p className="text-sm text-muted-foreground">Múltiplos canais conectados</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-background/80 rounded-lg flex items-center gap-3 border-l-2 border-primary">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <p className="text-sm font-medium">WhatsApp (Financeiro)</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <p className="text-sm font-medium">Instagram (@sua_loja)</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <p className="text-sm font-medium">Facebook Messenger</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      icon: MessageSquare,
      title: "Chat em Tempo Real",
      description:
        "Múltiplos agentes conversando com os clientes. Troque notas privadas invisíveis ao cliente e transfira a conversa entre setores.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-4 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-primary/10 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">👤</div>
                  <div>
                    <p className="text-sm font-semibold">João Silva</p>
                    <p className="text-[10px] text-muted-foreground">WhatsApp • Aguardando</p>
                  </div>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-md cursor-pointer">Atribuir a mim</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-[10px]">JS</div>
                  <div className="bg-background/80 p-2 text-xs rounded-lg rounded-tl-none shadow-sm">
                    Olá, gostaria de saber se a loja abre aos sábados.
                  </div>
                </div>
                <div className="flex items-start flex-row-reverse gap-2">
                   <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-[10px] text-primary">A</div>
                   <div className="bg-primary text-primary-foreground p-2 text-xs rounded-lg rounded-tr-none shadow-sm">
                    Oi João! Sim, abrimos das 09h às 14h.
                   </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 flex items-center gap-2 border-t border-primary/10">
              <input type="text" placeholder="Digite uma resposta..." className="flex-1 bg-background/50 border-none text-xs p-2 rounded-md focus:outline-none" disabled />
              <div className="bg-primary/20 p-2 rounded-md"><MessageSquare className="w-3 h-3 text-primary" /></div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      icon: BarChart3,
      title: "Relatórios Avançados",
      description:
        "Acompanhe métricas em tempo real sobre o tráfego de conversas, status dos agentes e produtividade da sua operação.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20 flex flex-col h-full overflow-hidden">
            <div className="flex items-center justify-between mb-4 border-b border-primary/10 pb-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Desempenho Geral</span>
              </div>
              <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-medium">Últimos 7 dias</span>
            </div>
            
            <div className="flex justify-between gap-2 mb-4">
               <div className="text-center p-2 bg-background/50 rounded-lg flex-1 border border-primary/10">
                  <p className="text-[10px] text-muted-foreground whitespace-nowrap">Conversas</p>
                  <p className="text-lg font-bold text-primary">1.248</p>
               </div>
               <div className="text-center p-2 bg-background/50 rounded-lg flex-1 border border-primary/10">
                  <p className="text-[10px] text-muted-foreground whitespace-nowrap">Tempo Méd.</p>
                  <p className="text-lg font-bold text-primary opacity-80">12m</p>
               </div>
               <div className="text-center p-2 bg-background/50 rounded-lg flex-1 border border-primary/10">
                  <p className="text-[10px] text-muted-foreground whitespace-nowrap">Resolvidas</p>
                  <p className="text-lg font-bold text-primary opacity-90">94%</p>
               </div>
            </div>

            <div className="flex-1 mt-2 flex items-end gap-2 justify-between px-2 pt-4">
              {[40, 70, 45, 90, 65, 80, 55].map((height, i) => (
                <div key={i} className="w-full h-full bg-primary/10 rounded-t-sm relative">
                  <div 
                    className="absolute bottom-0 w-full bg-primary rounded-t-sm transition-all duration-500" 
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between px-2 mt-2">
              {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, i) => (
                <div key={i} className="w-full text-center">
                  <span className="text-[9px] text-muted-foreground">{day}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Conheça o Chatyou</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Tudo centralizado para você e sua equipe"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-6">{step.visual}</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">{step.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
