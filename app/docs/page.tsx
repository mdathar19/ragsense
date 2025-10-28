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
  title: 'Documentation - Complete AI Chatbot Guide | RagSense',
  description: 'Complete documentation for RagSense AI chatbot platform. Learn setup, installation, customization, API integration, and best practices. Step-by-step tutorials and troubleshooting guides.',
  keywords: [
    'RagSense documentation',
    'AI chatbot docs',
    'chatbot setup guide',
    'API documentation',
    'chatbot tutorials',
    'integration guide',
    'customer support automation',
    'RAG chatbot docs'
  ],
  openGraph: {
    title: 'RagSense Documentation - Complete AI Chatbot Guide',
    description: 'Everything you need to get started with RagSense AI customer support platform. Tutorials, API docs, and guides.',
    type: 'website',
    url: 'https://ragsense.co/docs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RagSense Documentation',
    description: 'Complete guide to setting up and using RagSense AI chatbot.',
  },
  alternates: {
    canonical: 'https://ragsense.co/docs'
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
        {/* <APIReference /> */}
        <Tutorials />
        {/* <Troubleshooting /> */}
      </main>
      <Footer />
    </>
  )
}