import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function LegalLayout({ children, title, lastUpdated }: { children: React.ReactNode; title: string, lastUpdated: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary mb-4 text-center">{title}</h1>
        <p className="text-center text-muted-foreground mb-12">
          {lastUpdated}
        </p>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
