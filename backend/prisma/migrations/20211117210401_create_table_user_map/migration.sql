-- CreateTable
CREATE TABLE "UserOnMap" (
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "mapId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserOnMap_pkey" PRIMARY KEY ("userId","mapId")
);

-- AddForeignKey
ALTER TABLE "UserOnMap" ADD CONSTRAINT "UserOnMap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnMap" ADD CONSTRAINT "UserOnMap_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "maps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
