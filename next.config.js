/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    APP_API_URL: process.env.APP_API_URL,
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
    }
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  future: {
    webpack5: true,
  },
}

module.exports = nextConfig
