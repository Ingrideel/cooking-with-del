import {
  AspectRatio,
  Button,
  Card,
  Center,
  Checkbox,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import style from "./IngredientsCard.module.scss";

interface IngredientsCardProps {
  ingredients: Ingredient[];
  recipeId: number;
  imgFileName: string;
  imgSrc: string;
}

export const IngredientsCard: React.FC<IngredientsCardProps> = ({
  imgFileName,
  imgSrc,
  ingredients,
  recipeId,
}) => {
  const [ingredientsState, setIngredientsState] = useState(ingredients);
  const { t } = useTranslation();

  const handleOnChangeIngredient = (ingredient: Ingredient) => {
    setIngredientsState(
      ingredientsState.map((ingredientState) =>
        ingredientState.name === ingredient.name
          ? { ...ingredientState, aquired: !ingredientState.aquired }
          : ingredientState
      )
    );
  };
  const isValid = ingredientsState.every(({ aquired }) => aquired);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <AspectRatio ratio={2 / 1}>
          <Image src={imgSrc} alt={imgFileName} />
        </AspectRatio>
      </Card.Section>

      <Center>
        <Text size="lg" fw={500} mt="md" mb="xs">
          {t("ingredientsList")}
        </Text>
      </Center>

      <Center>
        <Stack className={style.stack}>
          {ingredientsState.map((ingredient) => (
            <Checkbox
              key={ingredient.id}
              checked={!!ingredient.aquired}
              onChange={() => handleOnChangeIngredient(ingredient)}
              c={ingredient.aquired ? "dimmed" : undefined}
              td={ingredient.aquired ? "line-through" : undefined}
              size="md"
              label={`${ingredient.quantity ? ` ${ingredient.quantity}` : ""}${
                ingredient.unit ? ` ${ingredient.unit}` : ""
              } ${ingredient.label}`}
            />
          ))}
        </Stack>
      </Center>

      <Button
        renderRoot={(props) => (
          <Link
            to="/recipe/$id"
            params={{ id: recipeId }}
            search={{
              step: 0,
            }}
            {...props}
          />
        )}
        disabled={!isValid}
        fullWidth
        mt="md"
        radius="md"
        variant="light"
      >
        {t("goToSteps")}
      </Button>
    </Card>
  );
};
