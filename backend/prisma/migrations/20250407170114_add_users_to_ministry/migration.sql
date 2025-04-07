-- AlterTable
ALTER TABLE "User" ADD COLUMN     "ministryId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ministryId_fkey" FOREIGN KEY ("ministryId") REFERENCES "Ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
