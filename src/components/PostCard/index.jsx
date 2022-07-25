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
import styles from "./PostCard.module.css";
import { TalkModal } from "./TalkModal";

export const PostCard = ({ talk }) => {
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
        <Avatar radius="xl" />
        <Title order={5}>{talkCategory.name}</Title>
      </Group>

      <Space h="md" />
      <div className={styles.talkTitle}>
        <Title order={2}>{talk.title}</Title>
      </div>

      <Group grow>
        <Button variant="outline">
          <Check />
          <span>{talk.speakers}</span>
        </Button>
        <Button variant="outline">
          <MessageCircle2 />
          <span>{talk.audience}</span>
        </Button>
        <Button variant="outline">
          <Share />
          <span>{talk.speakers}</span>
        </Button>
      </Group>

      {/* <Button size="sm" mt={30} onClick={() => setOpened(true)}>
        Open Modal
      </Button>

      <Modal opened={opened} onClose={() => setOpened(false)}>
        <TalkModal
          dismiss={() => setShowModal(false)}
          speakers={speakers}
          talk={talk}
          category={talkCategory}
        />
      </Modal> */}
    </Card>
  );
};

export default PostCard;
