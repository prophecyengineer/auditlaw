import React, { useEffect, useState } from "react";
import { useStoreState } from "pullstate";
import { CategoryStore } from "../../store";
import { getPeople } from "../../store/PeopleStore";
import { getCategory } from "../../store/Selectors";
import CommentStore, { getComment } from "../../store/CommentStore";
import CommentCard from "../CommentCard/index";
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

export const NotificationCard = ({ talk }) => {
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
      <Grid>
        {speakers.map((speaker, index) => {
          // console.log(speaker);
          return (
            <>
              <Grid.Col>
                <UnstyledButton
                  key={`speaker_${index}`}
                  onClick={() => console.log("try focusing button with tab")}
                >
                  <Group grow>
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
                <Divider />
              </Grid.Col>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default NotificationCard;
