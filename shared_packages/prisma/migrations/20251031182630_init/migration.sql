/*
  Warnings:

  - The values [phoneShared,leadDiscarded,refusal,emailShared] on the enum `LEAD_STATUS` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LEAD_STATUS_new" AS ENUM ('addedToDB', 'messageSent', 'messageRead', 'replied', 'contactShared');
ALTER TABLE "userbook_schema"."User" ALTER COLUMN "leadStatus" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "leadStatus" TYPE "LEAD_STATUS_new" USING ("leadStatus"::text::"LEAD_STATUS_new");
ALTER TYPE "LEAD_STATUS" RENAME TO "LEAD_STATUS_old";
ALTER TYPE "LEAD_STATUS_new" RENAME TO "LEAD_STATUS";
DROP TYPE "userbook_schema"."LEAD_STATUS_old";
ALTER TABLE "User" ALTER COLUMN "leadStatus" SET DEFAULT 'addedToDB';
COMMIT;

-- AlterEnum
ALTER TYPE "ROLES" ADD VALUE 'bot';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TASK_STATUS" ADD VALUE 'weRefused';
ALTER TYPE "TASK_STATUS" ADD VALUE 'leadRefused';
