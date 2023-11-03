import {
  Button,
  Card as MantineCard,
  Image,
  Text,
  AspectRatio,
  Box,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";

interface RecipeCardProps {
  id: number;
  imgSrc: string;
  title: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  imgSrc,
  title,
}) => {
  const { t } = useTranslation();
  return (
    <MantineCard shadow="sm" padding="lg" radius="md" withBorder>
      <MantineCard.Section>
        <AspectRatio ratio={2 / 1}>
          <Image src={imgSrc} />
        </AspectRatio>
      </MantineCard.Section>

      <Box h={50} mt="md" mb="xs">
        <Text lineClamp={2} fw={500}>
          {title}
        </Text>
      </Box>

      <Button
        renderRoot={(props) => (
          <Link {...props} to="/ingredients/$id" params={{ id: `${id}` }} />
        )}
        variant="light"
        radius="md"
      >
        {t("select")}
      </Button>
    </MantineCard>
  );
};
