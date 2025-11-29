/*
  Warnings:

  - Added the required column `authorId` to the `Opponent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Opponent" ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Opponent" ADD CONSTRAINT "Opponent_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
