'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Section, Container } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import {
  Globe,
  Brain,
  Sparkles,
  Code,
  CheckCircle,
  ArrowRight,
  Link as LinkIcon
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Add Your Website',
    description: 'Simply enter your website URL and let our intelligent crawler do the work.',
    icon: LinkIcon,
    color: 'from-blue-500 to-cyan-500',
    features: ['Automatic sitemap detection', 'Smart content extraction', 'Respects robots.txt'],
    image: '/images/how-it-works/step-1.png'
  },
  {
    number: '02',
    title: 'AI Indexes Content',
    description: 'Our AI analyzes and understands your content, creating a comprehensive knowledge base.',
    icon: Brain,
    color: 'from-orange-500 to-pink-500',
    features: ['Semantic understanding', 'Context mapping', 'Automatic categorization'],
    image: '/images/how-it-works/step-2.png'
  },
  {
    number: '03',
    title: 'Customize & Configure',
    description: 'Fine-tune responses, appearance, and behavior to match your brand perfectly.',
    icon: Sparkles,
    color: 'from-orange-500 to-red-500',
    features: ['Brand customization', 'Response tuning', 'Escalation rules'],
    image: '/images/how-it-works/step-3.png'
  },
  {
    number: '04',
    title: 'Deploy Instantly',
    description: 'Embed the widget on your website with a single line of code and go live.',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    features: ['One-line installation', 'Auto-updates', 'No maintenance'],
    image: '/images/how-it-works/step-4.png'
  },
]

export default function HowItWorks() {
  return (
    <Section size="lg" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5" />

      <Container className="relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Badge variant="gradient" className="px-4 py-1.5">
              <Globe className="h-3 w-3 mr-2" />
              How It Works
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
          >
            From Website to AI Agent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              in Four Simple Steps
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Launch your intelligent support agent in minutes, not months
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-xl opacity-30`} />
                    <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {step.number}
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10`}>
                    <step.icon className="h-6 w-6 text-gray-900 dark:text-white" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center gap-2 text-orange-600 font-semibold pt-4">
                    <span>Next step</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>

              {/* Visual */}
              <div className="flex-1">
                <div className="relative">
                  {/* Gradient glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-3xl opacity-20 -z-10`} />

                  {/* Image container */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="relative bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative aspect-video bg-gray-800">
                      <Image
                        src={step.image}
                        alt={`${step.title} - Step ${step.number}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority={index === 0}
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* Corner accents */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 blur-2xl pointer-events-none`} />
                    <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${step.color} opacity-10 blur-2xl pointer-events-none`} />
                  </motion.div>

                  {/* Decorative border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 -z-10 blur-sm`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline for mobile */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-600 to-orange-700" />
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-start gap-4 mb-8">
                <div className={`relative z-10 h-16 w-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold`}>
                  {step.number}
                </div>
                <div className="flex-1 pt-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}