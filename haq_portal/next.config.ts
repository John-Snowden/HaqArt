import path from "path";
import dotenv from "dotenv";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// Load root-level .env
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export default nextConfig;
