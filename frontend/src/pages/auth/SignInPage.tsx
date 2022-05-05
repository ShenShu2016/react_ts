/*
 * @Author: Shen Shu
 * @Date: 2022-05-02 16:57:26
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-04 22:32:57
 * @FilePath: \react_ts\frontend\src\pages\auth\SignInPage.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import {
  Box,
  Button,
  Divider,
  Image,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";

import React from "react";
import { useForm } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validationRules: {
      email: (value: string) => /^\S+@\S+$/.test(value),
    },
  });
  return (
    <Box sx={{ maxWidth: "500px", width: "100%" }}>
      <Paper p="md" shadow="xl" sx={{ paddingBottom: "0" }}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Paper p="sm">
            <TextInput
              label="Email"
              required
              placeholder="exampleuser@example.com"
              value={form.values.email}
              error={form.errors.email && "Please specify valid email"}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
            />
          </Paper>
          <Paper p="sm">
            <PasswordInput
              label="Password"
              required
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
            />
          </Paper>

          <Paper p="sm">
            <Button size="lg" sx={{ minWidth: "100%" }} type="submit">
              Sign in
            </Button>
          </Paper>
        </form>
        <Divider
          my="xs"
          label="on"
          labelPosition="center"
          sx={{ width: "200px", marginInline: "auto" }}
        />
        <Paper p="sm">
          <Button
            size="lg"
            sx={{
              minWidth: "100%",
              height: 44,
              background: "#4285F4",
              color: "white",
            }}
          >
            <Image src="/assets/images/icons/google-1.svg" alt="google" />
            <Box sx={{ fontSize: "12px", marginLeft: "1rem" }}>
              Continue with Google
            </Box>
          </Button>
        </Paper>

        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingInline: "8px",
            paddingTop: "8px",
          }}
        >
          <Box>Don’t have account?</Box>
          <Title
            order={6}
            sx={{
              marginLeft: "1rem",
              borderBottom: "1px solid",
              borderColor: "#212121",
              cursor: "pointer",
            }}
            onClick={() => navigate("/auth/signUp")}
          >
            Sign Up
          </Title>
        </Paper>
      </Paper>
      <Paper
        p="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#eeeeee",
        }}
      >
        <Box> Forgot your password?</Box>
        <Title
          order={6}
          sx={{
            marginLeft: "1rem",
            borderBottom: "1px solid",
            borderColor: "#212121",
            cursor: "pointer",
          }}
          onClick={() => navigate("")}
        >
          Reset It
        </Title>
      </Paper>
    </Box>
  );
}

export default SignInPage;
