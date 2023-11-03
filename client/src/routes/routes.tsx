import { Router, Route, RootRoute } from "@tanstack/react-router";
import App from "src/App";
import { Home } from "src/pages/Home/Home";
import { Recipes } from "src/pages/Recipes/Recipes";
import { IngredientsPage } from "src/pages/Ingredients/Ingredients";
import Recipe from "src/pages/Recipe/Recipe";
import { z } from "zod";

export const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const recipesRoute = new Route({
  getParentRoute: () => rootRoute,
  component: Recipes,
  path: "/recipes",
});
export const ingredientsRoute = new Route({
  getParentRoute: () => rootRoute,
  component: IngredientsPage,
  path: "/ingredients/$id",
});

const racipeSearchSchema = z.object({
  step: z.number().nonnegative(),
});

export type RecipeSearch = z.infer<typeof racipeSearchSchema>;

export const recipeRoute = new Route({
  getParentRoute: () => rootRoute,
  component: Recipe,
  path: "/recipe/$id",
  validateSearch: racipeSearchSchema,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  recipesRoute,
  ingredientsRoute,
  recipeRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
