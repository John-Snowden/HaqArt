/*
  Warnings:

  - You are about to drop the column `redialDate` on the `Call` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Call" DROP COLUMN "redialDate";

-- AlterTable
ALTER TABLE "Case" ADD COLUMN     "nextDialDate" TIMESTAMP(3);
