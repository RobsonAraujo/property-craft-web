import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "landingfoliocom.imgix.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
