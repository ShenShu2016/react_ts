/*
 * @Author: Shen Shu
 * @Date: 2022-05-02 21:18:39
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-02 21:18:39
 * @FilePath: \react_ts\frontend\src\components\NavbarComponent.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { MainLinks } from "./MainLink";
import { Navbar } from "@mantine/core";
import React from "react";

interface NavbarComponentProps {
  burgerOpened: boolean;
}

function NavbarComponent({ burgerOpened }: NavbarComponentProps) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!burgerOpened}
      width={{ sm: 200, lg: 300 }}
    >
      <MainLinks />
    </Navbar>
  );
}

export default NavbarComponent;
