'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import * as Tabs from '@radix-ui/react-tabs'
import {
  Code,
  Copy,
  CheckCircle,
  Globe,
  MessageSquare,
  Database,
  Settings,
  Key,
  Lock,
  Bot
} from 'lucide-react'

const endpoints = [
  {
    category: 'Website Management',
    icon: Globe,
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/user/websites',
        description: 'Get all websites for the authenticated user',
        params: null,
        response: { websites: 'array', total: 'number' }
      },
      {
        method: 'POST',
        path: '/api/v1/user/websites',
        description: 'Add a new website to your account',
        params: {
          name: 'string',
          domain: 'string',
          industry: 'string',
          description: 'string'
        },
        response: { website: 'object', message: 'string' }
      },
      {
        method: 'PUT',
        path: '/api/v1/user/websites/{id}',
        description: 'Update website configuration',
        params: {
          name: 'string',
          crawlSettings: 'object',
          status: 'string'
        },
        response: { website: 'object' }
      },
      {
        method: 'DELETE',
        path: '/api/v1/user/websites/{id}',
        description: 'Remove a website from your account',
        params: null,
        response: { success: 'boolean', message: 'string' }
      }
    ]
  },
  {
    category: 'Web Crawling',
    icon: Database,
    endpoints: [
      {
        method: 'POST',
        path: '/api/v1/user/crawl',
        description: 'Start crawling a website',
        params: {
          websiteId: 'string',
          maxPages: 'number',
          crawlDelay: 'number',
          respectRobotsTxt: 'boolean',
          allowedPaths: 'array',
          excludedPaths: 'array'
        },
        response: { jobId: 'string', status: 'string' }
      },
      {
        method: 'GET',
        path: '/api/v1/user/crawl/status/{jobId}',
        description: 'Get crawl job status',
        params: null,
        response: {
          status: 'string',
          pagesProcessed: 'number',
          errors: 'array'
        }
      },
      {
        method: 'GET',
        path: '/api/v1/user/crawl/logs/{websiteId}',
        description: 'Stream real-time crawl logs (Server-Sent Events)',
        params: null,
        response: {
          event: 'string',
          data: 'string'
        }
      }
    ]
  },
  {
    category: 'Chat & Query',
    icon: MessageSquare,
    endpoints: [
      {
        method: 'POST',
        path: '/api/v1/user/chat',
        description: 'Send a chat message and get AI response (streaming)',
        params: {
          websiteId: 'string',
          message: 'string',
          sessionId: 'string',
          stream: 'boolean'
        },
        response: {
          response: 'string',
          sources: 'array',
          relevanceScore: 'number'
        }
      },
      {
        method: 'GET',
        path: '/api/v1/user/chat/history/{sessionId}',
        description: 'Get conversation history',
        params: null,
        response: { messages: 'array' }
      },
      {
        method: 'DELETE',
        path: '/api/v1/user/chat/history/{sessionId}',
        description: 'Clear conversation history',
        params: null,
        response: { success: 'boolean' }
      }
    ]
  },
  {
    category: 'Widget Configuration',
    icon: Bot,
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/user/widget/{websiteId}',
        description: 'Get widget settings for a website',
        params: null,
        response: {
          settings: 'object',
          apiKey: 'string'
        }
      },
      {
        method: 'POST',
        path: '/api/v1/user/widget/{websiteId}',
        description: 'Update widget configuration',
        params: {
          enabled: 'boolean',
          position: 'string',
          primaryColor: 'string',
          greeting: 'string',
          title: 'string',
          placeholder: 'string'
        },
        response: { settings: 'object' }
      },
      {
        method: 'POST',
        path: '/api/v1/user/widget/api-key',
        description: 'Generate new API key for widget',
        params: { websiteId: 'string' },
        response: { apiKey: 'string' }
      }
    ]
  },
  {
    category: 'Subdomains',
    icon: Settings,
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/user/websites/{id}/subdomains',
        description: 'Get all subdomains for a website',
        params: null,
        response: { subdomains: 'array' }
      },
      {
        method: 'POST',
        path: '/api/v1/user/websites/{id}/subdomains',
        description: 'Add subdomain to website',
        params: {
          url: 'string',
          type: 'string' // main, subdomain, marketing, documentation
        },
        response: { subdomain: 'object' }
      }
    ]
  }
]

