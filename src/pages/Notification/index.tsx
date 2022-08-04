import { Grid, Text, Title, Card, Divider, Space } from "@mantine/core";
import { useStoreState } from "pullstate";
import { Key } from "react";
import NotificationCard from "../../components/NotificationCard";
import PostCard from "../../components/PostCard";
import UserCard from "../../components/UserCard";
import { TalkStore } from "../../store";
import CommentStore, { getComment } from "../../store/CommentStore";
import { getTalks } from "../../store/Selectors";

const Home = () => {
  const talks = useStoreState(TalkStore, getTalks);

  return (
    <>
      <Title order={2}>Activity </Title>

      <Space h={30} />

      {talks.map((talk: any, talkIndex: Key | null | undefined) => {
        return (
          <NotificationCard
            key={talkIndex}
            talk={talk}
            speaker={[]}
            category_id={""}
            audience={""}
            username={""}
            title={""}
            image={""}
            name={""}
            bio={""}
          />
        );
      })}
    </>
  );
};

export default Home;
