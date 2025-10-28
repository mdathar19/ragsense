import { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Section, Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Sparkles,
  Zap,
  Shield,
  Globe,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Rocket
} from 'lucide-react'
import { SITE_SIGNUP_URL } from '@/data/common'

export const metadata: Metadata = {
  title: 'Introduction to RagSense - AI Chatbot Documentation',
  description: 'Get started with RagSense, the AI-powered customer support platform that transforms your website into an intelligent chatbot. Learn about RAG technology and how it powers accurate, context-aware responses.',
  keywords: [
    'RagSense introduction',
    'AI chatbot platform',
    'RAG technology',
    'customer support AI',
    'website chatbot tutorial',
    'intelligent chatbot',
    'automated customer service',
    'AI documentation'
  ],
  openGraph: {
    title: 'Introduction to RagSense - AI Chatbot Documentation',
    description: 'Learn about RagSense and how it can transform your customer support with AI-powered chatbots.',
    type: 'article',
    url: 'https://ragsense.co/docs/introduction',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introduction to RagSense - AI Chatbot Documentation',
    description: 'Learn about RagSense and how it can transform your customer support.',
  },
  alternates: {
    canonical: 'https://ragsense.co/docs/introduction'
  }
}

export default function IntroductionPage() {
  // Structured data for better SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Introduction to RagSense - AI Chatbot Documentation',
    description: 'Get started with RagSense, the AI-powered customer support platform that transforms your website into an intelligent chatbot.',
    author: {
      '@type': 'Organization',
      name: 'RagSense',
      url: 'https://ragsense.co'
    },
    publisher: {
      '@type': 'Organization',
      name: 'RagSense',
      url: 'https://ragsense.co'
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://ragsense.co/docs/introduction'
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'RagSense',
      applicationCategory: 'BusinessApplication',
      description: 'AI-powered customer support chatbot platform'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Section size="sm" className="bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 mb-6">
                <BookOpen className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-900 dark:text-orange-300">
                  Getting Started
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Welcome to RagSense
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Transform your website content into an intelligent AI chatbot that provides instant, accurate answers to your customers 24/7.
              </p>

              <div className="flex flex-wrap gap-4">
                  <Link href="/docs/quick-start">
                    <Button variant="gradient" size="lg" asChild>
                        Quick Start Guide
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                <Button variant="outline" size="lg" asChild>
                  <Link href={SITE_SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* What is RagSense */}
        <Section size="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-6">What is RagSense?</h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  RagSense is an AI-powered customer support platform that uses Retrieval-Augmented Generation (RAG)
                  technology to create intelligent chatbots from your website content. Unlike traditional chatbots
                  that require manual programming of every response, RagSense automatically learns from your website
                  and provides accurate, contextual answers to customer queries.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    What is RAG (Retrieval-Augmented Generation)?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">
                    RAG combines the power of large language models with your specific content. When a customer
                    asks a question, RagSense retrieves relevant information from your website and uses AI to
                    generate accurate, natural-sounding responses based on your actual content. This ensures
                    responses are always grounded in your business information, not generic AI knowledge.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Key Features */}
        <Section size="sm" className="bg-gray-50 dark:bg-gray-900/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">Key Features</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Globe,
                    title: 'Automatic Web Crawling',
                    description: 'Simply provide your website URL and RagSense automatically crawls and indexes your content.'
                  },
                  {
                    icon: MessageSquare,
                    title: 'Intelligent Responses',
                    description: 'AI-powered chatbot generates accurate answers based on your actual website content.'
                  },
                  {
                    icon: Zap,
                    title: 'Easy Integration',
                    description: 'Add the chat widget to your website with just a few lines of code.'
                  },
                  {
                    icon: Shield,
                    title: 'Secure & Private',
                    description: 'Your data is encrypted and stored securely. Full GDPR compliance included.'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Analytics Dashboard',
                    description: 'Track conversations, identify knowledge gaps, and improve your content.'
                  },
                  {
                    icon: Sparkles,
                    title: 'Customizable',
                    description: 'Brand the chat widget with your colors, logo, and custom response style.'
                  }
                ].map((feature) => (
                  <div key={feature.title} className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20">
                        <feature.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* How It Works */}
        <Section size="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">How It Works</h2>

              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Connect Your Website',
                    description: 'Sign up and provide your website URL. RagSense will automatically crawl and index your content.'
                  },
                  {
                    step: '2',
                    title: 'AI Training',
                    description: 'Our AI processes your content and creates a knowledge base that understands your business.'
                  },
                  {
                    step: '3',
                    title: 'Install Widget',
                    description: 'Add a simple code snippet to your website to display the chat widget.'
                  },
                  {
                    step: '4',
                    title: 'Go Live',
                    description: 'Your AI chatbot is ready! It will answer customer questions 24/7 based on your content.'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-xl flex items-center justify-center">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Use Cases */}
        <Section size="sm" className="bg-gray-50 dark:bg-gray-900/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">Perfect For</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'E-commerce',
                    items: ['Product information', 'Shipping & returns', 'Order tracking', 'Size guides']
                  },
                  {
                    title: 'SaaS Products',
                    items: ['Feature explanations', 'Onboarding help', 'Troubleshooting', 'Pricing questions']
                  },
                  {
                    title: 'Content Sites',
                    items: ['Article summaries', 'Topic navigation', 'Resource discovery', 'FAQ automation']
                  }
                ].map((useCase) => (
                  <div key={useCase.title} className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-lg font-semibold mb-4">{useCase.title}</h3>
                    <ul className="space-y-2">
                      {useCase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Next Steps */}
        <Section size="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 md:p-12 text-white text-center">
                <Rocket className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-3xl font-display font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Follow our quick start guide to set up your first AI chatbot in minutes.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/docs/quick-start">
                      <Button variant="secondary" size="lg" asChild>
                          Quick Start Guide
                          <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30" asChild>
                    <Link href="/docs/installation">
                      View Installation Guide
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
