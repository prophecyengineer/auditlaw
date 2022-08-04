import React, { useEffect, useState } from "react";
import { useStoreState } from "pullstate";
import { CategoryStore, TalkStore } from "../../store";
import { getPeople } from "../../store/PeopleStore";
import { getCategory, getTalks } from "../../store/Selectors";
import CommentStore, { getComment } from "../../store/CommentStore";
import CommentCard from "../CommentCard/index";
import { Link } from "react-router-dom";
import { Key } from "react";

import {
  Button,
  Card,
  List,
  Space,
  Modal,
  Text,
  Badge,
  Title,
  UnstyledButton,
  Grid,
  Avatar,
  Collapse,
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
import NotificationCard from "../NotificationCard";

type Example = {
  talk: string;

  //   locations: {
  //   name: string;
  //   id: string;
  //   description: string;
  //   photo: string;
  // }[];
  speaker: string[];
  category_id: string;
  speakers: number;
  audience: string;
  username: string;
  title: string;
  image: string;
  name: string;
  bio: string;
};

export const PostCard = (talk: Example) => {
  const talkCategory = useStoreState(
    CategoryStore,
    getCategory(talk.category_id)
  );
  const talks = useStoreState(TalkStore, getTalks);

  const [showModal, setShowModal] = useState(false);
  const [opened, setOpened] = useState(false);
  const [likeOpened, setLikeOpen] = useState(false);

  return (
    <>
      {talks.map((talk: any, talkIndex: Key | null | undefined) => {
        return (
          <Card key={`speaker_${talkIndex}`} className={styles.talkCard}>
            <Link to={`/${talk["username"]}`}>
              <UnstyledButton
                onClick={() => console.log("try focusing button with tab")}
              >
                <Group>
                  <Avatar mr={-18} src={talk["image"]} size={40}></Avatar>
                  <div>
                    <Text>{talk["name"]}</Text>
                  </div>
                </Group>
              </UnstyledButton>
            </Link>
            <Space h="md" />
            <Title mt={-15} order={3}>
              {talk.title}
            </Title>
            <Space h="sm" />
            <Group grow>
              <Button
                onClick={() => setLikeOpen((o) => !o)}
                size="xs"
                variant="subtle"
              >
                <Check />
                <Space w="xs" />

                <span>{talk.speakers}</span>
              </Button>

              <Button size="xs" variant="subtle">
                <MessageCircle2 />
                <Space w="xs" />

                <span>{talk.audience}</span>
              </Button>
              <Button size="xs" variant="subtle">
                <Share />
                <Space w="xs" />
                <span>{talk.speakers}</span>
              </Button>
            </Group>
            <Collapse
              in={likeOpened}
              transitionDuration={1000}
              transitionTimingFunction="linear"
            >
              <Grid>
                <Grid.Col key={1}>
                  <Link to="/alex">
                    <UnstyledButton>
                      <Group position="center">
                        {/* <>
                          <Avatar src={speaker.image} size={40}></Avatar>{" "}
                          <Text size="xs" weight="bold">
                            {speaker.username}
                          </Text>
                          <Text ml={-20} size="xs">
                            {talkCategory.name}
                          </Text>
                        </> */}
                      </Group>
                    </UnstyledButton>
                  </Link>
                  <Space h="md" />
                </Grid.Col>
              </Grid>
            </Collapse>
          </Card>
        );
      })}
    </>
  );
};

export default PostCard;
