/*
 * @Author: Shen Shu
 * @Date: 2022-05-01 16:11:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-02 22:12:14
 * @FilePath: \react_ts\frontend\src\Layout.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import React, { useState } from "react";

import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const [burgerOpened, setBurgerOpened] = useState(false);

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
          navbar={<NavbarComponent burgerOpened={burgerOpened} />}
          // aside={
          //   <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          //       <Text>Application sidebar</Text>
          //     </Aside>
          //   </MediaQuery>
          // }
          footer={<FooterComponent />}
          header={
            <HeaderComponent
              burgerOpened={burgerOpened}
              setBurgerOpened={setBurgerOpened}
            />
          }
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Layout;
