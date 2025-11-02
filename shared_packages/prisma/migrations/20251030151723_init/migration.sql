-- CreateEnum
CREATE TYPE "LEAD_STATUS" AS ENUM ('addedToDB', 'messageSent', 'messageRead', 'replied', 'phoneShared', 'leadDiscarded', 'refusal');

-- CreateEnum
CREATE TYPE "TASK_STATUS" AS ENUM ('notAssigned', 'assignedNotStarted', 'workInProgress', 'blocked', 'checkMe', 'done');

-- CreateEnum
CREATE TYPE "TASK_URGENCY" AS ENUM ('one', 'two', 'three', 'four', 'five');

-- CreateEnum
CREATE TYPE "TASK_IMPORTANCE" AS ENUM ('one', 'two', 'three');

-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('dev', 'owner', 'ceo', 'manager');

-- CreateEnum
CREATE TYPE "LEGAL_ACTION" AS ENUM ('none', 'filing', 'courtParticipation', 'consultation', 'appointment', 'negotiations', 'claim', 'lawyerRequest');

-- CreateEnum
CREATE TYPE "STATUS_IN_COURT" AS ENUM ('postponed', 'paused', 'judgeOnVacation', 'reassigned', 'negotiations', 'returned');

-- CreateEnum
CREATE TYPE "REFUSAL_REASON" AS ENUM ('none', 'choseCompetitor', 'irrelevantServices', 'tooExpensive', 'noReasonGiven');

-- CreateEnum
CREATE TYPE "SOURCE_CATEGORY" AS ENUM ('none', 'realEstate', 'loans', 'other');

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "ROLES" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "userLink" TEXT,
    "phoneNumber" TEXT,
    "homeAddress" TEXT NOT NULL,
    "leadStatus" "LEAD_STATUS" NOT NULL DEFAULT 'addedToDB',
    "taskImportance" "TASK_IMPORTANCE" NOT NULL DEFAULT 'two',
    "taskUrgency" "TASK_URGENCY" NOT NULL DEFAULT 'three',
    "taskStatus" "TASK_STATUS" NOT NULL DEFAULT 'notAssigned',
    "legalAction" "LEGAL_ACTION",
    "problemShort" TEXT NOT NULL,
    "problemFull" TEXT NOT NULL,
    "nearestTask" TEXT NOT NULL DEFAULT '',
    "nearestTaskDeadline" TIMESTAMP(3),
    "timeOfPerformance" TIMESTAMP(3),
    "priceSOM" BIGINT,
    "priceUSD" BIGINT,
    "courtInfo" TEXT NOT NULL DEFAULT '',
    "statusInCourt" "STATUS_IN_COURT",
    "refusalReason" "REFUSAL_REASON",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignmentTime" TIMESTAMP(3),
    "authorId" INTEGER NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "opponentId" INTEGER,
    "managerId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Source" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "sourceLink" TEXT,
    "category" "SOURCE_CATEGORY" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opponent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "info" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Opponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blogger" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "subscribersCount" INTEGER NOT NULL,
    "info" TEXT NOT NULL DEFAULT '',
    "priceSOM" INTEGER,
    "priceUSD" INTEGER,
    "phoneNumber" TEXT,
    "email" TEXT,
    "categories" "SOURCE_CATEGORY"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Blogger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manager_username_key" ON "Manager"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_userLink_key" ON "User"("userLink");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Source_title_key" ON "Source"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Source_sourceLink_key" ON "Source"("sourceLink");

-- CreateIndex
CREATE UNIQUE INDEX "Opponent_name_key" ON "Opponent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Opponent_link_key" ON "Opponent"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Blogger_name_key" ON "Blogger"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Blogger_link_key" ON "Blogger"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Blogger_phoneNumber_key" ON "Blogger"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Blogger_email_key" ON "Blogger"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_opponentId_fkey" FOREIGN KEY ("opponentId") REFERENCES "Opponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Source" ADD CONSTRAINT "Source_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blogger" ADD CONSTRAINT "Blogger_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
