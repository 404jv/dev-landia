-- CreateTable
CREATE TABLE "tips" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tips_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tips" ADD CONSTRAINT "tips_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
