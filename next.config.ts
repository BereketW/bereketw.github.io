import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath:'/bereketw.github.io',
  assetPrefix: '/bereketw.github.io',
  

  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
