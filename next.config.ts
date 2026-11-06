import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid generating repository instruction files whenever the local server starts.
  agentRules: false,
  // The Codex in-app preview opens localhost through this loopback hostname.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
