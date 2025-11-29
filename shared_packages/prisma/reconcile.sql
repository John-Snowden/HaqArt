-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "taskImportance" "TASK_IMPORTANCE" NOT NULL DEFAULT 'two',
    "taskUrgency" "TASK_URGENCY" NOT NULL DEFAULT 'three',
    "taskStatus" "TASK_STATUS" NOT NULL DEFAULT 'notAssigned',
    "legalAction" "LEGAL_ACTION" NOT NULL,
    "problemShort" TEXT NOT NULL,
    "problemFull" TEXT NOT NULL,
    "nearestTask" TEXT NOT NULL DEFAULT '',
    "nearestTaskDeadline" TIMESTAMP(3),
    "timeOfPerformance" TIMESTAMP(3),
    "priceSOM" BIGINT,
    "priceUSD" BIGINT,
    "courtInfo" TEXT NOT NULL DEFAULT '',
    "statusInCourt" "STATUS_IN_COURT" NOT NULL DEFAULT 'none',
    "refusalReason" "REFUSAL_REASON",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignmentTime" TIMESTAMP(3),
    "authorId" INTEGER NOT NULL,
    "opponentId" INTEGER,
    "managerId" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_opponentId_fkey" FOREIGN KEY ("opponentId") REFERENCES "Opponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

