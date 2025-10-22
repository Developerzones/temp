/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'contentstatic.techgig.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'www.helixgram.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // For the current placeholder images
      }
    ],
  },
}

module.exports = nextConfig