import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Image,
  Space,
  Text,
  Title,
} from "@mantine/core";

import { useSearch, useParams, Link } from "@tanstack/react-router";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

import { RecipesQueries, getRecipes } from "src/api/getRecipes";
import { recipeRoute } from "src/routes/routes";

import style from "./Recipe.module.scss";

const Recipe: React.FC = () => {
  const { id } = useParams({ from: recipeRoute.id });
  const { step } = useSearch({ from: recipeRoute.id });

  const { t } = useTranslation();

  const recipesQuery = useQuery(RecipesQueries.RECIPES, getRecipes);
  const recipe = recipesQuery.data?.find(
    (recipe) => recipe.id === parseInt(id)
  );

  return (
    <Container>
      <Title ta="center">{recipe?.label}</Title>

      <Center mt="lg">
        <AspectRatio ratio={2 / 1} w={{ sm: "72%", base: "90%" }}>
          <Image src={recipe?.imgSrc} />
        </AspectRatio>
      </Center>

      <Center>
        <Text fw={500} size="lg" my="lg">{`${t("step")} ${step + 1}`}</Text>
      </Center>

      <Center>
        <Box w={{ sm: "72%", base: "90%" }}>
          <Text>{recipe?.steps[step].description}</Text>
        </Box>
      </Center>

      <Button.Group mt="xl" className={style.buttonGroup}>
        <Button
          variant="default"
          renderRoot={(props) => (
            <Link
              params={{ id }}
              search={(prev) => ({
                step: (prev.step || 1) - 1,
              })}
              {...props}
            />
          )}
          disabled={step === 0}
        >
          {t("back")}
        </Button>

        <Button
          renderRoot={(props) => (
            <Link
              params={{ id }}
              search={(prev) => ({
                step: (prev.step || 0) + 1,
              })}
              {...props}
            />
          )}
          disabled={recipe && step === recipe?.steps.length - 1}
          w={150}
        >
          {recipe?.steps.length &&
            (step < recipe?.steps.length - 2
              ? t("nextStep")
              : step === recipe?.steps.length - 1
              ? t("finished")
              : t("finish"))}
        </Button>

        <Button
          renderRoot={(props) => <Link to="/recipes" {...props} />}
          disabled={recipe && step !== recipe?.steps.length - 1}
        >
          {t("anotherOne")}
        </Button>
      </Button.Group>

      <Space h={80} />
    </Container>
  );
};

export default Recipe;
