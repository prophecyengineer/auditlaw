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
  Divider,
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
import styles from "./NotificationCard.module.css";

type Example = {
  talk: string,

  speaker: {
    username: string,
    id: string,
    image: string,
  }[],
  category_id: string,
  // speakers: number;
  audience: string,
  username: string,
  title: string,
  image: string,
  name: string,
  bio: string,
};

export const NotificationCard = (talk: Example) => {
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
    <>
      hi
      {/* <Grid>
        {speakers.map((speaker, index) => {
          // console.log(speaker);
          return (
            <>
              <Grid.Col>
                <Link to={`/${speaker?.username}`}>
                  <UnstyledButton
                    key={`speaker_${index}`}
                    onClick={() => console.log("try focusing button with tab")}
                  >
                    <Group position="center">
                      <>
                        <Avatar src={speaker.image} size={40}></Avatar>{" "}
                        <Text size="xs" weight="bold">
                          {speaker.username}
                        </Text>
                        <Text ml={-20} size="xs">
                          {talkCategory.name}
                        </Text>
                      </>
                    </Group>
                  </UnstyledButton>
                </Link>
                <Divider />
              </Grid.Col>
            </>
          );
        })}
      </Grid> */}
    </>
  );
};

export default NotificationCard;
