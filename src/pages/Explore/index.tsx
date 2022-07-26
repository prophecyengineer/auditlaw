import React, { memo } from "react";
import { useQuery, gql } from "@apollo/client";

interface ApolloExample {
  locations: {
    name: string;
    id: string;
    description: string;
    photo: string;
  }[];
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const DisplayLocations = () => {
  const { loading, error, data } = useQuery<ApolloExample>(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : </p>;

  return (
    <>
      {data?.locations.map((location) => (
        <DisplayLocation {...location} />
      ))}
    </>
  );
};

type DisplayLocationProps = {
  id?: string;
  name?: string;
  photo?: string;
  description?: string;
};

const DisplayLocation = ({
  id,
  name,
  photo,
  description,
}: DisplayLocationProps) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  );
};

const Explore = () => {
  return (
    <div>
      <DisplayLocations />
    </div>
  );
};

export default Explore;
