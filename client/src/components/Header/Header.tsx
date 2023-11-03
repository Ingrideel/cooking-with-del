import { Link } from "@tanstack/react-router";
import {
  ActionIcon,
  AppShell,
  Group,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

import style from "./Header.module.scss";
import { LanguagePicker } from "components/Header/LanguagePicker/LanguagePicker";

export const Header: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell.Header px="md" className={style.container}>
      <Group justify="space-between" w="100%">
        <Link to="/" className={style.link}>
          <Text>Cooking with Del</Text>
        </Link>

        <Group>
          <LanguagePicker />

          <ActionIcon
            variant="outline"
            color={colorScheme === "dark" ? "gray" : "dark"}
            onClick={toggleColorScheme}
          >
            {colorScheme === "dark" ? (
              <IconSunFilled size={20} />
            ) : (
              <IconMoonFilled size={20} />
            )}
          </ActionIcon>
        </Group>
      </Group>
    </AppShell.Header>
  );
};
