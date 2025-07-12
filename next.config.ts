import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* add default path for images loaded */
};

module.exports = {
  images: {
    domains: ["localhost", "images.unsplash.com"],
    loaderFile: "./public",
  },
};

export default nextConfig;
