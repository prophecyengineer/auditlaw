import { Grid, Text, Title, Card, Divider, Space, Tabs } from "@mantine/core";
import { useStoreState } from "pullstate";
import { Key, useContext, useState } from "react";
import { Brush, Camera, Music } from "tabler-icons-react";
import PostCard from "../../components/PostCard";
import UserCard from "../../components/UserCard";
import { UserContext } from "../../context/UserContext";
import { TalkStore } from "../../store";
import { getTalks } from "../../store/Selectors";

const Home = () => {
  const user = useContext(UserContext);

  const talks = useStoreState(TalkStore, getTalks);

  const [filteredList, setFilteredList] = useState(talks);
  // Selected Art filter

  // Selecte Music filter
  const [selectedMusic, setSelectedMusic] = useState();

  const filterByArt = (filteredData: any[]) => {
    const filteredArt = filteredData.filter(
      (talks: { category_id: string }) =>
        talks.category_id.split(" ").indexOf("art") !== -1
    );
    console.log("filtered art", filteredArt);
    return filteredArt;
  };

  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
  const appId = process.env.NEXT_PUBLIC_STREAM_APP_ID as string;
  const userToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ2xvYmFsVXNlciJ9.eiHWrONEGfoYxVDsSCNONfX7xqlar6QRbY0_ZCC6tc0";
  const username = user.username;
  return (
    <>
      <Tabs variant="pills" radius="xl" defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="art" icon={<Brush size={14} />}>
            Art
          </Tabs.Tab>
          <Tabs.Tab value="music" icon={<Music size={14} />}>
            Music
          </Tabs.Tab>
          <Tabs.Tab value="auditing" icon={<Camera size={14} />}>
            Auditing
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="art" pt="xs">
          art
        </Tabs.Panel>

        <Tabs.Panel value="music" pt="xs">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="auditing" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
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
