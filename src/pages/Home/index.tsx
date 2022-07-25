import { Grid, Text, Title, Card, Divider, Space } from "@mantine/core";
import { useStoreState } from "pullstate";
import { Key } from "react";
import PostCard from "../../components/PostCard";
import UserCard from "../../components/UserCard";
import { TalkStore } from "../../store";
import CommentStore, { getComment } from "../../store/CommentStore";
import { getTalks } from "../../store/Selectors";

const Home = () => {
  const talks = useStoreState(TalkStore, getTalks);

  return (
    <>
      <Title order={2}>Home </Title>
      {/* <Grid>
        {talks.map((talk: any, talkIndex: Key | null | undefined) => {
          return <UserCard key={talkIndex} talk={talk} />;
        })}
      </Grid> */}
      <Space h={30} />
      <Grid>
        <Grid.Col>
          {talks.map((talk: any, talkIndex: Key | null | undefined) => {
            return (
              <PostCard
                key={talkIndex}
                talk={talk}
                speaker={[]}
                category_id={""}
                speakers={0}
                audience={""}
                username={""}
                title={""}
                image={""}
                name={""}
              />
            );
          })}
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Home;
