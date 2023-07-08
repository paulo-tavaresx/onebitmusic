/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.18.5'
      },
      {
        protocol: 'https',
        hostname: 'onebitmusic-pi.vercel.app'
      }
    ]
  }
}

module.exports = nextConfig
