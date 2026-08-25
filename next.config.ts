import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/delete-account",
        destination: "/support#delete-account",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
