/*
  Warnings:

  - The `roles` column on the `Employee` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('DEV', 'OWNER', 'CEO', 'SMM_MANAGER', 'SALES_MANAGER', 'ACCOUNT_MANAGER', 'LAWYER', 'BOT');

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "roles",
ADD COLUMN     "roles" "ROLE"[];

-- DropEnum
DROP TYPE "userbook_schema"."ROLES";
