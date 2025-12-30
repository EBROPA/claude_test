'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CasesSection } from '@/components/sections/CasesSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main className="relative min-h-screen noise">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CasesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
