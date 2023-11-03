/*
  Warnings:

  - You are about to drop the column `value` on the `IngredientInRecipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IngredientInRecipe" DROP COLUMN "value",
ADD COLUMN     "quantity" REAL;
