import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.178.68"],
  reactStrictMode: true,
  // The public staging copy must never show up in search results.
  async headers() {
    if (process.env.STAGING_NOINDEX !== "1") return [];
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
  turbopack: {
    root: __dirname
  }
};

export default nextConfig;
