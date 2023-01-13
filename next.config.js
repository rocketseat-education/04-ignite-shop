/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["files.stripe.com", "31270.cdn.simplo7.net"],
  },

  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
