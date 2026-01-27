import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "/**",
        port: "8000",
      },
      {
        hostname: "127.0.0.1",
        pathname: "/**",
        port: "8000",
      },
      {
        hostname: "api.rippleuniverse.org",
        pathname: "/**",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
