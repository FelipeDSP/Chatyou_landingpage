"use client"

import Link from "next/link"
import { ShinyButton } from "@/components/ui/shiny-button"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquareMore, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: "#features", label: "Soluções" },
    { href: "#pricing", label: "Planos" },
    { href: "#contact", label: "Contato" },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold font-display flex items-center gap-2 text-primary">
              <MessageSquareMore className="w-6 h-6" strokeWidth={2.5} />
              <span className="text-2xl tracking-tight">chatyou</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShinyButton variant="secondary" className="hidden sm:inline-flex" onClick={() => window.location.href = "https://app.chatyou.chat/app/login"}>
              Entrar
            </ShinyButton>
            <ShinyButton onClick={() => window.location.href = "#pricing"}>{"Come\u00e7ar Agora"}</ShinyButton>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <ShinyButton
                  variant="secondary"
                  className="w-full justify-center sm:hidden"
                  onClick={() => { window.location.href = "https://app.chatyou.chat/app/login"; setMobileOpen(false); }}
                >
                  Entrar
                </ShinyButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
