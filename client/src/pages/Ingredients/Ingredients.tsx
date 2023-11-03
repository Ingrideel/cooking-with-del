import { Container, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useParams } from "@tanstack/react-router";
import { useQuery } from "react-query";

import "@dotlottie/player-component";

import { RecipesQueries, getRecipes } from "src/api/getRecipes";
import { recipeRoute } from "src/routes/routes";
import { IngredientsCard } from "src/components/IngredientsCard/IngredientsCard";

export const IngredientsPage: React.FC = () => {
  const { id } = useParams({ from: recipeRoute.id });
  const recipesQuery = useQuery(RecipesQueries.RECIPES, getRecipes);
  const isMobile = useMediaQuery("(max-width: 50em)");

  const recipe = recipesQuery.data?.find(
    (recipe) => recipe.id === parseInt(id)
  );

  return (
    <Container>
      <Group justify="center" align="center">
        {!isMobile ? (
          <dotlottie-player
            src="../../assets/animations/pan_red.lottie"
            autoplay
            loop
            style={{ height: 700, width: 150 }}
          />
        ) : null}

        {recipe ? (
          <IngredientsCard
            imgFileName={recipe.imgFileName}
            imgSrc={recipe.imgSrc}
            ingredients={recipe.ingredients}
            recipeId={recipe.id}
          />
        ) : (
          <dotlottie-player
            src="../../assets/animations/bowl.lottie"
            autoplay
            loop
            style={{ height: 400, width: 400 }}
          />
        )}

        {!isMobile ? (
          <dotlottie-player
            src="../../assets/animations/pan_yellow.lottie"
            autoplay
            loop
            style={{
              height: 700,
              width: 150,
              transform: "scaleX(-1)",
            }}
          />
        ) : null}
      </Group>
    </Container>
  );
};
