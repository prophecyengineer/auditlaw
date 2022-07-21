import React, {
  createContext,
  useState,
  useEffect,
  ReactElement,
  ReactFragment,
  ReactPortal,
  JSXElementConstructor,
} from "react";

// create context
const UserContext = createContext({
  login: {
    username: "jhgh",
  },
  name: {
    first: "Lotttie",
  },
});

const UserContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  // the value that will be given to the context
  //   const [user, setUser] = useState();

  // fetch a user from a fake backend API

  const user = {
    login: {
      username: "lottiegotit",
    },
    name: {
      first: "Lottie",
    },
  };

  //   if (user === undefined) {
  //     const fetchUser = () => {
  //       fetch("https://randomuser.me/api/")
  //         .then((response) => response.json())
  //         .then((result) => setUser(result.results[0]))
  //         .catch((error) => console.log("An error occured"));
  //     };
  //     fetchUser();
  //   }

  console.log("user", user);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
