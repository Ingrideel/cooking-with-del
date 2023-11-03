import { ActionIcon, Menu, Radio } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "src/language";

export const LanguagePicker: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Menu
      shadow="md"
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right", duration: 150 }}
    >
      <Menu.Target>
        <ActionIcon variant="outline">
          <IconLanguage size={20} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {Object.values(LANGUAGES).map((language) => (
          <Menu.Item
            key={language}
            leftSection={<Radio defaultChecked={language === i18n.language} />}
            onClick={() => i18n.changeLanguage(language)}
          >
            {t(`language.${language}`)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
