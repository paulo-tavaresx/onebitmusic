/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '192.168.18.5'
      }
    ]
  }
}

module.exports = nextConfig
