export const seoConfig = {
  titleTemplate: '%s | RagSense - AI-Powered Customer Support',
  defaultTitle: 'RagSense - AI-Powered Customer Support Platform',
  defaultDescription: 'Transform your website content into an intelligent AI chatbot. Instant answers, 24/7 support, seamless integration. Start your free trial today.',
  siteUrl: 'https://ragsense.co',
  siteName: 'RagSense',
  siteLanguage: 'en',
  siteLocale: 'en_US',
  twitterHandle: '@ragsense',
  twitterCardType: 'summary_large_image',
  googleSiteVerification: '', // Add your Google verification code
  bingSiteVerification: '', // Add your Bing verification code

  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: 'RagSense',
    profile: {
      firstName: 'RagSense',
      username: 'ragsense',
    },
    images: [
      {
        url: 'https://ragsense.co/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RagSense - AI-Powered Customer Support Platform',
      },
    ],
  },

  twitter: {
    handle: '@ragsense',
    site: '@ragsense',
    cardType: 'summary_large_image',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://ragsense.co/#organization',
  name: 'RagSense',
  url: 'https://ragsense.co',
  logo: {
    '@type': 'ImageObject',
    url: 'https://ragsense.co/favicon/favicon-512x512.png',
    width: 512,
    height: 512,
  },
  sameAs: [
    'https://twitter.com/ragsense',
    'https://linkedin.com/company/ragsense',
    'https://github.com/ragsense',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@ragsense.co',
    contactType: 'customer support',
    availableLanguage: ['en'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://ragsense.co/#website',
  url: 'https://ragsense.co',
  name: 'RagSense',
  description: 'AI-Powered Customer Support Platform',
  publisher: {
    '@id': 'https://ragsense.co/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://ragsense.co/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-US',
}

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RagSense',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '29',
    highPrice: '299',
    offerCount: '3',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        price: '29',
        priceCurrency: 'USD',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Professional',
        price: '79',
        priceCurrency: 'USD',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise',
        price: 'Custom',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  screenshot: 'https://ragsense.co/screenshots/dashboard.png',
  featureList: [
    'AI-Powered Responses',
    '24/7 Availability',
    'Multi-language Support',
    'Real-time Analytics',
    'Custom Branding',
    'API Integration',
    'GDPR Compliant',
    'SSL Security',
  ],
  softwareVersion: '2.0',
  releaseNotes: 'https://ragsense.co/changelog',
  url: 'https://ragsense.co',
  provider: {
    '@id': 'https://ragsense.co/#organization',
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can I set up RagSense?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RagSense can be set up in just 5 minutes. Simply add our widget code to your website, and our AI will automatically index your content and start answering questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does RagSense support multiple languages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, RagSense supports over 95 languages automatically. Your chatbot can understand and respond in the language your customers prefer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of support is included?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All plans include email support. Professional and Enterprise plans also include priority chat support and dedicated account managers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customize the chatbot appearance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can fully customize the chatbot to match your brand with custom colors, logos, and messaging. Enterprise plans also offer white-label solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free trial available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required.',
      },
    },
  ],
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'RagSense AI Chatbot',
  description: 'Transform your website content into an intelligent AI chatbot that provides instant, accurate answers to customer questions 24/7.',
  brand: {
    '@type': 'Brand',
    name: 'RagSense',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '29',
    highPrice: '299',
    offerCount: '3',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'John Smith',
      },
      datePublished: '2024-01-15',
      reviewBody: 'RagSense transformed our customer support. Setup was incredibly easy and our response times dropped by 80%.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
  ],
}