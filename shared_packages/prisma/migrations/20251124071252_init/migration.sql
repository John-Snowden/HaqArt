/*
  Warnings:

  - The values [NO_REASON_GIVEN] on the enum `REFUSAL_REASON` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `caseCategory` on the `Case` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "REFUSAL_REASON_new" AS ENUM ('CHOSE_COMPETITOR', 'IRRELEVANT_SERVICES', 'TOO_EXPENSIVE');
ALTER TABLE "Case" ALTER COLUMN "refusalReason" TYPE "REFUSAL_REASON_new" USING ("refusalReason"::text::"REFUSAL_REASON_new");
ALTER TYPE "REFUSAL_REASON" RENAME TO "REFUSAL_REASON_old";
ALTER TYPE "REFUSAL_REASON_new" RENAME TO "REFUSAL_REASON";
DROP TYPE "userbook_schema"."REFUSAL_REASON_old";
COMMIT;

-- AlterTable
ALTER TABLE "Case" DROP COLUMN "caseCategory",
ADD COLUMN     "categories" "CASE_CATEGORY"[];
