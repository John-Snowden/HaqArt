// shared_packages/lib/actions/env.ts
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../..", ".env") });

export const HAQ_BOT_NAME = process.env.HAQ_BOT_NAME;
export const HAQ_BOT_PASS = process.env.HAQ_BOT_PASS;
