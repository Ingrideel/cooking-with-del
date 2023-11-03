-- DropForeignKey
ALTER TABLE "StepForRecipe" DROP CONSTRAINT "StepForRecipe_stepId_fkey";

-- AddForeignKey
ALTER TABLE "StepForRecipe" ADD CONSTRAINT "StepForRecipe_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
