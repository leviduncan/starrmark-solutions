import type { NextConfig } from "next";

const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;
const wpHost = (() => {
  if (!wpUrl) return null;
  try {
    return new URL(wpUrl).hostname;
  } catch {
    return null;
  }
})();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: wpHost
      ? [
          { protocol: "https", hostname: wpHost },
          { protocol: "https", hostname: `www.${wpHost}` },
        ]
      : [],
  },
};

export default nextConfig;
