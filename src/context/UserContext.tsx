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
  username: "lottieuser",
  fullName: "Lottie",
  image: "https://media.giphy.com/media/X6WQuzT4KXxQs/giphy.gif",
  email: "Lottie@b.com",
  password: "sdfgb",
  bio: "I am a human 👽 I do human things",
  theme: {
    backgroundImage:
      "https://assets.objkt.media/file/assets-003/Qme5ibxKXRyovFtbgf2cVAGrQi7Z7tGwou95RS7nt5E4V4/artifact",
  },
  // updateUser: () => {},
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
  // const [user, setUser] = useState();

  const user = {
    username: "lottiecandoit",
    fullName: "Lottie Bondareva",
    image: "https://media.giphy.com/media/X6WQuzT4KXxQs/giphy.gif",
    bio: "I am a human 👽 I do human things",
    email: "Lottie@b.com",
    password: "sdfgb",
    theme: {
      backgroundImage:
        "https://assets.objkt.media/file/assets-003/Qme5ibxKXRyovFtbgf2cVAGrQi7Z7tGwou95RS7nt5E4V4/artifact",
    },
  };

  // const user = {
  //   login: {
  //     username: "lottiegotit",
  //   },
  //   name: {
  //     first: "Lottie",
  //   },
  // };

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
