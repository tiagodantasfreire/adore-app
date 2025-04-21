/*
  Warnings:

  - You are about to drop the column `singer` on the `Music` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Music" DROP COLUMN "singer",
ADD COLUMN     "singerId" INTEGER;

-- CreateTable
CREATE TABLE "Singer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ministryId" TEXT NOT NULL,

    CONSTRAINT "Singer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_singerId_fkey" FOREIGN KEY ("singerId") REFERENCES "Singer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Singer" ADD CONSTRAINT "Singer_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
