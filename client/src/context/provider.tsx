import { useQuery } from "react-query";
import { RecipesQueries, getRecipesCount } from "src/api/getRecipes";
import { Context, INIT_CONTEXT } from "src/context";

export const ContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { data } = useQuery(RecipesQueries.RECIPES_COUNT, getRecipesCount);

  const context: Context = {
    recipesCount: data?.recipesCount || INIT_CONTEXT.recipesCount,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
