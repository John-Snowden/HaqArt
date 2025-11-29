-- CreateEnum
CREATE TYPE "LEAD_STATUS" AS ENUM ('ADDED_TO_DB', 'CONTACT_SHARED', 'CLIENT', 'RETURNING_CLIENT');

-- CreateEnum
CREATE TYPE "CASE_STATUS" AS ENUM ('UNASSIGNED', 'PENDING_START', 'IN_PROGRESS', 'BLOCKED', 'PENDING_CHECK', 'DONE', 'WE_REFUSED', 'PERSON_REFUSED');

-- CreateEnum
CREATE TYPE "URGENCY" AS ENUM ('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE');

-- CreateEnum
CREATE TYPE "IMPORTANCE" AS ENUM ('ONE', 'TWO', 'THREE');

-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('DEV', 'OWNER', 'CEO', 'SMM_MANAGER', 'SALES_MANAGER', 'ACCOUNT_MANAGER', 'LAWYER', 'BOT');

-- CreateEnum
CREATE TYPE "LEGAL_ACTION" AS ENUM ('CONSULTATION', 'FILING', 'COURT_PARTICIPATION', 'APPOINTMENT', 'NEGOTIATIONS', 'CLAIM', 'LAWYER_REQUEST');

-- CreateEnum
CREATE TYPE "STATUS_IN_COURT" AS ENUM ('POSTPONED', 'PAUSED', 'JUDGE_ON_VACATION', 'REASSIGNED', 'NEGOTIATIONS', 'RETURNED');

-- CreateEnum
CREATE TYPE "REFUSAL_REASON" AS ENUM ('CHOSE_COMPETITOR', 'IRRELEVANT_SERVICES', 'TOO_EXPENSIVE', 'NO_REASON_GIVEN');

-- CreateEnum
CREATE TYPE "CASE_CATEGORY" AS ENUM ('REAL_ESTATE', 'LOANS', 'OTHER');

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "roles" "ROLES"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "link" TEXT,
    "email" TEXT,
    "homeAddress" TEXT,
    "authorId" INTEGER NOT NULL,
    "originId" INTEGER NOT NULL,
    "leadStatus" "LEAD_STATUS" NOT NULL DEFAULT 'ADDED_TO_DB',

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "caseImportance" "IMPORTANCE" NOT NULL DEFAULT 'TWO',
    "caseUrgency" "URGENCY" NOT NULL DEFAULT 'THREE',
    "caseStatus" "CASE_STATUS" NOT NULL DEFAULT 'UNASSIGNED',
    "problemShort" TEXT,
    "problemFull" TEXT,
    "nearestTask" TEXT,
    "courtInfo" TEXT,
    "nearestTaskDeadline" TIMESTAMP(3),
    "timeOfPerformance" TIMESTAMP(3),
    "assignmentTime" TIMESTAMP(3),
    "refusalReason" "REFUSAL_REASON",
    "legalAction" "LEGAL_ACTION",
    "statusInCourt" "STATUS_IN_COURT",
    "priceSOM" BIGINT,
    "priceUSD" BIGINT,
    "personId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "opponentId" INTEGER,
    "managerId" INTEGER,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Origin" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "link" TEXT,
    "categories" "CASE_CATEGORY"[],
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Origin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opponent" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "info" TEXT,

    CONSTRAINT "Opponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blogger" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "email" TEXT,
    "info" TEXT,
    "subscribersCount" INTEGER NOT NULL,
    "priceSOM" INTEGER,
    "priceUSD" INTEGER,
    "authorId" INTEGER NOT NULL,
    "categories" "CASE_CATEGORY"[],

    CONSTRAINT "Blogger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_username_key" ON "Employee"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Person_phoneNumber_key" ON "Person"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Person_link_key" ON "Person"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Origin_title_key" ON "Origin"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Origin_link_key" ON "Origin"("link");

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
ALTER TABLE "Person" ADD CONSTRAINT "Person_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Origin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_opponentId_fkey" FOREIGN KEY ("opponentId") REFERENCES "Opponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Origin" ADD CONSTRAINT "Origin_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blogger" ADD CONSTRAINT "Blogger_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
