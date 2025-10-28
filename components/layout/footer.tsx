import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Brain,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    // { name: 'Integrations', href: '/integrations' },
    { name: 'Pricing', href: '/pricing' },
    // { name: 'Changelog', href: '/changelog' },
    // { name: 'API Reference', href: '/docs/api' },
  ],
  solutions: [
    // { name: 'E-commerce', href: '/solutions/ecommerce' },
    // { name: 'SaaS', href: '/solutions/saas' },
    // { name: 'Enterprise', href: '/solutions/enterprise' },
    // { name: 'Startups', href: '/solutions/startups' },
    // { name: 'Agencies', href: '/solutions/agencies' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    // { name: 'Blog', href: '/blog' },
    // { name: 'Guides', href: '/guides' },
    // { name: 'Webinars', href: '/webinars' },
    // { name: 'Case Studies', href: '/case-studies' },
  ],
  company: [
    // { name: 'About', href: '/about' },
    // { name: 'Careers', href: '/careers' },
    // { name: 'Contact', href: '/contact' },
    // { name: 'Partners', href: '/partners' },
    // { name: 'Press', href: '/press' },
  ],
  legal: [
    // { name: 'Privacy Policy', href: '/privacy' },
    // { name: 'Terms of Service', href: '/terms' },
    // { name: 'Cookie Policy', href: '/cookies' },
    // { name: 'Security', href: '/security' },
    // { name: 'GDPR', href: '/gdpr' },
  ],
}

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/ragsense', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com/ragsense', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ragsense', icon: Linkedin },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black border-t border-gray-200 dark:border-gray-800">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700">
        <Container>
          <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Stay updated</h3>
                <p className="text-orange-100">Get the latest AI insights and product updates</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="min-w-[250px] bg-white/10 border-white/20 text-white placeholder:text-orange-200 focus:bg-white/20"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/favicon/favicon-96x96.png"
                    alt="RagSense Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-xl font-bold">RagSense</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
                Transform your customer support with intelligent AI chatbots that understand your business and delight your customers.
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:support@ragsense.co" className="hover:text-orange-600">
                    support@ragsense.co
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+918617852693" className="hover:text-orange-600">
                    +91 (861) 785-2693
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kolkata, India</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Solutions</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>&copy; {currentYear} RagSense. All rights reserved.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}