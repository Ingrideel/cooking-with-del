import { useLayoutEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Box, Button, Checkbox, Group, List, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

import NoteSvg from "assets/svgs/Note.svg?react";
import { Link } from "@tanstack/react-router";
import style from "./Note.module.scss";

interface Size {
  height: number;
  width: number;
}

export const Note: React.FC<{
  ingredients: Ingredient[];
  recipeId: string;
}> = ({ ingredients, recipeId }) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [ingredientsState, setIngredientsState] = useState(ingredients);
  const [isDragged, setIsDragged] = useState(false);

  const [size, setSize] = useState<Size>({
    height: 0,
    width: 0,
  });

  const handleOnChangeIngredient = (ingredient: Ingredient) => {
    setIngredientsState(
      ingredientsState?.map((ingredientState) =>
        ingredientState.name === ingredient.name
          ? { ...ingredientState, aquired: !ingredientState.aquired }
          : ingredientState
      )
    );
  };

  const isValid = ingredientsState?.every(({ aquired }) => aquired);

  useLayoutEffect(() => {
    if (ref.current) {
      setSize({
        height: ref.current.clientHeight,
        width: ref.current.clientWidth,
      });
    }
  }, []);

  return (
    <div className={style.overlay}>
      <Draggable
        nodeRef={ref}
        position={
          !isDragged
            ? {
                x: (window.innerWidth - size.width) / 2,
                y: (window.innerHeight - size.height) / 2,
              }
            : undefined
        }
        onDrag={() => setIsDragged(true)}
        bounds={{
          left: 0,
          top: 0,
          right: window.innerWidth - size.width,
          bottom: window.innerHeight - size.height,
        }}
      >
        <div ref={ref} className={style.container}>
          <NoteSvg style={{ width: 360 }} />

          <div
            style={{
              position: "absolute",
              top: 48,
              left: 8,
              width: 330,
            }}
          >
            <Text ta="center" size="lg">
              {t("ingredientsList")}
            </Text>

            <List center mt={12} ml={6}>
              {ingredientsState?.map((ingredient) => (
                <Group key={ingredient.name} align="center">
                  <Checkbox
                    checked={!!ingredient.aquired}
                    onChange={() => handleOnChangeIngredient(ingredient)}
                    style={{ marginBottom: 15 }}
                    label={
                      <Box w={290} bg="blue">
                        <Text truncate="end" ml="xs">{`${
                          ingredient.quantity ? ` ${ingredient.quantity}` : ""
                        }${ingredient.unit ? ` ${ingredient.unit}` : ""} ${
                          ingredient.label
                        }`}</Text>
                      </Box>
                    }
                  />
                </Group>
              ))}
            </List>
          </div>

          <Link
            to="/recipe/$id"
            params={{ id: recipeId }}
            search={{
              step: 0,
            }}
            style={{
              position: "relative",
              bottom: 100,
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <Button disabled={!isValid}>{t("goToSteps")}</Button>
          </Link>
        </div>
      </Draggable>
    </div>
  );
};
