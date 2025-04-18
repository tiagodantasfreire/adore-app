/*
  Warnings:

  - A unique constraint covering the columns `[accessCode]` on the table `Ministry` will be added. If there are existing duplicate values, this will fail.
  - The required column `accessCode` was added to the `Ministry` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Ministry" ADD COLUMN     "accessCode" CHAR(4) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ministry_accessCode_key" ON "Ministry"("accessCode");
