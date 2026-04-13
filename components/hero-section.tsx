"use client"

import { ShinyButton } from "@/components/ui/shiny-button"
import { ArrowRight, MessageCircle, Instagram, Mail, LayoutDashboard } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-hidden">
      {/* Grid Background with Alpha Mask */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(59 130 246 / 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59 130 246 / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 font-display">
            Seu relacionamento com os clientes de modo <span className="text-primary">ORGANIZADO</span> e <span className="text-primary">MONITORADO</span>
          </h1>

          <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed max-w-xl">
            O Chatyou centraliza seu atendimento no WhatsApp, Instagram, Messenger e E-mail. Ganhe velocidade, colabora&ccedil;&atilde;o em equipe e relatórios completos em um &uacute;nico painel.
          </p>

          <div className="flex flex-wrap gap-4">
            <ShinyButton className="text-base px-8" onClick={() => window.location.href = "#pricing"}>
              {"Come\u00e7ar Agora"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </ShinyButton>
            <ShinyButton variant="secondary" className="text-base px-8" onClick={() => window.location.href = "#contact"}>
              Falar com Especialista
              <MessageCircle className="ml-2 h-4 w-4" />
            </ShinyButton>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Sem fidelidade · Cancele quando quiser · Suporte humanizado
          </p>
        </motion.div>

        {/* Right Column - Support Chat Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden flex h-[400px]">
            {/* Sidebar Mockup */}
            <div className="w-16 bg-muted/30 border-r border-border flex flex-col items-center py-4 gap-6">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 relative tooltip">
                  <MessageCircle className="w-5 h-5" />
                  <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                </div>
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 relative">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 relative">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.865 1.42 5.43 3.666 7.156-.375 1.706-1.523 3.123-1.579 3.193a.5.5 0 00.569.756c2.569-.328 4.675-1.503 5.864-2.222.482.072.978.11 1.48.11 5.523 0 10-4.145 10-9.259S17.523 2 12 2z"/></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 relative">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>
            {/* Inbox List Mockup */}
            <div className="w-48 sm:w-64 border-r border-border bg-card flex flex-col">
              <div className="p-4 border-b border-border font-medium text-sm">Mensagens Recentes</div>
              <div className="p-3 border-b border-border bg-muted/20 flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-green-200"></div>
                <div className="flex-1">
                  <div className="h-3 w-20 bg-slate-200 rounded mb-1"></div>
                  <div className="h-2 w-32 bg-slate-100 rounded"></div>
                </div>
              </div>
              <div className="p-3 border-b border-border flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-pink-200"></div>
                <div className="flex-1">
                  <div className="h-3 w-16 bg-slate-200 rounded mb-1"></div>
                  <div className="h-2 w-28 bg-slate-100 rounded"></div>
                </div>
              </div>
              <div className="p-3 flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-blue-200"></div>
                <div className="flex-1">
                  <div className="h-3 w-24 bg-slate-200 rounded mb-1"></div>
                  <div className="h-2 w-24 bg-slate-100 rounded"></div>
                </div>
              </div>
            </div>
            {/* Chat Area Mockup */}
            <div className="flex-1 bg-muted/10 flex flex-col">
              <div className="p-4 border-b border-border flex items-center gap-3 bg-card">
                 <div className="w-8 h-8 rounded-full bg-green-200"></div>
                 <div>
                   <div className="h-3 w-24 bg-slate-200 rounded mb-1"></div>
                   <div className="h-2 w-16 bg-green-100 rounded"></div>
                 </div>
              </div>
              <div className="flex-1 p-4 flex flex-col gap-3 justify-end">
                <div className="bg-card border border-border p-3 rounded-2xl rounded-tl-sm self-start max-w-[80%] shadow-sm">
                  <div className="h-2 w-32 bg-slate-200 rounded mb-2"></div>
                  <div className="h-2 w-24 bg-slate-200 rounded"></div>
                </div>
                <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-sm self-end max-w-[80%] shadow-sm overflow-hidden">
                  <div className="h-2 w-40 bg-white/40 rounded mb-2"></div>
                  <div className="h-2 w-28 bg-white/40 rounded"></div>
                </div>
              </div>
              <div className="p-3 border-t border-border bg-card m-2 rounded-lg flex items-center gap-2">
                 <div className="h-8 flex-1 bg-muted rounded-md shrink-0"></div>
                 <div className="w-8 h-8 rounded-md bg-primary shrink-0"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
