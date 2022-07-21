import React from "react";
import {
  Group,
  ActionIcon,
  useMantineColorScheme,
  Box,
  Button,
} from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import { Logo } from "./_logo";

export function Brand() {
  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.xs,
        paddingTop: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
        <Logo />
      </Group>
    </Box>
  );
}
