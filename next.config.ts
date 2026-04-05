import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static-basket-02.wbbasket.ru',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.wbbasket.ru', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'main-cdn.sbermegamarket.ru',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'st.aestatic.net',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
