import Hero from '@/components/sections/hero'
import Features from '@/components/sections/features'
import HowItWorks from '@/components/sections/how-it-works'
import Benefits from '@/components/sections/benefits'
import Testimonials from '@/components/sections/testimonials'
import CTA from '@/components/sections/cta'
import Stats from '@/components/sections/stats'
import Integrations from '@/components/sections/integrations'
import FAQ from '@/components/sections/faq'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Benefits />
        <Integrations />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}