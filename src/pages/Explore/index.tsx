import React from "react";
import { useQuery, gql } from "@apollo/client";

interface ApolloExample {
  locations: {
    name: string;
    id: string;
    description: string;
    photo: string;
  }[];
}

const Explore = () => {
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

  function DisplayLocations(): JSX.Element | JSX.Element[] | any {
    const { loading, error, data } = useQuery<ApolloExample>(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data?.locations.map(({ id, name, description, photo }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img
          width="400"
          height="250"
          alt="location-reference"
          src={`${photo}`}
        />
        <br />
        <b>About this location:</b>
        <p>{description}</p>
        <br />
      </div>
    ));
  }
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>;
      <DisplayLocations />
      <h1 className="title is-1">This is the Explore Page</h1>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
        in efficitur arcu congue. Nam fermentum commodo egestas.
      </p>
    </div>
  );
};

export default Explore;
