/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "server",
  distDir: "_static",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
