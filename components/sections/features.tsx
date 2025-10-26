'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Brain,
  Zap,
  Globe,
  Shield,
  BarChart3,
  Code,
  Palette,
  Users,
  MessageSquare,
  Database,
  Settings,
  Cloud,
  Lock,
  Sparkles,
  Layers,
  RefreshCw
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Intelligent RAG Technology',
    description: 'Advanced retrieval-augmented generation ensures accurate, contextual responses from your knowledge base.',
    badge: 'AI-Powered',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Setup',
    description: 'Get up and running in under 5 minutes. Just add your website URL and our AI handles the rest.',
    badge: 'Quick Start',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Automatic Web Crawling',
    description: 'Our intelligent crawler indexes your entire website, understanding context and relationships between content.',
    badge: 'Smart Indexing',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, SOC 2 compliance, and GDPR ready. Your data is always secure and private.',
    badge: 'Secure',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description: 'Match your brand perfectly with custom colors, fonts, and positioning. White-label options available.',
    badge: 'Flexible',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track conversations, identify knowledge gaps, and understand customer needs with detailed insights.',
    badge: 'Insights',
    color: 'from-indigo-500 to-orange-500',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'RESTful API, webhooks, and SDKs for seamless integration with your existing tech stack.',
    badge: 'API First',
    color: 'from-gray-600 to-gray-700',
  },
  {
    icon: Users,
    title: 'Multi-tenant Architecture',
    description: 'Perfect for agencies and enterprises managing multiple brands or websites from one dashboard.',
    badge: 'Scalable',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: MessageSquare,
    title: 'Human Handoff',
    description: 'Seamlessly transfer complex queries to human agents when needed, maintaining context.',
    badge: 'Hybrid',
    color: 'from-violet-500 to-orange-500',
  },
]

const mainFeatures = [
  {
    icon: Database,
    title: 'Smart Knowledge Base',
    description: 'Automatically builds and maintains a comprehensive knowledge base from your content.',
    items: ['Auto-indexing', 'Content relationships', 'Version control', 'Real-time updates']
  },
  {
    icon: Sparkles,
    title: 'AI Conversations',
    description: 'Natural, context-aware conversations that feel human and resolve queries instantly.',
    items: ['Natural language', 'Multi-turn dialog', 'Context retention', 'Personality customization']
  },
  {
    icon: Settings,
    title: 'Complete Control',
    description: 'Fine-tune every aspect of your chatbot to match your business needs perfectly.',
    items: ['Response tuning', 'Escalation rules', 'Business hours', 'Language settings']
  },
]

export default function Features() {
  return (
    <Section size="lg" className="relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Badge variant="gradient" className="px-4 py-1.5">
              <Sparkles className="h-3 w-3 mr-2" />
              Platform Features
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Delight Your Customers
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Powerful features designed to transform your customer support experience
          </motion.p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 group">
                <CardContent className="p-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20 inline-flex mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 bg-white dark:bg-gray-900 hover:shadow-lg">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity" />

                <div className="relative">
                  <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${feature.color} mb-4`}>
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>

                  <Badge variant="outline" className="absolute top-0 right-0 text-xs">
                    {feature.badge}
                  </Badge>

                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}