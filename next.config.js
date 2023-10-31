/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  reactStrictMode: true,
  images: {
    domains: ["panoptes-uploads.zooniverse.org", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
