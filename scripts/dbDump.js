import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL not set in .env");

const url = new URL(databaseUrl);
const user = url.username;
const password = url.password;
const host = url.hostname;
const port = url.port || "5432";
const database = url.pathname.slice(1);

const timestamp = new Date().toISOString().replace(/[-:T]/g, "").split(".")[0];
const dumpDir = join(__dirname, "../shared_packages/prisma/backup");
const filename = join(dumpDir, `db_backup_${timestamp}.sql`);

console.log(`Dumping database "${database}" to "${filename}"...`);

execSync(
  `PGPASSWORD="${password}" pg_dump -U ${user} -h ${host} -p ${port} -d ${database} -F c -b -v -f "${filename}"`,
  { stdio: "inherit" },
);

console.log("Backup completed.");
