/*
 * @Author: Shen Shu
 * @Date: 2022-05-01 16:11:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-02 19:14:18
 * @FilePath: \react_ts\frontend\src\Layout.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  ColorScheme,
  ColorSchemeProvider,
  Footer,
  Header,
  MantineProvider,
  MediaQuery,
  Navbar,
  Space,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Apps, BrandGithub, Moon, Sun } from "tabler-icons-react";
import React, { useState } from "react";

import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";
import { MainLinks } from "./components/MainLink";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const [burgerOpened, setBurgerOpened] = useState(false);

  const dark = colorScheme === "dark";

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          styles={
            {
              // main: {
              //   background:
              //     theme.colorScheme === "dark"
              //       ? theme.colors.dark[8]
              //       : theme.colors.gray[0],
              // },
            }
          }
          navbarOffsetBreakpoint="sm"
          // asideOffsetBreakpoint="sm"
          fixed
          navbar={
            <Navbar
              p="md"
              hiddenBreakpoint="sm"
              hidden={!burgerOpened}
              width={{ sm: 200, lg: 300 }}
            >
              <MainLinks />
            </Navbar>
          }
          // aside={
          //   <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          //       <Text>Application sidebar</Text>
          //     </Aside>
          //   </MediaQuery>
          // }
          footer={
            <Footer height={60} p="md">
              https://mantine.dev/core/affix/
            </Footer>
          }
          header={
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
                    onClick={() => setBurgerOpened((o) => !o)}
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
                    <Apps size={32} />
                    <Space w="sm" />
                    <Button size="md" onClick={() => navigate("/auth/signIn")}>
                      Sign in
                    </Button>
                  </Box>
                </MediaQuery>
              </Box>
            </Header>
          }
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Layout;
