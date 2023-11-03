/*
  Warnings:

  - You are about to drop the column `unit` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Ingredient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "unit",
DROP COLUMN "value";

-- AlterTable
ALTER TABLE "IngredientInRecipe" ADD COLUMN     "unit" TEXT,
ADD COLUMN     "value" REAL;
