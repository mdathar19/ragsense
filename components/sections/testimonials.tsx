'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: '👩‍💼',
    rating: 5,
    content: 'RagSense transformed our customer support overnight. We went from 2-hour response times to instant answers. Our customers love it, and our support team can focus on complex issues.',
    highlight: 'Response time reduced by 95%'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Support',
    company: 'E-Shop Pro',
    image: '👨‍💻',
    rating: 5,
    content: 'The accuracy of responses is incredible. It understands our product documentation better than some of our new hires! Setup was seamless - we were live in under 10 minutes.',
    highlight: '70% reduction in support tickets'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'SaaS Solutions',
    image: '👩‍🔬',
    rating: 5,
    content: 'What impressed me most is how it learns and improves. The analytics show us exactly what customers are asking about, helping us improve our product and documentation.',
    highlight: '3x increase in conversions'
  },
  {
    name: 'David Kim',
    role: 'CTO',
    company: 'CloudTech',
    image: '👨‍💼',
    rating: 5,
    content: 'The API integration was straightforward, and the customization options are extensive. We\'ve integrated it with our existing support tools seamlessly.',
    highlight: 'Saved $50k annually'
  },
  {
    name: 'Lisa Wang',
    role: 'Marketing Director',
    company: 'Growth Labs',
    image: '👩‍🎨',
    rating: 5,
    content: 'Our website visitors now get instant answers to their questions, leading to higher engagement and conversion rates. It\'s like having a 24/7 sales assistant.',
    highlight: '40% higher engagement'
  },
  {
    name: 'James Wilson',
    role: 'Founder',
    company: 'StartupXYZ',
    image: '👨‍🚀',
    rating: 5,
    content: 'As a small team, RagSense gave us enterprise-level support capabilities. The ROI was positive within the first month. Absolutely game-changing for startups.',
    highlight: 'ROI positive in 30 days'
  },
]

export default function Testimonials() {
  return (
    <Section size="lg">
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
              <Star className="h-3 w-3 mr-2" />
              Customer Stories
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Loved by Teams
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
              Around the World
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            See what our customers have to say about their experience with RagSense
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-orange-600 mb-4 opacity-50" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Highlight */}
                  <div className="mb-4">
                    <Badge variant="secondary" className="font-semibold">
                      {testimonial.highlight}
                    </Badge>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="text-2xl">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}