import { useCallback, useContext, useState } from "react";
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Footer,
  Tabs,
  TabsProps,
  ActionIcon,
  Group,
  Avatar,
  UnstyledButton,
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
  Container,
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

                <Link style={{ padding: "30px" }} to="/notification">
                  <Heart size={22} />
                </Link>
              </MediaQuery>
            </div>
          </Header>
        }
        footer={
          <>
            <MediaQuery largerThan="sm" styles={{ display: "" }}>
              <Footer p={0} pt={0} height={""}>
                {" "}
              </Footer>
            </MediaQuery>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Footer p={0} pt={0} height={""}>
                <Tabs defaultValue="home">
                  <Tabs.List position="apart" grow>
                    <Link to="/home">
                      <Tabs.Tab value="home">
                        <Home2 size={22} />
                      </Tabs.Tab>
                    </Link>

                    <Link to="/explore">
                      <Tabs.Tab value="explore">
                        <Planet size={22} />
                      </Tabs.Tab>
                    </Link>
                    <Link to="/post">
                      <Tabs.Tab value="post">
                        <CirclePlus size={22} />
                      </Tabs.Tab>
                    </Link>
                    <Link to="/chat">
                      <Tabs.Tab value="chat">
                        <MessageCircle2 size={22} />
                      </Tabs.Tab>
                    </Link>
                    <Link to="/profile">
                      <Tabs.Tab value="profile">
                        <Avatar src={user.image} size={22} />
                      </Tabs.Tab>
                    </Link>
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
