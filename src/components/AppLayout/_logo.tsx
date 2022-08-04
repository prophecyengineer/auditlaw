import React from "react";
import { ColorScheme, Group, Title, Image } from "@mantine/core";

export function Logo() {
  return (
    <>
      <Group spacing="xs">
        <Image height={30} src="/logo.png"></Image>
        <Title order={5}>bunch</Title>
      </Group>
    </>
  );
}
