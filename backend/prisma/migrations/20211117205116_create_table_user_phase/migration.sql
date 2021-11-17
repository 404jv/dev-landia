-- CreateTable
CREATE TABLE "user_phase" (
    "currentLevel" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_phase_pkey" PRIMARY KEY ("userId","phaseId")
);

-- AddForeignKey
ALTER TABLE "user_phase" ADD CONSTRAINT "user_phase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_phase" ADD CONSTRAINT "user_phase_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "phases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
