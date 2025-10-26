'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Rocket,
  Globe,
  Settings,
  Code,
  CheckCircle,
  Copy,
  ArrowRight,
  Play,
  Bot,
  Database,
  Palette
} from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Create Your Account',
    description: 'Sign up at labs.ragsense.co and get instant access to your dashboard',
    code: null,
    action: 'Visit labs.ragsense.co/signup',
    icon: Rocket,
  },
  {
    number: '2',
    title: 'Add Your Website',
    description: 'Enter your website URL and configure crawl settings',
    code: JSON.stringify({
      name: 'My Company Website',
      domain: 'https://yourwebsite.com',
      maxPages: 500,
      crawlDelay: 1000,
      respectRobotsTxt: true
    }, null, 2),
    action: 'Navigate to Websites → Add Website',
    icon: Globe,
  },
  {
    number: '3',
    title: 'Start Crawling',
    description: 'Click "Start Crawling" to index your website content. Monitor progress with real-time logs',
    code: null,
    action: 'Click "Start Crawling" button',
    icon: Database,
  },
  {
    number: '4',
    title: 'Test Your Chatbot',
    description: 'Once crawling is complete, test your AI chatbot in the Chat interface',
    code: null,
    action: 'Go to Chat → Select website → Ask questions',
    icon: Bot,
  },
  {
    number: '5',
    title: 'Customize Widget',
    description: 'Configure appearance, position, colors, and greeting message',
    code: JSON.stringify({
      position: 'bottom-right',
      primaryColor: '#f97316',
      greeting: 'Hi! How can I help you today?',
      title: 'Support Assistant',
      placeholder: 'Type your question...'
    }, null, 2),
    action: 'Navigate to Widget Settings',
    icon: Palette,
  },
  {
    number: '6',
    title: 'Embed on Your Website',
    description: 'Copy the widget code and paste it before the closing </body> tag',
    code: `<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://widget.ragsense.co/v1/widget.js';
    script.setAttribute('data-key', 'YOUR_API_KEY');
    script.setAttribute('data-website-id', 'YOUR_WEBSITE_ID');
    script.async = true;
    document.body.appendChild(script);
  })();
</script>`,
    action: 'Copy code from Widget Settings',
    icon: Code,
  },
]

export default function QuickStart() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <Section size="lg" id="quick-start">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gradient" className="px-4 py-1.5 mb-4">
            <Rocket className="h-3 w-3 mr-2" />
            Quick Start Guide
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Get Your AI Chatbot Live in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Under 10 Minutes
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Follow these simple steps to add AI-powered chat support to your website
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                    <step.icon className="h-6 w-6 text-orange-600" />
                  </div>
                </CardHeader>
                {step.code && (
                  <CardContent>
                    <div className="relative">
                      <pre className="p-4 rounded-lg bg-gray-900 text-gray-100 overflow-x-auto text-sm">
                        <code>{step.code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute top-2 right-2"
                        onClick={() => handleCopy(step.code!, index)}
                      >
                        {copiedIndex === index ? (
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
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Play className="h-4 w-4" />
                      <span className="font-medium">Action:</span>
                      <span>{step.action}</span>
                    </div>
                  </CardContent>
                )}
                {!step.code && (
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Play className="h-4 w-4" />
                      <span className="font-medium">Action:</span>
                      <span>{step.action}</span>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Advanced Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Advanced Configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Database className="h-5 w-5 text-orange-600" />
                Crawl Settings
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Set max pages to crawl</li>
                <li>• Configure crawl delay</li>
                <li>• Specify allowed/excluded paths</li>
                <li>• Add multiple subdomains</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Palette className="h-5 w-5 text-orange-600" />
                Widget Customization
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Choose widget position</li>
                <li>• Customize colors and theme</li>
                <li>• Set greeting messages</li>
                <li>• Live preview changes</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Ready to Get Started?</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Rocket className="h-4 w-4 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              <Play className="h-4 w-4 mr-2" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline">
              <ArrowRight className="h-4 w-4 mr-2" />
              View Documentation
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}