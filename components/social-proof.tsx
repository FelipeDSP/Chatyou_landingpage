"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Clock, Users, Headphones } from "lucide-react"

export function SocialProof() {
  const trustPoints = [
    { icon: ShieldCheck, label: "Dados Protegidos" },
    { icon: Clock, label: "Setup em 5 minutos" },
    { icon: Users, label: "Múltiplos Atendentes" },
    { icon: Headphones, label: "Suporte Humanizado" },
  ]

  return (
    <section className="border-y border-border bg-secondary/30 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2.5 text-muted-foreground"
              >
                <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">{point.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
