import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.kirillvasilev.com",
          },
        ],
        destination: "https://kirillvasilev.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
