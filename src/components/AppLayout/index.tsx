// // import { UserProvider } from "../../context/user";
// // import { useAuthenticator } from "@aws-amplify/ui-react";
// import {
//   JSXElementConstructor,
//   ReactElement,
//   ReactFragment,
//   ReactPortal,
//   useState,
// } from "react";
// import { BrowserRouter, Link } from "react-router-dom";

// // import AuthedOnboardingWrapper from "../Wrapper/AuthedOnboardingWrapper";
// import AuthedWrapper from "./AuthedWrapper";
// // import NotAuthedWrapper from "../IsAuthedWrapper/NotAuthedWrapper";

// const IsAuthedWrapper = (props: {
//   children:
//     | string
//     | number
//     | boolean
//     | ReactElement<
//         // import { useAuthenticator } from "@aws-amplify/ui-react";
//         any,
//         string | JSXElementConstructor<any>
//       >
//     | ReactFragment
//     | ReactPortal
//     | null
//     | undefined;
// }) => {
//   //chnage user for UserContext user
//   // const { user, signOut } = useAuthenticator((context) => [context.user]);
//   // console.log("wrapper found a user", user);

//   //if user + username found
//   // if (user !== undefined) {
//   return (
//     <>
//       <AuthedWrapper children={undefined}></AuthedWrapper>
//     </>
//   );
//   // }

//   //if no username found in context
//   //   if (user !== undefined) {
//   //     return (
//   //       <>
//   //         <AuthedOnboardingWrapper>{children}</AuthedOnboardingWrapper>
//   //       </>
//   //     );
//   //   }
//   //   if (user === undefined) {
//   //   router.pathname === "/home" ||
//   //     router.pathname === "/profile" ||
//   //     router.pathname === "/explore";
//   //     return (
//   //       <>
//   //         <NotAuthedWrapper>{children}</NotAuthedWrapper>
//   //       </>
//   //     );
//   //   }
// };

// export default IsAuthedWrapper;

import { useCallback, useContext, useState } from "react";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
  Button,
  Space,
  Footer,
  Tabs,
  TabsProps,
  ActionIcon,
  Group,
  Avatar,
} from "@mantine/core";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile";
import Home from "../../pages/Home";
import { User } from "./_user";
import { Brand } from "./_brand";

import { MainLinks } from "./_mainLinks";
import {
  Photo,
  MessageCircle,
  Settings,
  Home2,
  Planet,
  CirclePlus,
  UserCircle,
  ChartBubble,
  MessageCircle2,
  Heart,
} from "tabler-icons-react";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Explore from "../../pages/Explore";
import Post from "../../pages/Post";
import Chat from "../../pages/Chat";
import Notification from "../../pages/Notification";
import { UserContext } from "../../context/UserContext";
import PublicProfile from "../../pages/PublicProfile";

function AppLayout() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const user = useContext(UserContext);

  return (
    <Router>
      <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        navbar={
          <Navbar
            p="xs"
            width={{ base: 400 }}
            // Breakpoint at which navbar will be hidden if hidden prop is true
            hiddenBreakpoint="sm"
            // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
            hidden={!opened}
            // when viewport size is less than theme.breakpoints.sm navbar width is 100%
            // viewport size > theme.breakpoints.sm – width is 300px
            // viewport size > theme.breakpoints.lg – width is 400px
            // width={{ sm: 500, lg: 400 }}
          >
            <Navbar.Section grow mt="sm">
              <MainLinks />
            </Navbar.Section>
            <Navbar.Section>
              <User />
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={70}>
            {/* Handle other responsive styles with MediaQuery component or createStyles function */}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Brand />
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                {/* <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="md"
                  color={theme.colors.blue[6]}
                  mr="md"
                  mt="sm"
                /> */}
                <Group position="right">
                  <ActionIcon size="xl" component={Link} to="/notification">
                    <Heart size={22} />
                  </ActionIcon>
                </Group>
              </MediaQuery>
            </div>
          </Header>
        }
        footer={
          <>
            <MediaQuery largerThan="sm" styles={{ display: "" }}>
              <Footer height={80} p="sm" pt={15}>
                {" "}
              </Footer>
            </MediaQuery>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Footer height={80} p="sm" pt={15}>
                <Tabs variant="pills" defaultValue="home">
                  <Tabs.List>
                    <Tabs.Tab
                      value="home"
                      icon={
                        <ActionIcon size="xl" component={Link} to="/home">
                          <Home2 size={22} />
                        </ActionIcon>
                      }
                    ></Tabs.Tab>

                    <Tabs.Tab
                      value="explore"
                      icon={
                        <ActionIcon size="xl" component={Link} to="/explore">
                          <Planet size={22} />
                        </ActionIcon>
                      }
                    ></Tabs.Tab>
                    <Tabs.Tab
                      value="post"
                      icon={
                        <ActionIcon size="xl" component={Link} to="/post">
                          <CirclePlus size={22} />
                        </ActionIcon>
                      }
                    ></Tabs.Tab>
                    <Tabs.Tab
                      value="chat"
                      icon={
                        <ActionIcon size="xl" component={Link} to="/chat">
                          <MessageCircle2 size={22} />
                        </ActionIcon>
                      }
                    ></Tabs.Tab>
                    <Tabs.Tab
                      value="profile"
                      icon={
                        <ActionIcon size="xl" component={Link} to="/profile">
                          <Avatar src={user.image} size={22} />
                        </ActionIcon>
                      }
                    ></Tabs.Tab>
                  </Tabs.List>
                </Tabs>
              </Footer>
            </MediaQuery>
          </>
        }
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/post" element={<Post />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route element={<PublicProfile />} path="/:userurl" />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default AppLayout;
