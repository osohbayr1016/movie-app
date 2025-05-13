import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  image: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
    ],
  },
  env: {
    TMDB_BASE_URL: process.env.TMDB_BASE_URL || "",
    TMDB_API_TOKEN: process.env.TMDB_BASE_URL || "",
    TMDB_IMAGE_SERVICE_URL: process.env.TMDB_BASE_URL || "",
  },
};

export default nextConfig;
