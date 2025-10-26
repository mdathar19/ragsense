'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  PlayCircle,
  BookOpen,
  Clock,
  ArrowRight,
  Code,
  Palette,
  Globe,
  BarChart3,
  Shield,
  Zap,
  Search,
  Users
} from 'lucide-react'

const tutorials = [
  {
    category: 'Getting Started',
    color: 'from-blue-500 to-cyan-500',
    tutorials: [
      {
        title: 'Your First AI Chatbot in 5 Minutes',
        description: 'Complete walkthrough from signup to live chatbot',
        duration: '5 min',
        level: 'Beginner',
        icon: Zap,
        topics: ['Account setup', 'Website crawling', 'Widget installation']
      },
      {
        title: 'Understanding RAG Technology',
        description: 'Learn how RagSense uses AI to understand your content',
        duration: '10 min',
        level: 'Beginner',
        icon: BookOpen,
        topics: ['RAG basics', 'Content indexing', 'Response generation']
      },
      {
        title: 'Optimizing Content for Better Responses',
        description: 'Best practices for structuring your website content',
        duration: '15 min',
        level: 'Intermediate',
        icon: BarChart3,
        topics: ['Content structure', 'SEO optimization', 'Metadata']
      }
    ]
  },
  {
    category: 'Customization',
    color: 'from-orange-500 to-pink-500',
    tutorials: [
      {
        title: 'Brand Customization Guide',
        description: 'Match the chatbot perfectly to your brand identity',
        duration: '8 min',
        level: 'Beginner',
        icon: Palette,
        topics: ['Colors & themes', 'Custom messages', 'Widget positioning']
      },
      {
        title: 'Advanced Response Tuning',
        description: 'Fine-tune how your chatbot responds to queries',
        duration: '12 min',
        level: 'Advanced',
        icon: Code,
        topics: ['Response templates', 'Personality settings', 'Custom rules']
      },
      {
        title: 'Multi-language Setup',
        description: 'Configure support for multiple languages',
        duration: '10 min',
        level: 'Intermediate',
        icon: Globe,
        topics: ['Language detection', 'Translation settings', 'Regional customization']
      }
    ]
  },
  {
    category: 'Integration',
    color: 'from-green-500 to-emerald-500',
    tutorials: [
      {
        title: 'WordPress Integration',
        description: 'Step-by-step guide for WordPress sites',
        duration: '7 min',
        level: 'Beginner',
        icon: Globe,
        topics: ['Plugin installation', 'Configuration', 'Testing']
      },
      {
        title: 'React Component Integration',
        description: 'Integrate RagSense in your React application',
        duration: '15 min',
        level: 'Advanced',
        icon: Code,
        topics: ['NPM package', 'Component setup', 'Custom hooks']
      },
      {
        title: 'API Integration Deep Dive',
        description: 'Build custom integrations with our API',
        duration: '20 min',
        level: 'Advanced',
        icon: Code,
        topics: ['Authentication', 'Webhooks', 'Custom workflows']
      }
    ]
  },
  {
    category: 'Analytics & Optimization',
    color: 'from-orange-500 to-red-500',
    tutorials: [
      {
        title: 'Understanding Your Analytics Dashboard',
        description: 'Make data-driven decisions with insights',
        duration: '10 min',
        level: 'Intermediate',
        icon: BarChart3,
        topics: ['Metrics overview', 'Report generation', 'KPI tracking']
      },
      {
        title: 'Identifying Knowledge Gaps',
        description: 'Find and fix content gaps in your knowledge base',
        duration: '12 min',
        level: 'Intermediate',
        icon: Search,
        topics: ['Gap analysis', 'Content improvement', 'FAQ generation']
      },
      {
        title: 'Performance Optimization',
        description: 'Optimize response time and accuracy',
        duration: '15 min',
        level: 'Advanced',
        icon: Zap,
        topics: ['Cache settings', 'Crawl optimization', 'Response tuning']
      }
    ]
  }
]

export default function Tutorials() {
  return (
    <Section size="lg" id="tutorials">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gradient" className="px-4 py-1.5 mb-4">
            <PlayCircle className="h-3 w-3 mr-2" />
            Video Tutorials
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Learn by Doing with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Step-by-Step Tutorials
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive guides to help you master every aspect of RagSense
          </p>
        </div>

        {/* Tutorial Categories */}
        <div className="space-y-16">
          {tutorials.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white px-4">
                  {category.category}
                </h3>
                <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${category.color}`} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.tutorials.map((tutorial, index) => (
                  <Card
                    key={tutorial.title}
                    className="hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                          <tutorial.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {tutorial.level}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            {tutorial.duration}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                        {tutorial.title}
                      </CardTitle>
                      <CardDescription>{tutorial.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          You'll learn:
                        </div>
                        <ul className="space-y-1">
                          {tutorial.topics.map((topic) => (
                            <li key={topic} className="flex items-start gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-1.5 flex-shrink-0" />
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-orange-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                        Watch tutorial
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Need More Help?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join our community or schedule a personalized demo
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <BookOpen className="h-4 w-4 mr-2" />
                Weekly Webinars
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Community Forum
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Priority Support
              </Badge>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}