import fs from "fs/promises";
import Radash from "radash";

import { uploadImages } from "../cloudinary";
import { prisma } from ".";

const STATIC_FOLDER = "static" as const;
const RECIPES_DATA_FILE = "recipes.json" as const;

export interface Ingredient {
  name: string;
  label: string;
  quantity: number | null;
  unit: string | null;
}

export interface Step {
  description: string;
  name: string;
  label: string;
}
export interface RawRecipe {
  ingredients: Ingredient[];
  label: string;
  name: string;
  steps: Step[];
}

export const readRecipeFile = async () => {
  const data = await fs.readFile(
    `${STATIC_FOLDER}/${RECIPES_DATA_FILE}`,
    "utf-8"
  );
  return JSON.parse(data) as RawRecipe[];
};

export const upload = async () => {
  const recipesData = await readRecipeFile();
  const images = await uploadImages();

  const recipes = Radash.unique(
    recipesData
      .map(({ label, name }) => {
        const image = images.find((imageData) => imageData?.public_id === name);

        return {
          imgFileName: `${image?.original_filename}.${image?.original_extension}`,
          imgSrc: `${image?.url}`,
          label: label,
          name: name,
        };
      })
      .flat(),
    (i) => i.name
  );
  await prisma.recipe.createMany({
    data: recipes,
    skipDuplicates: true,
  });

  const allIngredients = Radash.unique(
    recipesData
      .map(({ ingredients }) =>
        ingredients.map(({ label, name }) => ({ label, name }))
      )
      .flat(),
    (i) => i.name
  );
  await prisma.ingredient.createMany({
    data: allIngredients,
    skipDuplicates: true,
  });

  const allSteps = Radash.unique(
    recipesData
      .map(({ steps }) =>
        steps.map(({ label, description }, index) => ({
          label,
          description,
          index,
        }))
      )
      .flat(),
    (i) => i.description
  );
  await prisma.step.createMany({
    data: allSteps,
    skipDuplicates: true,
  });

  recipes.forEach(async (recipe) => {
    const createdRecipe = await prisma.recipe.findUnique({
      where: { name: recipe.name },
    });

    const ingredients = recipesData.find(
      ({ name }) => name === recipe.name
    )?.ingredients;
    const steps = recipesData.find(({ name }) => name === recipe.name)?.steps;

    ingredients?.forEach(async (ingredient) => {
      const ingredientData = await prisma.ingredient.findUnique({
        where: { name: ingredient.name },
      });

      await prisma.ingredientInRecipe.create({
        data: {
          ingredient: {
            connect: {
              id: ingredientData?.id,
            },
          },
          recipe: { connect: { id: createdRecipe?.id } },
          unit: ingredient.unit,
          quantity: ingredient.quantity,
        },
      });
    });

    steps?.forEach(async (step, index) => {
      const stepRes = await prisma.step.findFirst({
        where: {
          index: index,
          description: step.description,
          label: step.label,
        },
      });

      await prisma.stepForRecipe.create({
        data: {
          step: {
            connect: {
              id: stepRes?.id,
            },
          },
          recipe: { connect: { id: createdRecipe?.id } },
        },
      });
    });
  });
};