const codeExamples = {
  javascript: `// JavaScript Example - Start Crawling
const response = await fetch('https://api.ragsense.co/v1/user/crawl', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    websiteId: 'your-website-id',
    maxPages: 500,
    crawlDelay: 1000,
    respectRobotsTxt: true,
    excludedPaths: ['/admin', '/api', '/private']
  })
});

const data = await response.json();
console.log('Crawl Job ID:', data.jobId);`,
  python: `# Python Example - Chat Query
import requests

response = requests.post(
    'https://api.ragsense.co/v1/user/chat',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'websiteId': 'your-website-id',
        'message': 'What are your business hours?',
        'sessionId': 'user-session-123',
        'stream': False
    }
)

data = response.json()
print(f"Response: {data['response']}")
print(f"Sources: {data['sources']}")`,
  curl: `# cURL Example - Widget Configuration
curl -X POST https://api.ragsense.co/v1/user/widget/YOUR_WEBSITE_ID \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "enabled": true,
    "position": "bottom-right",
    "primaryColor": "#f97316",
    "greeting": "Hi! How can I help you today?",
    "title": "Support Assistant"
  }'`
}

export default function APIReference() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [selectedTab, setSelectedTab] = useState('javascript')

  const handleCopyCode = (language: string) => {
    navigator.clipboard.writeText(codeExamples[language as keyof typeof codeExamples])
    setCopiedCode(language)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <Section size="lg" className="bg-gray-50 dark:bg-gray-900/50" id="api-reference">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gradient" className="px-4 py-1.5 mb-4">
            <Code className="h-3 w-3 mr-2" />
            API Reference
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Developer API
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Documentation
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Complete API reference for managing websites, crawling, chat, and widget configuration
          </p>
        </div>

        {/* API Key Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800"
        >
          <div className="flex items-start gap-3">
            <Key className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Authentication Required
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All API requests require a valid Bearer token in the Authorization header.
                Get your API key from the{' '}
                <a href="https://labs.ragsense.co" className="text-orange-600 hover:underline">
                  dashboard → Widget Settings
                </a>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Endpoints */}
        <div className="space-y-12 mb-16">
          {endpoints.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-600 to-orange-700">
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.endpoints.map((endpoint, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={
                              endpoint.method === 'GET' ? 'success' :
                              endpoint.method === 'POST' ? 'default' :
                              endpoint.method === 'PUT' ? 'warning' :
                              'destructive'
                            }
                            className="font-mono"
                          >
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                            {endpoint.path}
                          </code>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {endpoint.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      {endpoint.params && (
                        <div className="mb-3">
                          <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Parameters
                          </h4>
                          <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                            <pre className="text-xs font-mono">
                              {JSON.stringify(endpoint.params, null, 2)}
                            </pre>
                          </div>
                        </div>
                      )}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Response
                        </h4>
                        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                          <pre className="text-xs font-mono">
                            {JSON.stringify(endpoint.response, null, 2)}
                          </pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Integration Examples
          </h3>

          <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
            <Tabs.List className="flex gap-2 mb-4 border-b border-gray-200 dark:border-gray-800">
              <Tabs.Trigger
                value="javascript"
                className={`px-4 py-2 font-medium transition-colors ${
                  selectedTab === 'javascript'
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-orange-600'
                }`}
              >
                JavaScript
              </Tabs.Trigger>
              <Tabs.Trigger
                value="python"
                className={`px-4 py-2 font-medium transition-colors ${
                  selectedTab === 'python'
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-orange-600'
                }`}
              >
                Python
              </Tabs.Trigger>
              <Tabs.Trigger
                value="curl"
                className={`px-4 py-2 font-medium transition-colors ${
                  selectedTab === 'curl'
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-orange-600'
                }`}
              >
                cURL
              </Tabs.Trigger>
            </Tabs.List>

            {Object.entries(codeExamples).map(([language, code]) => (
              <Tabs.Content key={language} value={language}>
                <div className="relative">
                  <pre className="p-6 rounded-xl bg-gray-900 text-gray-100 overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-4 right-4"
                    onClick={() => handleCopyCode(language)}
                  >
                    {copiedCode === language ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </motion.div>

        {/* Rate Limits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">API Rate Limits</h3>
          <div className="max-w-2xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-orange-300 dark:border-orange-700">
                  <th className="text-left py-2">Plan</th>
                  <th className="text-center py-2">Requests/Min</th>
                  <th className="text-center py-2">Requests/Month</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-orange-200 dark:border-orange-800">
                  <td className="py-3">Starter</td>
                  <td className="text-center">60</td>
                  <td className="text-center">10,000</td>
                </tr>
                <tr className="border-b border-orange-200 dark:border-orange-800">
                  <td className="py-3">Professional</td>
                  <td className="text-center">300</td>
                  <td className="text-center">100,000</td>
                </tr>
                <tr>
                  <td className="py-3">Enterprise</td>
                  <td className="text-center">Unlimited</td>
                  <td className="text-center">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}