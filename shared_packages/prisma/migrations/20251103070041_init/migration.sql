/*
  Warnings:

  - Made the column `legalAction` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `statusInCourt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "legalAction" SET NOT NULL,
ALTER COLUMN "statusInCourt" SET NOT NULL;
