import path from "path";
import dotenv from "dotenv";

import { PrismaClient } from "./prisma/client/index";

const envPath = path.resolve(process.cwd(), "../.env");
dotenv.config({ path: envPath });

// Use a global to avoid creating multiple instances in dev/hot-reload
const globalForPrisma = global as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // optional logging
    log: ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
