'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import * as Accordion from '@radix-ui/react-accordion'
import {
  AlertCircle,
  Search,
  FileWarning,
  WifiOff,
  RefreshCw,
  Shield,
  Zap,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  Terminal,
  Bug,
  CheckCircle
} from 'lucide-react'

const commonIssues = [
  {
    category: 'Widget Not Appearing',
    icon: FileWarning,
    color: 'from-red-500 to-orange-500',
    issues: [
      {
        title: 'Widget script not loading',
        description: 'The chat widget is not visible on my website',
        solution: 'Verify the script is placed before the closing </body> tag and check for JavaScript errors in the browser console. Ensure your API key is valid and the domain is whitelisted in your dashboard.',
        code: `// Check browser console for errors
console.log('RagSense loaded:', typeof window.RagSense !== 'undefined');

// Verify script placement
<script src="https://widget.ragsense.co/v1/widget.js"
        data-key="YOUR_API_KEY"
        async>
</script>`
      },
      {
        title: 'Widget blocked by ad blockers',
        description: 'Some users cannot see the widget',
        solution: 'Ad blockers may block third-party scripts. Add ragsense.co to your Content Security Policy whitelist and inform users to whitelist your domain.',
        code: `// Add to your CSP header
Content-Security-Policy:
  script-src 'self' https://widget.ragsense.co;
  connect-src 'self' https://api.ragsense.co;`
      },
      {
        title: 'Conflicting CSS styles',
        description: 'Widget appears broken or misaligned',
        solution: 'Check for CSS conflicts with your site styles. The widget uses isolated styles but z-index conflicts may occur. Try adding a higher z-index to the widget container.',
        code: `/* Add to your CSS */
#ragsense-widget {
  z-index: 99999 !important;
}`
      }
    ]
  },
  {
    category: 'Crawling Issues',
    icon: WifiOff,
    color: 'from-blue-500 to-cyan-500',
    issues: [
      {
        title: 'Website not being crawled',
        description: 'The crawler cannot access my website content',
        solution: 'Ensure your robots.txt allows our crawler (RagSense-Bot). Check if your site requires authentication or has IP restrictions. Verify your sitemap is accessible.',
        code: `# Add to robots.txt
User-agent: RagSense-Bot
Allow: /
Sitemap: https://yoursite.com/sitemap.xml`
      },
      {
        title: 'Incomplete content indexing',
        description: 'Some pages are missing from the knowledge base',
        solution: 'Check crawl depth settings in your dashboard. Increase max pages limit if needed. Ensure important pages are linked from your main navigation or sitemap.',
        code: `// API call to trigger re-crawl
POST /api/v1/websites/{id}/crawl
{
  "maxPages": 500,
  "followLinks": true,
  "respectRobotsTxt": true
}`
      },
      {
        title: 'Dynamic content not indexed',
        description: 'JavaScript-rendered content is not being captured',
        solution: 'Enable JavaScript rendering in crawl settings. Note that this may slow down crawling. Consider server-side rendering for critical content.',
        code: `// Enable JS rendering
{
  "crawlSettings": {
    "renderJavaScript": true,
    "waitForSelector": ".content-loaded",
    "timeout": 10000
  }
}`
      }
    ]
  },
  {
    category: 'Response Quality',
    icon: MessageSquare,
    color: 'from-orange-500 to-pink-500',
    issues: [
      {
        title: 'Inaccurate or irrelevant responses',
        description: 'The chatbot gives wrong or unrelated answers',
        solution: 'Review your content structure and ensure clear, well-organized information. Use structured data and metadata. Fine-tune response settings in the dashboard.',
        code: `<!-- Add structured data to your pages -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are your business hours?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We are open Monday-Friday, 9AM-6PM EST"
    }
  }]
}
</script>`
      },
      {
        title: 'Responses too long or too short',
        description: 'Answer length is not appropriate',
        solution: 'Adjust response length settings in your dashboard. Configure min/max tokens and response style (concise, detailed, conversational).',
        code: `// API configuration
{
  "responseSettings": {
    "maxTokens": 150,
    "temperature": 0.7,
    "style": "concise"
  }
}`
      },
      {
        title: 'Outdated information in responses',
        description: 'Chatbot provides old or incorrect information',
        solution: 'Schedule regular re-crawls to keep content fresh. Set up webhooks to trigger updates when content changes. Check last crawl date in dashboard.',
        code: `// Webhook for content updates
POST https://api.ragsense.co/v1/webhooks/content-update
{
  "websiteId": "your-site-id",
  "urls": ["https://yoursite.com/updated-page"]
}`
      }
    ]
  },
  {
    category: 'Performance Issues',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    issues: [
      {
        title: 'Slow response times',
        description: 'The chatbot takes too long to respond',
        solution: 'Check your region settings and choose the closest server location. Enable response caching for common queries. Optimize content size and structure.',
        code: `// Enable caching
{
  "performance": {
    "enableCache": true,
    "cacheTimeout": 3600,
    "region": "us-east-1"
  }
}`
      },
      {
        title: 'High API latency',
        description: 'API calls are taking too long',
        solution: 'Implement request batching for multiple operations. Use webhooks instead of polling. Consider upgrading your plan for higher rate limits.',
        code: `// Batch API requests
POST /api/v1/batch
{
  "operations": [
    { "method": "GET", "path": "/websites" },
    { "method": "GET", "path": "/analytics" }
  ]
}`
      },
      {
        title: 'Widget loading slowly',
        description: 'The chat widget takes time to appear',
        solution: 'Implement lazy loading with Intersection Observer. Preload the widget script. Use our CDN endpoints for faster delivery.',
        code: `// Lazy load widget
const loadWidget = () => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const script = document.createElement('script');
        script.src = 'https://widget.ragsense.co/v1/widget.js';
        script.setAttribute('data-key', 'YOUR_KEY');
        document.body.appendChild(script);
        observer.disconnect();
      }
    });
    observer.observe(document.body);
  }
};`
      }
    ]
  }
]

