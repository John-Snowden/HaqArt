import path from "path";
import dotenv from "dotenv";
import type { NextConfig } from "next";

module.exports = {
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

// Load root-level .env
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
