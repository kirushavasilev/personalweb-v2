import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.kvasilev.tech",
          },
        ],
        destination: "https://kvasilev.tech/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
