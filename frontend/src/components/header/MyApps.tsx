/*
 * @Author: Shen Shu
 * @Date: 2022-05-02 22:13:05
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-05 22:45:56
 * @FilePath: \react_ts\frontend\src\components\header\MyApps.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { ActionIcon, Box, Paper, Popover, Text } from "@mantine/core";
import { Apps, Heart, Logout } from "tabler-icons-react";
import React, { useState } from "react";

import { signOut } from "../../redux/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

function MyApps() {
  const [opened, setOpened] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const signOut_user = async () => {
    const response = await dispatch(signOut());
    if (response.meta.requestStatus === "fulfilled") {
      navigate("/", { replace: true });
    }
    setOpened(false);
  };
  return (
    <Box sx={{ alignItems: "center", height: "100%" }}>
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={
          <ActionIcon
            onClick={() => setOpened((o) => !o)}
            sx={{ alignItems: "center", height: "100%" }}
          >
            <Apps size={36} />
          </ActionIcon>
        }
        width={300}
        position="bottom"
        withArrow
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Paper sx={{ width: 80, marginBlock: "0.5rem" }}>
            <Heart size={36} />

            <Text sx={{ textAlign: "center" }}>app name</Text>
          </Paper>
          <Box sx={{ width: 80, marginBlock: "0.5rem" }}>
            <ActionIcon sx={{ margin: "auto" }}>
              <Heart size={36} />
            </ActionIcon>
            <Text sx={{ textAlign: "center" }}>app name</Text>
          </Box>
          <Box sx={{ width: 80, marginBlock: "0.5rem" }}>
            <ActionIcon sx={{ margin: "auto" }}>
              <Heart size={36} />
            </ActionIcon>
            <Text sx={{ textAlign: "center" }}>app name</Text>
          </Box>
          <Box sx={{ width: 80, marginBlock: "0.5rem" }}>
            <ActionIcon sx={{ margin: "auto" }}>
              <Heart size={36} />
            </ActionIcon>
            <Text sx={{ textAlign: "center" }}>app name</Text>
          </Box>
          <Box sx={{ width: 80, marginBlock: "0.5rem" }}>
            <ActionIcon sx={{ margin: "auto" }}>
              <Heart size={36} />
            </ActionIcon>
            <Text sx={{ textAlign: "center" }}>app name</Text>
          </Box>
          <Box sx={{ width: 80, marginBlock: "0.5rem" }}>
            <ActionIcon sx={{ margin: "auto" }}>
              <Heart size={36} />
            </ActionIcon>
            <Text sx={{ textAlign: "center" }}>app name</Text>
          </Box>
          <Box sx={{ width: 80, marginBlock: "0.5rem" }}>
            <ActionIcon sx={{ margin: "auto" }} onClick={signOut_user}>
              <Logout size={36} />
            </ActionIcon>
            <Text sx={{ textAlign: "center" }}>app name</Text>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
}

export default MyApps;
