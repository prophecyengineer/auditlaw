import React, { memo } from "react";
import { useQuery, gql } from "@apollo/client";
import styles from "../../components/PostCard/PostCard.module.css";
import {
  Avatar,
  Card,
  Group,
  Text,
  Button,
  Space,
  Title,
  Image,
} from "@mantine/core";
import { Check, MessageCircle2, Share } from "tabler-icons-react";

interface ApolloExample {
  listEvents: {
    items: {
      name: string;
      id: string;
      image: string;
      post: string;
    }[];
  };
}

const GET_EVENTS = gql`
  query ListEvents {
    listEvents {
      items {
        id
        name
        image
        post
      }
    }
  }
`;

const DisplayEvents = () => {
  const { loading, error, data } = useQuery<ApolloExample>(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : </p>;
  console.log("data", data?.listEvents.items);

  return (
    <>
      {data?.listEvents.items.map((item) => (
        <DisplayEvent key={item.id} {...item} />
      ))}
    </>
  );
};

type DisplayEventProps = {
  id?: string;
  name?: string;
  image: string;
  post: string;
};

const DisplayEvent = ({ id, name, post, image }: DisplayEventProps) => {
  return (
    <Card key={id} className={styles.talkCard}>
      <Group>
        <Avatar mr={-18} src={image} size={40}></Avatar>
        <div>
          <Text>{name}</Text>
        </div>
      </Group>

      <Image width="400" height="250" src={`${image}`} />
      <Space h="md" />

      <Title mt={-15} order={3}>
        {post}
      </Title>
      {/* <b>About this location:</b>
      // <p>{description}</p> */}
    </Card>
  );
};

const Explore = () => {
  return (
    <>
      <DisplayEvents />
    </>
  );
};

export default Explore;
