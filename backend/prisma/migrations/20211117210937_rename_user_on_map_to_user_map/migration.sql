/*
  Warnings:

  - You are about to drop the `UserOnMap` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserOnMap" DROP CONSTRAINT "UserOnMap_mapId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnMap" DROP CONSTRAINT "UserOnMap_userId_fkey";

-- DropTable
DROP TABLE "UserOnMap";

-- CreateTable
CREATE TABLE "user_map" (
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "mapId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_map_pkey" PRIMARY KEY ("userId","mapId")
);

-- AddForeignKey
ALTER TABLE "user_map" ADD CONSTRAINT "user_map_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_map" ADD CONSTRAINT "user_map_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "maps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
