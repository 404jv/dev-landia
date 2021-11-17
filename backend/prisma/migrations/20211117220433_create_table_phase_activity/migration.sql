-- CreateTable
CREATE TABLE "phase_activity" (
    "phaseId" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,

    CONSTRAINT "phase_activity_pkey" PRIMARY KEY ("phaseId","activityId")
);

-- AddForeignKey
ALTER TABLE "phase_activity" ADD CONSTRAINT "phase_activity_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "phases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phase_activity" ADD CONSTRAINT "phase_activity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
