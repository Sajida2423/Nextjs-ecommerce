import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", // make sure to match the actual image host
        port: "",
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;



