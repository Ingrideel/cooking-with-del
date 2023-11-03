import axios from "axios";

export enum RecipesQueries {
  RECIPES = "recipes",
  RECIPES_COUNT = "recipes_count",
}

export const getRecipes = async () => {
  try {
    const { data } = await axios.get<Recipe[]>(
      "http://localhost:14344/recipes",
      {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}` },
      }
    );
    return data;
  } catch (error) {
    console.log(`Error getRecipes: ${error}`);
  }
};

export const getRecipesCount = async () => {
  try {
    const { data } = await axios.get<{ recipesCount: number }>(
      "http://localhost:14344/recipesCount",
      { headers: { Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}` } }
    );
    return data;
  } catch (error) {
    console.log(`Error getRecipesCount: ${error}`);
  }
};
