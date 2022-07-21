import { Text } from "@mantine/core";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
// import { UserContext } from "../../context/UserContext";

const Home = () => {
  const user = useContext(UserContext);

  if (user?.login?.username) {
    return (
      <>
        <p>You are logged in as {user?.login.username}</p>{" "}
        <h1 className="title is-1">This is the Home Page {user?.name.first}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
          risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan
          eros nulla interdum justo. Pellentesque dignissim, sapien et congue
          rutrum, lorem tortor dapibus turpis, sit amet vestibulum eros mi et
          odio.
        </p>
      </>
    );
  } else {
    return <p>You are not logged in</p>;
  }
};

export default Home;
