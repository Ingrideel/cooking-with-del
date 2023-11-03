import { Button, Container, Stack } from "@mantine/core";
import { IconArrowRight, IconChefHat } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { WalkingFriends } from "src/components/WalkingFriends/WalkingFriends";

import "@dotlottie/player-component";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Stack align="center" justify="center" my="xl">
        <dotlottie-player
          src="assets/animations/cooking.lottie"
          autoplay
          loop
          style={{ height: 300, width: 600 }}
        />

        <Button
          renderRoot={(props) => <Link to="/recipes" {...props} />}
          leftSection={<IconChefHat size={24} />}
          rightSection={<IconArrowRight size={24} />}
          size="lg"
          mt="xl"
        >
          {t("recipes")}
        </Button>
      </Stack>

      <WalkingFriends />
    </Container>
  );
};
