import { Grid, Text, Title, Card, Divider, Space } from "@mantine/core";
import { useStoreState } from "pullstate";
import { Key, useContext } from "react";
import PostCard from "../../components/PostCard";
import UserCard from "../../components/UserCard";
import { UserContext } from "../../context/UserContext";
import { TalkStore } from "../../store";
import CommentStore, { getComment } from "../../store/CommentStore";
import { getTalks } from "../../store/Selectors";

const Home = () => {
  const user = useContext(UserContext);

  const talks = useStoreState(TalkStore, getTalks);
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
  const appId = process.env.NEXT_PUBLIC_STREAM_APP_ID as string;
  const userToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ2xvYmFsVXNlciJ9.eiHWrONEGfoYxVDsSCNONfX7xqlar6QRbY0_ZCC6tc0";
  const username = user.username;
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
                bio={""}
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
