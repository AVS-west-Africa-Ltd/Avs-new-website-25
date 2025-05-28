// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com','cdn.builder.io'], // Add any other external domains here
  },
  // You can add other config options as needed here
  eslint: {
    // ✅ Ignore ESLint errors during production build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;