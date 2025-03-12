import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint during builds
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ✅ Allows images from any domain (Wildcard)
      },
    ],
    domains: ["*"], // ✅ Allows all domains
    dangerouslyAllowSVG: true, // ✅ If you need to allow SVGs
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
