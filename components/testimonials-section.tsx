"use client"

import { motion } from "motion/react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "O Chatyou acabou com o caos das abas. Agora todo atendimento tem histórico, SLA e rastreabilidade em um só painel.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rafael Oliveira",
    role: "Coordenador de Atendimento",
  },
  {
    text: "Antes usávamos vários celulares para WhatsApp. Com o Chatyou, cada cliente é rastreado na plataforma central e a produtividade da equipe disparou.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Camila Santos",
    role: "Líder de Customer Success",
  },
  {
    text: "O Dashboard moderno nos dá visão total dos clientes aguardando. Consigo tomar decisões mais rápidas com dados reais e relatórios unificados.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Lucas Ferreira",
    role: "Head de Customer Experience",
  },
  {
    text: "A equipe adorou a interface intuitiva. Em menos de uma hora j\u00e1 est\u00e1vamos operando. Sem treinamento longo, sem complica\u00e7\u00e3o.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Ana Paula Costa",
    role: "Analista de Sucesso do Cliente",
  },
  {
    text: "O controle de SLA mudou nosso atendimento. Agora cumprimos prazos e os clientes notaram a diferen\u00e7a na qualidade do suporte.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Marcos Pereira",
    role: "Supervisor de Vendas Online",
  },
  {
    text: "Poder compartilhar mídias nas conversas de forma rápida é essencial. O agente já entende o problema antes mesmo de transferir de setor.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Juliana Almeida",
    role: "Coordenadora de Relacionamento",
  },
  {
    text: "O painel multicanal integrado é perfeito. Não preciso mais ficar alternando entre abas do navegador. Tudo acontece na mesma interface.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Fernando Lima",
    role: "Agente de Atendimento",
  },
  {
    text: "Migramos de um sistema complexo para o Chatyou e foi a melhor decisão. Simples, rápido e eficiente integrando Insta e Wpp.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Beatriz Rodrigues",
    role: "Gerente de Atendimento Multi-Canal",
  },
  {
    text: "O histórico perene das conversas nos ajuda em auditorias e no treinamento de novos atendentes. Tudo fica documentado de forma automática e segura.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Thiago Mendes",
    role: "Gestor de CS",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">{"Depoimentos"}</div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center">
            O que nossos clientes dizem
          </h2>
          <p className="text-center mt-5 text-muted-foreground">{"Veja como o Chatyou está transformando o atendimento de equipes reais."}</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
