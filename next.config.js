/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: "standalone",
  distDir: "build",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
