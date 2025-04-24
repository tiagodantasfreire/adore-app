/*
  Warnings:

  - The primary key for the `Ministry` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Ministry` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Music` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Music` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ministryId` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `ministryId` on the `Music` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ministryId` on the `Singer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Music" DROP CONSTRAINT "Music_ministryId_fkey";

-- DropForeignKey
ALTER TABLE "Singer" DROP CONSTRAINT "Singer_ministryId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_ministryId_fkey";

-- AlterTable
ALTER TABLE "Ministry" DROP CONSTRAINT "Ministry_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Ministry_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Music" DROP CONSTRAINT "Music_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "ministryId",
ADD COLUMN     "ministryId" INTEGER NOT NULL,
ADD CONSTRAINT "Music_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Singer" DROP COLUMN "ministryId",
ADD COLUMN     "ministryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "ministryId",
ADD COLUMN     "ministryId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Music" ADD CONSTRAINT "Music_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Singer" ADD CONSTRAINT "Singer_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
