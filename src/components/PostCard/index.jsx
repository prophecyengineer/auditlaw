import React, { useEffect, useState } from "react";
import { useStoreState } from "pullstate";
import { CategoryStore } from "../../store";
import { getPeople } from "../../store/PeopleStore";
import { getCategory } from "../../store/Selectors";
import CommentStore, { getComment } from "../../store/CommentStore";
import CommentCard from "../CommentCard/index";
import { Link } from "react-router-dom";

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
import { TalkModal } from "./TalkModal";

export const PostCard = ({ talk }) => {
  const talkCategory = useStoreState(
    CategoryStore,
    getCategory(talk.category_id)
  );

  const comments = useStoreState(CommentStore, getComment);

  const [speakers, setSpeakers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [opened, setOpened] = useState(false);
  const [likeOpened, setLikeOpen] = useState(false);

  // console.log(talk);
  useEffect(() => {
    setSpeakers(getPeople(talk.speakers));
  }, [talk]);

  return (
    <Card className={styles.talkCard}>
      <Group>
        {speakers.map((speaker, index) => {
          // console.log(speaker);
          return (
            <Link to={`/${speaker.username}`}>
              <UnstyledButton
                key={`speaker_${index}`}
                onClick={() => console.log("try focusing button with tab")}
              >
                <Group>
                  <Avatar
                    mr={-18}
                    src={speaker.image}
                    size={40}
                    color="blue"
                  ></Avatar>
                  <div>
                    <Text>{speaker.name}</Text>
                    <Text size="xs" color="gray">
                      {talkCategory.name}
                    </Text>
                  </div>
                </Group>
              </UnstyledButton>
            </Link>
          );
        })}
      </Group>

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
        comment one !
        {/* {comments.map((comment, index) => {
          return (
            <UnstyledButton
              key={`comments_${index}`}
              onClick={() => console.log("try focusing button with tab")}
            >
              <Group>
                <Avatar
                  src={comment.image}
                  mr={-18}
                  size={40}
                  color="blue"
                ></Avatar>
                <div>
                  <Text>{comment.name}</Text>
                </div>
              </Group>
            </UnstyledButton>
          );
        })} */}
      </Collapse>
    </Card>
  );
};

export default PostCard;
