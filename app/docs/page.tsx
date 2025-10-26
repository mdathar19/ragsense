import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import DocsHero from '@/components/sections/docs-hero'
import DocsNavigation from '@/components/sections/docs-navigation'
import QuickStart from '@/components/sections/quick-start'
import APIReference from '@/components/sections/api-reference'
import Tutorials from '@/components/sections/tutorials'
import Troubleshooting from '@/components/sections/troubleshooting'

export const metadata: Metadata = {
  title: 'Documentation - Complete Guide to RagSense',
  description: 'Learn how to set up, configure, and integrate RagSense. Complete API documentation, tutorials, and troubleshooting guides.',
  openGraph: {
    title: 'RagSense Documentation - Setup & Integration Guide',
    description: 'Everything you need to get started with RagSense AI customer support platform.',
  }
}

export default function DocsPage() {
  return (
    <>
      <Header />
      <main>
        <DocsHero />
        <DocsNavigation />
        <QuickStart />
        <APIReference />
        <Tutorials />
        <Troubleshooting />
      </main>
      <Footer />
    </>
  )
}