"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, MessageCircle, Instagram, Facebook, Send } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ShinyButton } from "@/components/ui/shiny-button"

export function ContactSection() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (typeof (window as any).MauticSDKLoaded == 'undefined') {
        (window as any).MauticSDKLoaded = true;
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'http://email.client4you.com.br/media/js/mautic-form.js?v68a6cca5';
        script.onload = function() {
            if ((window as any).MauticSDK) {
                (window as any).MauticSDK.onLoad();
            }
        };
        head.appendChild(script);
        (window as any).MauticDomain = 'http://email.client4you.com.br';
        (window as any).MauticLang = {
            'submittingMessage': "Por favor, aguarde..."
        };
      } else if (typeof (window as any).MauticSDK != 'undefined') {
        (window as any).MauticSDK.onLoad();
      }
    }
  }, []);

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
                <p className="text-muted-foreground mb-2">Contato direto para suporte e comercial</p>
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
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Fale Conosco</h3>
                <p className="text-muted-foreground">Envie suas dúvidas detalhadas preenchendo o formulário abaixo.</p>
              </div>
              <form autoComplete="false" role="form" method="post" action="http://email.client4you.com.br/form/submit?formId=1" id="mauticform_landingpagechatyou" data-mautic-form="landingpagechatyou" encType="multipart/form-data" className="space-y-6">
                <div className="mauticform-error text-red-500 text-sm font-medium mb-2" id="mauticform_landingpagechatyou_error"></div>
                <div className="mauticform-message text-green-500 text-sm font-medium mb-2" id="mauticform_landingpagechatyou_message"></div>
                
                <div className="space-y-2">
                  <label htmlFor="mauticform_input_landingpagechatyou_texto_resposta_curta" className="text-sm font-medium">Nome Completo</label>
                  <input
                    id="mauticform_input_landingpagechatyou_texto_resposta_curta"
                    name="mauticform[texto_resposta_curta]"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mauticform_input_landingpagechatyou_email" className="text-sm font-medium">E-mail</label>
                  <input
                    id="mauticform_input_landingpagechatyou_email"
                    name="mauticform[email]"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mauticform_input_landingpagechatyou_mensagem" className="text-sm font-medium">Mensagem</label>
                  <textarea
                    id="mauticform_input_landingpagechatyou_mensagem"
                    name="mauticform[mensagem]"
                    required
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  ></textarea>
                </div>
                <ShinyButton type="submit" name="mauticform[submit]" id="mauticform_input_landingpagechatyou_submit" className="w-full justify-center text-base">
                    Enviar Mensagem
                    <Send className="w-4 h-4 ml-2" />
                </ShinyButton>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Seus dados estão protegidos e não serão compartilhados.
                </p>

                <input type="hidden" name="mauticform[formId]" id="mauticform_landingpagechatyou_id" value="1" />
                <input type="hidden" name="mauticform[return]" id="mauticform_landingpagechatyou_return" value="" />
                <input type="hidden" name="mauticform[formName]" id="mauticform_landingpagechatyou_name" value="landingpagechatyou" />
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
