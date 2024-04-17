/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/dibhc6pw4/image/upload/v1712887924/lfag-client',
  },
  unstable_runtimeJS: false,
}
export default nextConfig
