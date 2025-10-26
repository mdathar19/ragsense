'use client'

import React from 'react'
import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How quickly can I get RagSense up and running?',
    answer: 'You can have RagSense fully operational on your website in under 5 minutes. Simply add your website URL, let our AI index your content (usually takes 2-3 minutes depending on size), customize the appearance, and embed the widget with a single line of code.'
  },
  {
    question: 'What types of content can RagSense index?',
    answer: 'RagSense can index all public content on your website including HTML pages, PDFs, documentation, blog posts, FAQs, and product descriptions. We respect robots.txt files and can also integrate with your knowledge base APIs for comprehensive coverage.'
  },
  {
    question: 'How accurate are the AI responses?',
    answer: 'Our RAG (Retrieval-Augmented Generation) technology ensures responses are based directly on your content, achieving over 95% accuracy. The AI provides source citations and only answers questions based on your actual content, preventing hallucinations.'
  },
  {
    question: 'Can I customize the chatbot\'s appearance and behavior?',
    answer: 'Absolutely! You can fully customize colors, fonts, positioning, welcome messages, and response style to match your brand. You can also set escalation rules, business hours, and configure when to hand off to human agents.'
  },
  {
    question: 'What languages does RagSense support?',
    answer: 'RagSense supports over 95 languages. The AI can understand questions in any language and respond in the same language, making it perfect for global businesses. You can also set preferred languages for specific domains.'
  },
  {
    question: 'Is my data secure with RagSense?',
    answer: 'Yes, security is our top priority. We use bank-level encryption, are SOC 2 compliant, and GDPR ready. Your data is never shared with third parties, and you maintain full ownership. We also offer on-premise deployment for enterprise clients.'
  },
  {
    question: 'What happens if the AI can\'t answer a question?',
    answer: 'When the AI encounters a question it can\'t answer from your content, it can gracefully hand off to human agents, collect contact information for follow-up, or direct users to relevant resources. You have full control over these fallback behaviors.'
  },
  {
    question: 'How does pricing work?',
    answer: 'We offer transparent, usage-based pricing starting with a generous free tier. Plans scale based on monthly conversations, indexed pages, and additional features. All plans include a 30-day free trial with no credit card required.'
  },
  {
    question: 'Can I integrate RagSense with my existing tools?',
    answer: 'Yes! RagSense integrates seamlessly with popular tools like Slack, Zendesk, Salesforce, HubSpot, and more. We also provide a comprehensive API and webhooks for custom integrations with your existing tech stack.'
  },
  {
    question: 'Do you offer white-label solutions?',
    answer: 'Yes, we offer white-label solutions for agencies and enterprises. You can completely remove RagSense branding and customize the platform to match your brand identity. Contact our enterprise team for more details.'
  }
]

export default function FAQ() {
  return (
    <Section size="lg" className="bg-gray-50 dark:bg-gray-900/50">
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
              <HelpCircle className="h-3 w-3 mr-2" />
              FAQ
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Everything you need to know about RagSense
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <Accordion.Trigger className="w-full group">
                  <div className="flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="h-5 w-5 text-orange-600 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
          >
            Contact our support team
            <ChevronDown className="h-4 w-4 -rotate-90" />
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}