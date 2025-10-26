/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/platform',
        destination: 'https://labs.ragsense.co',
        permanent: false,
      },
      {
        source: '/app',
        destination: 'https://labs.ragsense.co',
        permanent: false,
      },
      {
        source: '/dashboard',
        destination: 'https://labs.ragsense.co/login',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig