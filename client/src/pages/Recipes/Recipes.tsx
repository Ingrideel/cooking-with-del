import { Container, Group, SimpleGrid, Skeleton, Title } from "@mantine/core";
import { useContext } from "react";
import { useQuery } from "react-query";
import * as Radash from "radash";

import { Context } from "src/context";
import { RecipesQueries, getRecipes } from "src/api/getRecipes";
import { RecipeCard } from "src/components/RecipeCard/RecipeCard";
import { useTranslation } from "react-i18next";

export const Recipes: React.FC = () => {
  const { recipesCount } = useContext(Context);
  const { isFetching, data } = useQuery(RecipesQueries.RECIPES, getRecipes, {
    initialData: Radash.list(recipesCount - 1),
  });
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Group mb="md" align="center" justify="center">
          <Title>{t("recipes")}</Title>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
          {data?.map((recipe, recipeIndex) => (
            <Skeleton key={recipeIndex} visible={isFetching}>
              <RecipeCard
                id={recipe.id}
                imgSrc={recipe.imgSrc}
                title={recipe.label}
              />
            </Skeleton>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};
