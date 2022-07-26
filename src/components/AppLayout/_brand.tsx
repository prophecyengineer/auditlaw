import React from "react";
import { Box, Button } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import { Logo } from "./_logo";

export function Brand() {
  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.xs,
        paddingTop: theme.spacing.lg,
      })}
    >
      <Logo />
    </Box>
  );
}
