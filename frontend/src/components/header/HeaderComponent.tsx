/*
 * @Author: Shen Shu
 * @Date: 2022-05-02 21:06:39
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-02 23:12:05
 * @FilePath: \react_ts\frontend\src\components\header\HeaderComponent.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Button,
  Header,
  MediaQuery,
  Space,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { BrandGithub, Moon, Sun } from "tabler-icons-react";

import { Link } from "react-router-dom";
import MyApps from "./MyApps";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

interface HeaderComponentProps {
  burgerOpened: boolean;
  setBurgerOpened: any;
}

function HeaderComponent({
  burgerOpened,
  setBurgerOpened,
}: HeaderComponentProps) {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const { isAuth } = useAppSelector((state) => state.auth);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Header height={70} p="md">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={burgerOpened}
            onClick={() => setBurgerOpened((o: boolean) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Avatar
            src="/myAvatar.png"
            alt="Shen Shu"
            radius="xl"
            component={Link}
            to=""
          />
          <Space w="sm" />
          <Link
            to=""
            style={{
              textDecoration: "none",
              color:
                colorScheme === "dark"
                  ? theme.colors.dark[1]
                  : theme.colors.blue[5],
            }}
          >
            <Title order={1}>SHUSHEN.CA</Title>
          </Link>
        </Box>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <ActionIcon
              onClick={() =>
                window.open("https://github.com/ShenShu2016", "_blank")
              }
            >
              <BrandGithub size={32} />
            </ActionIcon>
            <Space w="sm" />
            <ActionIcon
              color={dark ? "yellow" : undefined}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <Sun size={32} /> : <Moon size={32} />}
            </ActionIcon>
            <Space w="sm" />
            <MyApps />
            <Space w="sm" />
            {isAuth ? (
              <Avatar color="cyan" radius="xl">
                无名
              </Avatar>
            ) : (
              <Button size="md" onClick={() => navigate("/auth/signIn")}>
                Sign in
              </Button>
            )}
          </Box>
        </MediaQuery>
      </Box>
    </Header>
  );
}

export default HeaderComponent;
