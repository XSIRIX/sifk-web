import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.178.68"],
  reactStrictMode: true,
  turbopack: {
    root: __dirname
  }
};

export default nextConfig;
