/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['previews.123rf.com'],
  },
}

module.exports = nextConfig
