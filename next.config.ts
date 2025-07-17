import path from "path"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, ".."),
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
