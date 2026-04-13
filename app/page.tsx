import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { FeaturesSlideshowSection } from "@/components/features-slideshow-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { MessageSquareMore } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <HowItWorksSection />
        <FeaturesSlideshowSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border py-12 mt-20" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 font-display text-primary flex items-center gap-2">
                <MessageSquareMore className="w-6 h-6" strokeWidth={2.5} />
                <span className="text-2xl tracking-tight">chatyou</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Plataforma de atendimento centralizado simples e eficiente para organizar o suporte da sua equipe.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors">
                    {"Pre\u00e7os"}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://wa.me/5569999565508" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@estudyou.com" className="hover:text-foreground transition-colors">
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-4">
            <span>{"© 2026 Chatyou. Todos os direitos reservados."}</span>
            <div className="flex gap-4">
               <a href="mailto:contato@estudyou.com" className="hover:text-primary">contato@estudyou.com</a>
               <span>|</span>
               <a href="https://wa.me/5569999565508" className="hover:text-primary">(69) 99956-5508</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
