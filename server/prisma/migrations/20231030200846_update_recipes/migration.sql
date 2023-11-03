/*
  Warnings:

  - You are about to drop the column `imgName` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `imgFileName` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "imgName",
ADD COLUMN     "imgFileName" TEXT NOT NULL;
