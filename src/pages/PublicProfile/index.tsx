import {
  Avatar,
  Stack,
  Title,
  Text,
  BackgroundImage,
  Card,
  Button,
  Grid,
  Space,
} from "@mantine/core";
import React, { useContext } from "react";
import PostCard from "../../components/PostCard";
import { useStoreState } from "pullstate";
import { Key } from "react";
import UserCard from "../../components/UserCard";
import { TalkStore } from "../../store";
import CommentStore, { getComment } from "../../store/CommentStore";
import { getTalks } from "../../store/Selectors";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";

const Profile = () => {
  const user = useContext(UserContext);
  const talks = useStoreState(TalkStore, getTalks);
  const { userurl } = useParams();

  //GET userurl, user from db

  console.log("userUrl", userurl);

  return (
    <>
      <BackgroundImage radius="lg" src={user.theme.backgroundImage}>
        <Stack align="center">
          <Card>
            public
            <Avatar size="xl" src={user.image} />
            <Title order={3}>
              {" "}
              <div>{userurl}'s Profile</div>
            </Title>
            <Title order={5}>{user.username}</Title>
            <Text>{user.bio}</Text>
            <Space h="md" />
            <Grid>
              <Grid.Col span={4}>
                <Button>Follow</Button>
              </Grid.Col>
              <Grid.Col span={4}>
                <Button>Subscribe</Button>
              </Grid.Col>
            </Grid>
          </Card>
          <Grid>
            <Grid.Col>
              {talks.map((talk: any, talkIndex: Key | null | undefined) => {
                return (
                  <PostCard
                    key={talkIndex}
                    talk={talk}
                    speaker={[]}
                    category_id={""}
                    audience={""}
                    username={""}
                    title={""}
                    image={""}
                    name={""}
                    speakers={0}
                  />
                );
              })}
            </Grid.Col>
          </Grid>
        </Stack>
      </BackgroundImage>
    </>
  );
};

export default Profile;
