"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Instagram, Facebook, Send } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ShinyButton } from "@/components/ui/shiny-button"

export function ContactSection() {
  return (
    <section className="py-20 bg-muted/30" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem dúvidas ou quer um plano customizado? Fale com a gente através dos nossos canais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                <p className="text-muted-foreground mb-2">Fale rapidamente com um especialista</p>
                <a href="https://wa.me/5569999565508" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline text-lg">
                  (69) 99956-5508
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">E-mail</h3>
                <p className="text-muted-foreground mb-2">Envie suas dúvidas detalhadas</p>
                <a href="mailto:contato@estudyou.com" className="text-primary font-medium hover:underline text-lg">
                  contato@estudyou.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Redes Sociais</h3>
                <p className="text-muted-foreground mb-3">Acompanhe nossas novidades e dicas</p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/chatyou.oficial" target="_blank" rel="noreferrer" className="p-2 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                    <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a href="https://www.facebook.com/chatyou.oficial" target="_blank" rel="noreferrer" className="p-2 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                    <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 border-border">
              <form action="https://formsubmit.co/contato@estudyou.com" method="POST" className="space-y-6">
                <input type="hidden" name="_next" value="/#contact" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nome Completo</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  ></textarea>
                </div>
                <ShinyButton type="submit" className="w-full justify-center text-base">
                    Enviar Mensagem
                    <Send className="w-4 h-4 ml-2" />
                </ShinyButton>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Seus dados estão protegidos e não serão compartilhados.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
