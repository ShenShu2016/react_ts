/*
 * @Author: Shen Shu
 * @Date: 2022-05-01 18:20:00
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-01 18:59:07
 * @FilePath: \react_ts\frontend\src\components\MainLink.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  AlertCircle,
  Database,
  GitPullRequest,
  Messages,
} from "tabler-icons-react";
import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";

import React from "react";
import { useNavigate } from "react-router-dom";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  to?: string;
}

function MainLink({ icon, color, label, to }: MainLinkProps) {
  const navigate = useNavigate();
  return (
    <UnstyledButton
      onClick={() => to && navigate(to)}
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
  );
}

const data = [
  {
    icon: (
      <img
        src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg"
        alt="redux"
        style={{ height: "16px", width: "16px" }}
      />
    ),
    color: "blue",
    label: "Redux Counter",
    to: "/reduxCounter",
  },
  {
    icon: <GitPullRequest size={16} />,
    color: "blue",
    label: "Pull Requests",
    to: "/",
  },
  {
    icon: <AlertCircle size={16} />,
    color: "teal",
    label: "Open Issues",
    to: "/",
  },
  {
    icon: <Messages size={16} />,
    color: "violet",
    label: "Discussions",
    to: "/",
  },
  { icon: <Database size={16} />, color: "grape", label: "Databases", to: "/" },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
