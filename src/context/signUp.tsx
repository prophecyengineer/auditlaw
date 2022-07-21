import {
  createContext,
  useContext,
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
// import { useAuthenticator } from "@aws-amplify/ui-react";

// import { API } from "aws-amplify";
// import * as queries from "../graphql/queries";
// import * as mutations from "../graphql/mutations";
import { Button } from "@mantine/core";

const SignUpStateContext = createContext({
  name: "Jane",
  username: "Doe",
  bio: "a first bio",
  isActive: 1,
  userToken: "01",
  email: "jane@example.com",
});

export function SignUpProvider(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  const [signUpContext, setSignUpContext] = useState();
  //   const { user, signOut } = useAuthenticator((context) => [context.user]);
  //   console.log("user cognito", user);

  //go get user from db and get their info

  //go get getstream user

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // if (username !== null) {
  // const stream = require("getstream");
  // const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
  // const appId = process.env.NEXT_PUBLIC_STREAM_APP_ID as string;
  // const client = stream.connect(apiKey, userToken, appId);
  // useEffect(() => {
  //   getUser();
  // }, []);
  // async function getUser() {
  //   try {
  //     const userFallback = await client.user(username).get();
  //     setUser(userFallback);
  //     //   console.log("user from stream", userFallback);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const state = {
    username: "lottie",
    name: "Lottie",
    bio: "hello",
    email: "wef",
    isActive: 1,
    userToken: "01",
  };

  // const state = {
  //   userContext,
  // };
  return (
    <SignUpStateContext.Provider value={state}>
      {props.children}
      <Button
      // onClick={async () => {
      //   const data = {
      //     body: {
      //       userUsername: "lottie",
      //       userFullName: "lottiee",
      //       userEmail: "lottie.com",
      //     },
      //     authMode: "AMAZON_COGNITO_USER_POOLS",
      //   };
      //   const apiData = await API.post("userInfo", "/addUser", data);
      //   alert("User Added");
      //   console.log("apiData", apiData);
      // }}
      >
        sign up
      </Button>
    </SignUpStateContext.Provider>
  );
  // }
}

// export function useUserState() {
//   const state = useContext(UserStateContext);
//   if (state === undefined) {
//     throw new Error("useUserState must be used within a UserProvider");
//   }

//   return state;
// }
