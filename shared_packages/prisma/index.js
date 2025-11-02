var _a;
import path from "path";
import dotenv from "dotenv";
import { PrismaClient } from "./prisma/client/index";
const envPath = path.resolve(process.cwd(), "../.env");
dotenv.config({ path: envPath });
// Use a global to avoid creating multiple instances in dev/hot-reload
const globalForPrisma = global;
export const prisma = (_a = globalForPrisma.prisma) !== null && _a !== void 0 ? _a : new PrismaClient({
    // optional logging
    log: ["error"],
});
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
export default prisma;