const errorCodes = [
  { code: '401', message: 'Unauthorized', description: 'Invalid API key or expired token', solution: 'Verify your API key in the dashboard and ensure it hasn\'t expired' },
  { code: '403', message: 'Forbidden', description: 'Domain not whitelisted or plan limits exceeded', solution: 'Add your domain to the whitelist or upgrade your plan' },
  { code: '404', message: 'Not Found', description: 'Resource doesn\'t exist', solution: 'Check the resource ID and ensure it hasn\'t been deleted' },
  { code: '429', message: 'Too Many Requests', description: 'Rate limit exceeded', solution: 'Implement exponential backoff or upgrade to a higher plan' },
  { code: '500', message: 'Internal Server Error', description: 'Server-side issue', solution: 'Contact support if the issue persists' },
  { code: '503', message: 'Service Unavailable', description: 'Temporary server maintenance', solution: 'Check status page and retry after a few minutes' },
]

export default function Troubleshooting() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredIssues = commonIssues.filter(category =>
    category.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.issues.some(issue =>
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <Section size="lg" className="bg-gray-50 dark:bg-gray-900/50" id="troubleshooting">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="gradient" className="px-4 py-1.5 mb-4">
            <Bug className="h-3 w-3 mr-2" />
            Troubleshooting
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Common Issues &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Quick Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find solutions to common problems and get your chatbot running smoothly
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for issues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 h-12"
          />
        </div>

        {/* Common Issues */}
        <div className="space-y-8 mb-16">
          {filteredIssues.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <Accordion.Root type="single" collapsible>
                {category.issues.map((issue, index) => (
                  <Accordion.Item key={index} value={`${category.category}-${index}`}>
                    <Card className="mb-4">
                      <Accordion.Trigger className="w-full">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="text-left">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 text-amber-500" />
                                {issue.title}
                              </CardTitle>
                              <CardDescription className="mt-1">
                                {issue.description}
                              </CardDescription>
                            </div>
                            <ChevronDown className="h-5 w-5 text-gray-500 transition-transform data-[state=open]:rotate-180" />
                          </div>
                        </CardHeader>
                      </Accordion.Trigger>
                      <Accordion.Content>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="font-semibold text-sm">Solution</span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {issue.solution}
                              </p>
                            </div>
                            {issue.code && (
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Terminal className="h-4 w-4 text-orange-600" />
                                  <span className="font-semibold text-sm">Code Example</span>
                                </div>
                                <pre className="p-4 rounded-lg bg-gray-900 text-gray-100 overflow-x-auto text-xs">
                                  <code>{issue.code}</code>
                                </pre>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Accordion.Content>
                    </Card>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.div>
          ))}
        </div>

        {/* Error Codes Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Error Code Reference
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Error
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Solution
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                {errorCodes.map((error) => (
                  <tr key={error.code}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={error.code.startsWith('4') ? 'warning' : 'destructive'}>
                        {error.code}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {error.message}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {error.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {error.solution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800"
        >
          <div className="text-center">
            <HelpCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Still Need Help?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Can't find a solution? Our support team is here to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
              <Button size="lg" variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Check System Status
              </Button>
              <Button size="lg" variant="outline">
                <Shield className="h-4 w-4 mr-2" />
                Report Security Issue
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}