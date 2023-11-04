import { Button, Container, Stack } from "@mantine/core";
import { IconArrowRight, IconChefHat } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Player } from "@lottiefiles/react-lottie-player";

import { WalkingFriends } from "src/components/WalkingFriends/WalkingFriends";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Stack align="center" justify="center" my="xl">
        <Player
          src="/cooking.json"
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
