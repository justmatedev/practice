import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  /* config options here */
  // experimental: {
  //   turbo: {
  //     rules: {
  //       "*.scss": {
  //         loaders: ["sass-loader"],
  //         as: "*.css",
  //       },
  //     },
  //   },
  // },
}

export default nextConfig
