/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
      {
        protocol: "https",
        hostname: "jherr-pokemon.s3.us-west-1.amazonaws.com"
      }
    ],
  },
};

module.exports = nextConfig;
