import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ragsense.co'),
  title: {
    default: 'RagSense - AI-Powered Customer Support Platform',
    template: '%s | RagSense'
  },
  description: 'Transform your website content into an intelligent AI chatbot. Instant answers, 24/7 support, seamless integration. Start your free trial today.',
  keywords: [
    'AI chatbot',
    'customer support',
    'website chatbot',
    'RAG platform',
    'retrieval augmented generation',
    'AI support agent',
    'automated support',
    'chat widget',
    'website crawler',
    'knowledge base AI',
    'customer service automation',
    'intelligent automation',
    'SaaS'
  ],
  authors: [{ name: 'RagSense Team' }],
  creator: 'RagSense',
  publisher: 'RagSense',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ragsense.co',
    title: 'RagSense - AI-Powered Customer Support Platform',
    description: 'Transform your website content into an intelligent AI chatbot. Instant answers, 24/7 support, seamless integration.',
    siteName: 'RagSense',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RagSense - AI Customer Support Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RagSense - AI-Powered Customer Support Platform',
    description: 'Transform your website content into an intelligent AI chatbot. Instant answers, 24/7 support.',
    images: ['/twitter-image.png'],
    creator: '@ragsense',
    site: '@ragsense',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  alternates: {
    canonical: 'https://ragsense.co'
  },
  verification: {
    google: 'S07AquBdHVJnGifQ2LJx6YvGAL7FH_HsV-GUisBhhDM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#f97316" />

        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="RagSense" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RagSense" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'RagSense',
              applicationCategory: 'BusinessApplication',
              description: 'AI-powered customer support platform that transforms website content into intelligent chatbots',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                name: 'Free Trial',
                description: '14-day free trial, no credit card required'
              },
              operatingSystem: 'Web',
              url: 'https://ragsense.co',
              provider: {
                '@type': 'Organization',
                name: 'RagSense',
                url: 'https://ragsense.co'
              },
              featureList: [
                'AI-powered chat responses',
                'Website content crawling',
                'Real-time chat widget',
                'Multi-language support',
                'Advanced analytics',
                'API integration'
              ]
            })
          }}
        />
      </head>
      <body className={cn(
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable,
        'font-sans antialiased'
      )}>
        {children}
      </body>
    </html>
  )
}