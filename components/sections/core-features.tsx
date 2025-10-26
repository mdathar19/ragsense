'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Brain,
  Globe,
  MessageSquare,
  Shield,
  Zap,
  BarChart3,
  Code,
  Users,
  Database,
  Settings,
  RefreshCw,
  Lock,
  Palette,
  FileText,
  Bot,
  Search,
  Cloud,
  Layers,
  GitBranch,
  Terminal
} from 'lucide-react'

const coreFeatures = [
  {
    category: 'AI & Intelligence',
    icon: Brain,
    color: 'from-orange-500 to-orange-600',
    features: [
      {
        icon: Bot,
        title: 'Advanced RAG Technology',
        description: 'Retrieval-Augmented Generation ensures responses are accurate and based on your actual content.',
        details: [
          'Semantic search across all content',
          'Context-aware responses',
          'Source attribution',
          'Hallucination prevention'
        ]
      },
      {
        icon: Search,
        title: 'Smart Content Understanding',
        description: 'AI that truly understands your content structure, relationships, and context.',
        details: [
          'Automatic categorization',
          'Entity recognition',
          'Relationship mapping',
          'Intent detection'
        ]
      },
      {
        icon: GitBranch,
        title: 'Multi-Model Support',
        description: 'Choose from GPT-4, Claude, and other leading AI models for optimal performance.',
        details: [
          'Model selection per use case',
          'Automatic fallback',
          'Cost optimization',
          'Performance tuning'
        ]
      }
    ]
  },
  {
    category: 'Content Management',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    features: [
      {
        icon: Globe,
        title: 'Intelligent Web Crawling',
        description: 'Automatically crawl and index your entire website with smart content extraction.',
        details: [
          'Sitemap detection',
          'JavaScript rendering',
          'PDF & document parsing',
          'Incremental updates'
        ]
      },
      {
        icon: FileText,
        title: 'Content Versioning',
        description: 'Track changes to your content over time with full version history.',
        details: [
          'Automatic versioning',
          'Change detection',
          'Rollback capability',
          'Audit trail'
        ]
      },
      {
        icon: RefreshCw,
        title: 'Real-time Sync',
        description: 'Keep your knowledge base in sync with automatic content updates.',
        details: [
          'Scheduled crawling',
          'Webhook triggers',
          'API sync',
          'Manual refresh'
        ]
      }
    ]
  },
  {
    category: 'Customer Experience',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-500',
    features: [
      {
        icon: Zap,
        title: 'Instant Responses',
        description: 'Sub-second response times with streaming for natural conversation flow.',
        details: [
          'Streaming responses',
          'Typing indicators',
          'Queue management',
          'Priority handling'
        ]
      },
      {
        icon: Palette,
        title: 'Full Customization',
        description: 'Match your brand perfectly with complete control over appearance and behavior.',
        details: [
          'Custom themes',
          'Brand colors & fonts',
          'Position & size',
          'Response personality'
        ]
      },
      {
        icon: Users,
        title: 'Multi-language Support',
        description: 'Serve global customers with support for 95+ languages.',
        details: [
          'Auto-detection',
          'Translation accuracy',
          'Cultural adaptation',
          'RTL support'
        ]
      }
    ]
  },
  {
    category: 'Analytics & Insights',
    icon: BarChart3,
    color: 'from-orange-500 to-red-500',
    features: [
      {
        icon: BarChart3,
        title: 'Conversation Analytics',
        description: 'Deep insights into customer interactions and support effectiveness.',
        details: [
          'Conversation metrics',
          'Sentiment analysis',
          'Topic clustering',
          'Performance KPIs'
        ]
      },
      {
        icon: Search,
        title: 'Knowledge Gap Analysis',
        description: 'Identify what customers are asking that your content doesn\'t cover.',
        details: [
          'Unanswered questions',
          'Content suggestions',
          'Trend identification',
          'Improvement tracking'
        ]
      },
      {
        icon: Terminal,
        title: 'API Analytics',
        description: 'Complete visibility into API usage and performance metrics.',
        details: [
          'Request monitoring',
          'Latency tracking',
          'Error rates',
          'Usage quotas'
        ]
      }
    ]
  },
  {
    category: 'Security & Compliance',
    icon: Shield,
    color: 'from-indigo-500 to-orange-500',
    features: [
      {
        icon: Lock,
        title: 'Enterprise Security',
        description: 'Bank-level security with end-to-end encryption and compliance.',
        details: [
          'AES-256 encryption',
          'SOC 2 Type II',
          'GDPR compliant',
          'HIPAA ready'
        ]
      },
      {
        icon: Shield,
        title: 'Access Control',
        description: 'Granular permissions and role-based access control.',
        details: [
          'Role management',
          'API key control',
          'IP whitelisting',
          'SSO integration'
        ]
      },
      {
        icon: Cloud,
        title: 'Data Residency',
        description: 'Choose where your data is stored with regional deployment options.',
        details: [
          'Multi-region support',
          'Data sovereignty',
          'Backup & recovery',
          'Disaster recovery'
        ]
      }
    ]
  },
  {
    category: 'Developer Experience',
    icon: Code,
    color: 'from-gray-600 to-gray-700',
    features: [
      {
        icon: Code,
        title: 'RESTful API',
        description: 'Comprehensive API for complete programmatic control.',
        details: [
          'Full CRUD operations',
          'Webhook support',
          'Rate limiting',
          'Batch operations'
        ]
      },
      {
        icon: Layers,
        title: 'SDK Libraries',
        description: 'Native SDKs for popular programming languages and frameworks.',
        details: [
          'JavaScript/TypeScript',
          'Python',
          'PHP',
          'Ruby'
        ]
      },
      {
        icon: Settings,
        title: 'Easy Integration',
        description: 'One-line installation with plugins for popular platforms.',
        details: [
          'WordPress plugin',
          'Shopify app',
          'React component',
          'Vue component'
        ]
      }
    ]
  }
]

export default function CoreFeatures() {
  return (
    <Section size="lg" className="bg-gray-50 dark:bg-gray-900/50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gradient" className="px-4 py-1.5 mb-4">
            <Sparkles className="h-3 w-3 mr-2" />
            Core Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Excel at Customer Support
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive features designed for enterprises, loved by startups
          </p>
        </div>

        {/* Features by Category */}
        <div className="space-y-20">
          {coreFeatures.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* Category Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.features.map((feature, index) => (
                  <Card
                    key={feature.title}
                    className="hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <feature.icon className="h-5 w-5 text-orange-600" />
                        <Badge variant="outline" className="text-xs">
                          Advanced
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

const Sparkles = Zap // Using Zap as Sparkles since it's imported