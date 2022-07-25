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

export const CommentCard = ({ talk }) => {
  const talkCategory = useStoreState(
    CategoryStore,
    getCategory(talk.category_id)
  );
  const [speakers, setSpeakers] = useState([]);

  // console.log(talk, "talk");

  useEffect(() => {
    setSpeakers(getPeople(talk.speakers));
  }, [talk]);

  // console.log(speakers, "speakers");

  return <></>;
};

export default CommentCard;
