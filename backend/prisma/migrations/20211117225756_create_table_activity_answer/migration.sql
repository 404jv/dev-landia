-- CreateTable
CREATE TABLE "activity_answer" (
    "order" INTEGER NOT NULL,
    "activityId" TEXT NOT NULL,
    "optionId" TEXT NOT NULL,

    CONSTRAINT "activity_answer_pkey" PRIMARY KEY ("activityId","optionId")
);

-- AddForeignKey
ALTER TABLE "activity_answer" ADD CONSTRAINT "activity_answer_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_answer" ADD CONSTRAINT "activity_answer_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "options"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
