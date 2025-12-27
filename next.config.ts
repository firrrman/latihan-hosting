import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb", // atau "50mb"
    },
  },
  productionBrowserSourceMaps: false,
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.devtool = false;
    }
    return config;
  },
  turbopack: {},
};

export default nextConfig;
