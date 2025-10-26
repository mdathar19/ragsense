import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import PricingHero from '@/components/sections/pricing-hero'
import PricingPlans from '@/components/sections/pricing-plans'
import PricingComparison from '@/components/sections/pricing-comparison'
import PricingFAQ from '@/components/sections/pricing-faq'
import PricingCTA from '@/components/sections/pricing-cta'

export const metadata: Metadata = {
  title: 'Pricing - Affordable AI Chatbot Plans | RagSense',
  description: 'Choose the perfect RagSense plan for your business. From startups to enterprises, we have a plan that fits your needs with transparent, scalable pricing.',
  keywords: 'RagSense pricing, AI chatbot pricing, chatbot plans, affordable chatbot, enterprise pricing',
}

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <PricingHero />
        <PricingPlans />
        <PricingComparison />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </>
  )
}