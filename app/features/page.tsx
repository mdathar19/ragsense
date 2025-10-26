import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import FeaturesHero from '@/components/sections/features-hero'
import CoreFeatures from '@/components/sections/core-features'
import TechnicalSpecs from '@/components/sections/technical-specs'
import UseCases from '@/components/sections/use-cases'
import ComparisonTable from '@/components/sections/comparison-table'
import FeaturesCTA from '@/components/sections/features-cta'

export const metadata: Metadata = {
  title: 'Features - AI-Powered Customer Support Platform',
  description: 'Explore RagSense\'s comprehensive features including RAG technology, intelligent web crawling, real-time chat, analytics, and enterprise security.',
  openGraph: {
    title: 'RagSense Features - Advanced AI Customer Support',
    description: 'Discover how RagSense transforms customer support with cutting-edge AI technology.',
  }
}

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <FeaturesHero />
        <CoreFeatures />
        <TechnicalSpecs />
        <UseCases />
        <ComparisonTable />
        <FeaturesCTA />
      </main>
      <Footer />
    </>
  )
}