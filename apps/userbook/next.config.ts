import path from "path";
import type { NextConfig } from "next";

module.exports = {
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
