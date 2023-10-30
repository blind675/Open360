/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["puppeteer-core", "mongoose"],
  },
  reactStrictMode: true,
  images: {
    domains: ["panoptes-uploads.zooniverse.org", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
