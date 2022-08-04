import {
  Chip,
  Title,
  Text,
  MultiSelect,
  Space,
  Button,
  Group,
} from "@mantine/core";
import { Blockquote, LetterCase, Slideshow, Video } from "tabler-icons-react";

const Post = () => {
  const data = [
    { value: "react", label: "Food" },
    { value: "ng", label: "Fitness" },
    { value: "svelte", label: "Development" },
    { value: "vue", label: "Art" },
    { value: "riot", label: "Auditing" },
    { value: "next", label: "Music" },
    { value: "blitz", label: "Poetry" },
  ];
  return (
    <>
      <Title order={1}>Make a Post</Title>
      <Text>
        Here you can select options for Post Type, where that post will be
        posted and whether it has a paywall
      </Text>

      <Title order={2}>Choose post type</Title>
      <Space h="sm" />
      <Group spacing="xs">
        <Button size="xl" variant="light" color="teal">
          <LetterCase size={48} strokeWidth={2} />
        </Button>
        <Button size="xl" variant="light" color="teal">
          <Slideshow size={48} strokeWidth={2} color={"black"} />
        </Button>
        <Button size="xl" variant="light" color="teal">
          <Video size={48} strokeWidth={2} />
        </Button>
        <Button size="xl" variant="light" color="teal">
          <Blockquote size={48} strokeWidth={2} />
        </Button>
      </Group>
      <Space h="sm" />

      <Title order={2}>Choose where to post</Title>
      <MultiSelect
        data={data}
        label="Groups to post to"
        placeholder="Pick all that you like"
      />
      <Space h="md" />
      <Chip>personal</Chip>
      <Chip>food</Chip>
    </>
  );
};

export default Post;
