import React, { useEffect, useState } from "react";
import { useStoreState } from "pullstate";
import { CategoryStore } from "../../store";
import { getPeople } from "../../store/PostStore";
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
  const [showModal, setShowModal] = useState(false);
  const [opened, setOpened] = useState(false);
  console.log(talk);
  useEffect(() => {
    setSpeakers(getPeople(talk.speakers));
  }, [talk]);
  return (
    <Card className={styles.talkCard}>
      <Group>
        {speakers.map((speaker, index) => {
          console.log(speaker);
          return (
            <div key={`speaker_${index}`} className={styles.talkSpeaker}>
              <Avatar radius="xl" src={speaker.image} />
            </div>
          );
        })}

        <Title order={5}>{talkCategory.name}</Title>
      </Group>
    </Card>
  );
};

export default UserCard;
