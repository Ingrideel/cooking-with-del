import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export const getRecipes = async () => {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        ingredientInRecipe: {
          select: { quantity: true, unit: true, ingredient: true },
        },
        stepForRecipe: {
          select: { step: true },
          orderBy: { step: { id: Prisma.SortOrder.asc } },
        },
      },
    });

    return recipes.map(({ ingredientInRecipe, stepForRecipe, ...rest }) => ({
      ...rest,
      ingredients: ingredientInRecipe.map(({ ingredient, quantity, unit }) => ({
        ...ingredient,
        quantity,
        unit,
      })),
      steps: stepForRecipe.map(({ step }) => ({ ...step })),
    }));
  } catch (error) {
    console.log(`Error getRecipes: ${error}`);
  }
};

export const getRecipesCount = async () => {
  try {
    const recipes = await prisma.recipe.findMany();
    return recipes.length;
  } catch (error) {
    console.log(`Error getRecipesCount: ${error}`);
  }
};
