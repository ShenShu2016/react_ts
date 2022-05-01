/*
 * @Author: Shen Shu
 * @Date: 2022-05-01 15:55:30
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-01 15:55:31
 * @FilePath: \react_ts\frontend\src\pages\home\HomePage.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Button, Title } from "@mantine/core";

import React from "react";

function HomePage(): JSX.Element {
  return (
    <div>
      <Title order={1}>你好吗</Title>
      <Button>My app button</Button>
    </div>
  );
}

export default HomePage;
