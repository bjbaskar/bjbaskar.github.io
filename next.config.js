/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: '_static',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
