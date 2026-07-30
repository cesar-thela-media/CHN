import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

/**
 * Vercel: default Next output (no standalone).
 * Docker / Railway: standalone for slim runtime + server.js.
 */
const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  ...(isVercel ? {} : { output: "standalone" as const }),
  // Preview proxy / sandbox hostnames (dev only)
  allowedDevOrigins: [
    "*.grok-sandbox.com",
    "*.hades-www.grok-sandbox.com",
    "grok-sandbox.com",
    "localhost",
    "127.0.0.1",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "customhomenetwork.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default withSentryConfig(nextConfig, {
  // Only upload sourcemaps when token present (local/Vercel/Railway safe without secrets)
  org: process.env.SENTRY_ORG || undefined,
  project: process.env.SENTRY_PROJECT || undefined,
  silent: true,
  sourcemaps: {
    disable: !process.env.SENTRY_AUTH_TOKEN,
  },
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: false,
});
