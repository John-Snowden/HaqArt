// shared_packages/lib/loadEnv.ts
import path from "path";
import dotenv from "dotenv";

// process.cwd() points to where Node was started (subproject root)
if (!process.env.HAQ_BOT_NAME) {
  dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });
}

export const HAQ_BOT_NAME = process.env.HAQ_BOT_NAME;
export const HAQ_BOT_PASS = process.env.HAQ_BOT_PASS;
