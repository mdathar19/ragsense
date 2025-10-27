import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogType?: string
  ogImage?: string
  twitterCard?: string
  noindex?: boolean
  structuredData?: object | object[]
  additionalMetaTags?: Array<{ name: string; content: string }>
  additionalLinkTags?: Array<{ rel: string; href: string }>
}

export default function SEOHead({
  title = 'RagSense - AI-Powered Customer Support Platform',
  description = 'Transform your website content into an intelligent AI chatbot. Instant answers, 24/7 support, seamless integration.',
  canonical,
  ogType = 'website',
  ogImage = 'https://ragsense.co/og-image.png',
  twitterCard = 'summary_large_image',
  noindex = false,
  structuredData,
  additionalMetaTags = [],
  additionalLinkTags = [],
}: SEOHeadProps) {
  const router = useRouter()
  const baseUrl = 'https://ragsense.co'
  const currentUrl = `${baseUrl}${router.asPath}`
  const canonicalUrl = canonical || currentUrl

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="RagSense" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ragsense" />
      <meta name="twitter:creator" content="@ragsense" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* PWA */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#f97316" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RagSense" />

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Additional Meta Tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}

      {/* Additional Link Tags */}
      {additionalLinkTags.map((tag, index) => (
        <link key={index} rel={tag.rel} href={tag.href} />
      ))}

      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              Array.isArray(structuredData) ? structuredData : [structuredData]
            ),
          }}
        />
      )}

      {/* Language */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* RSS Feed (if applicable) */}
      <link rel="alternate" type="application/rss+xml" title="RagSense Blog RSS Feed" href="/blog/rss.xml" />

      {/* Search */}
      <link rel="search" type="application/opensearchdescription+xml" title="RagSense" href="/opensearch.xml" />
    </Head>
  )
}