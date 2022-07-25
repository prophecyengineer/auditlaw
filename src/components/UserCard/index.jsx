import React, { useEffect, useState } from "react";
import { useStoreState } from "pullstate";
import { CategoryStore } from "../../store";
import { getPeople } from "../../store/PeopleStore";
import { getCategory } from "../../store/Selectors";
import {
  Button,
  Card,
  List,
  Space,
  Modal,
  Text,
  Badge,
  Title,
  Grid,
  Avatar,
  Group,
  Image,
  Stack,
  UnstyledButton,
} from "@mantine/core";
import {
  ChartArcs,
  ChartBubble,
  ChartDonut2,
  Check,
  FileLike,
  Icons,
  ListCheck,
  MessageCircle2,
  Share,
  UserCircle,
} from "tabler-icons-react";
import styles from "./UserCard.module.css";

export const UserCard = ({ talk }) => {
  const talkCategory = useStoreState(
    CategoryStore,
    getCategory(talk.category_id)
  );
  const [speakers, setSpeakers] = useState([]);

  // console.log(talk);
  useEffect(() => {
    setSpeakers(getPeople(talk.speakers));
  }, [talk]);
  return (
    <Card>
      <Card.Section mb={-50}>
        <Image
          radius="md"
          fit="cover"
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="Random unsplash image"
        />
      </Card.Section>

      {speakers.map((speaker, index) => {
        // console.log(speaker);
        return (
          <div key={`speaker_${index}`}>
            <UnstyledButton>
              <Stack align="center" spacing="md">
                <Avatar radius="xl" size="lg" src={speaker.image} />
                <Text size="sm">@{speaker.username}</Text>
              </Stack>
            </UnstyledButton>
            {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              follow
            </Button> */}
          </div>
        );
      })}
    </Card>
  );
};

export default UserCard;
