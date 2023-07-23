/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/" : "/",
   output: 'export'
};

module.exports = nextConfig;
