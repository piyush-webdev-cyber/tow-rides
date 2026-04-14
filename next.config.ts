import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Hiox hosting (no Node.js/SSH access)
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
