/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/es-es/(quenes-somos)/:slug',
        destination: '/about/:slug',
        locale: false,
      },
    ]
  }
}

module.exports = nextTranslate(nextConfig)
