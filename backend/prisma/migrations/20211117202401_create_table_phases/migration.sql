-- CreateTable
CREATE TABLE "phases" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "markdown_text" TEXT,
    "max_level" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mapId" TEXT NOT NULL,

    CONSTRAINT "phases_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "phases" ADD CONSTRAINT "phases_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "maps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
