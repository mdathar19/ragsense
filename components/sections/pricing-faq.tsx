'use client'

import React from 'react'
import { motion } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { HelpCircle, ChevronDown, DollarSign, Zap, CreditCard, RefreshCw } from 'lucide-react'

// Define FAQ categories with icons
const faqCategories = [
  {
    name: 'Billing Questions',
    icon: DollarSign,
    faqs: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through our PCI-compliant payment gateway.'
      },
      {
        question: 'How does billing work for the different plans?',
        answer: 'You can choose to pay monthly or annually. Annual plans receive a 20% discount (equivalent to 2 months free). Billing occurs on the same day each month/year from your signup date. You can change your billing cycle at any time.'
      },
      {
        question: 'What happens if I exceed my monthly conversation limit?',
        answer: 'If you approach your monthly conversation limit, we\'ll send you a notification. You can either upgrade to a higher tier or purchase additional conversation blocks at $10 per 1,000 conversations. Your chatbot will continue working seamlessly.'
      },
      {
        question: 'Are there any hidden fees or additional costs?',
        answer: 'No hidden fees! All our pricing is transparent. The only additional costs might be if you exceed your plan limits or choose to add premium integrations. We\'ll always notify you before any additional charges are applied.'
      },
      {
        question: 'Do you offer discounts for nonprofits or educational institutions?',
        answer: 'Yes! We offer a 30% discount for verified nonprofit organizations and educational institutions. Contact our sales team with your organization details to apply for the discount.'
      }
    ]
  },
  {
    name: 'Plan Changes & Upgrades',
    icon: RefreshCw,
    faqs: [
      {
        question: 'Can I upgrade or downgrade my plan at any time?',
        answer: 'Absolutely! You can upgrade or downgrade your plan at any time from your account dashboard. Upgrades take effect immediately, and you\'ll be charged a prorated amount. Downgrades take effect at the start of your next billing cycle.'
      },
      {
        question: 'What happens to my data if I downgrade?',
        answer: 'Your data remains safe and intact. However, features specific to higher tiers will be disabled. For example, if you downgrade from Professional to Starter, advanced analytics will become read-only, but your historical data is preserved.'
      },
      {
        question: 'Can I switch from monthly to annual billing?',
        answer: 'Yes! You can switch to annual billing at any time to save 20%. We\'ll calculate the prorated credit from your current monthly subscription and apply it to your annual plan.'
      },
      {
        question: 'How does the free trial work?',
        answer: 'Our 30-day free trial gives you full access to the Professional plan features with no credit card required. You can set up everything, test it thoroughly, and decide before making any payment. After the trial, you can choose any plan that fits your needs.'
      },
      {
        question: 'What if I need custom features not in any plan?',
        answer: 'We offer custom Enterprise solutions tailored to your specific needs. Contact our sales team to discuss your requirements, and we\'ll create a custom package with the exact features you need.'
      }
    ]
  },
  {
    name: 'Feature Questions',
    icon: Zap,
    faqs: [
      {
        question: 'What\'s the difference between basic and advanced customization?',
        answer: 'Basic customization includes changing colors, logos, welcome messages, and widget position. Advanced customization adds custom CSS, JavaScript injection, custom response templates, branded emails, and complete UI control to match your brand perfectly.'
      },
      {
        question: 'How many languages are supported in multi-language mode?',
        answer: 'Professional and Enterprise plans support all 95+ languages that our AI understands. The chatbot automatically detects the user\'s language and responds accordingly. You can also set preferred languages for specific domains or user segments.'
      },
      {
        question: 'What does "white-label" mean in the Enterprise plan?',
        answer: 'White-label means complete removal of RagSense branding. You can add your own branding everywhere, use custom domains, and even present the solution as your own product. Perfect for agencies reselling chatbot services.'
      },
      {
        question: 'How does API access work?',
        answer: 'Professional plans include 5,000 API calls per month, while Enterprise gets unlimited access. Our REST API lets you programmatically manage conversations, retrieve analytics, update content, and integrate RagSense into your existing tools and workflows.'
      },
      {
        question: 'Can I use RagSense on multiple websites with one account?',
        answer: 'Yes! Starter allows 1 website, Professional allows 3 websites, and Enterprise allows unlimited websites. Each website can have its own customization, content, and settings while managed from a single account.'
      },
      {
        question: 'What integrations are included in each plan?',
        answer: 'Starter includes basic embedding. Professional adds Shopify, WordPress, Slack, and webhook integrations. Enterprise includes everything plus Salesforce, Zendesk, HubSpot, and custom integrations via our API.'
      }
    ]
  },
  {
    name: 'Trial & Refund Policies',
    icon: CreditCard,
    faqs: [
      {
        question: 'Is the free trial really free?',
        answer: 'Yes, completely free! No credit card required to start. You get 30 days of full access to Professional features to evaluate RagSense thoroughly. Only pay if you decide to continue after the trial.'
      },
      {
        question: 'What is your refund policy?',
        answer: 'We offer a 30-day money-back guarantee on all paid plans. If you\'re not satisfied for any reason within the first 30 days, contact us for a full refund, no questions asked. Annual plans are eligible for prorated refunds up to 60 days.'
      },
      {
        question: 'Can I cancel my subscription at any time?',
        answer: 'Yes, you can cancel anytime from your account settings. There are no cancellation fees or long-term contracts. Your service continues until the end of your current billing period, and you won\'t be charged again.'
      },
      {
        question: 'What happens to my data after cancellation?',
        answer: 'After cancellation, your chatbot stops working immediately after your billing period ends. However, we keep your data for 90 days in case you want to reactivate. After 90 days, all data is permanently deleted unless you request an export.'
      },
      {
        question: 'Can I pause my subscription temporarily?',
        answer: 'Enterprise customers can pause their subscription for up to 3 months per year. For Starter and Professional plans, we recommend downgrading to a lower tier during slow periods, then upgrading when needed.'
      },
      {
        question: 'Do you offer a money-back guarantee?',
        answer: 'Yes! We stand behind our product with a 30-day money-back guarantee. If RagSense doesn\'t meet your expectations, just let us know within 30 days of purchase, and we\'ll issue a full refund.'
      }
    ]
  }
]

export default function PricingFAQ() {
  return (
    <Section size="lg" className="bg-white dark:bg-gray-950">
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
              Pricing FAQ
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Pricing & Billing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Frequently Asked Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Everything you need to know about our pricing, billing, and policies
          </motion.p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              {/* FAQ Accordion */}
              <Accordion.Root type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <Accordion.Item
                    key={faqIndex}
                    value={`${category.name}-${faqIndex}`}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                  >
                    <Accordion.Trigger className="w-full group">
                      <div className="flex items-center justify-between p-6 text-left hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white pr-4">
                          {faq.question}
                        </h4>
                        <ChevronDown className="h-5 w-5 text-orange-600 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </div>
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800"
        >
          <HelpCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our team is here to help! Whether you need clarification on pricing, want to discuss a custom plan, or have technical questions, we're just a message away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold transition-colors"
            >
              Contact Sales
              <ChevronDown className="h-4 w-4 -rotate-90" />
            </a>
            <a
              href="mailto:support@ragsense.co"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 text-orange-600 rounded-lg border-2 border-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-semibold transition-colors"
            >
              Email Support
              <ChevronDown className="h-4 w-4 -rotate-90" />
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
