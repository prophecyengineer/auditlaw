import React from "react";
import {
  GitPullRequest,
  AlertCircle,
  Messages,
  Database,
  Home2,
  QuestionMark,
  UserCircle,
  Bell,
  Coin,
  Planet,
  DotsCircleHorizontal,
} from "tabler-icons-react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  route: string;
}

function MainLink({ icon, color, label, route }: MainLinkProps) {
  return (
    <Link to={route}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,

          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

const data = [
  {
    icon: <Home2 size={16} />,
    color: "blue",
    label: "Home",
    route: "/",
  },

  {
    icon: <Bell size={16} />,
    color: "grape",
    label: "Notifications",
    route: "/notifications",
  },
  {
    icon: <Planet size={16} />,
    color: "blue",
    label: "Explore",
    route: "/explore",
  },
  {
    icon: <UserCircle size={16} />,
    color: "violet",
    label: "Profile",
    route: "/profile",
  },
  {
    icon: <Messages size={16} />,
    color: "violet",
    label: "Messages",
    route: "/messages",
  },
  {
    icon: <Coin size={16} />,
    color: "teal",
    label: "Subscriptions",
    route: "/subscriptions",
  },

  {
    icon: <DotsCircleHorizontal size={16} />,
    color: "grape",
    label: "More",
    route: "/about",
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
