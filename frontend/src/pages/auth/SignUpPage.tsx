/*
 * @Author: Shen Shu
 * @Date: 2022-05-02 12:13:49
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-02 17:27:22
 * @FilePath: \react_ts\frontend\src\pages\auth\SignUpPage.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

// import "./SignInPage.css";

import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";

import React from "react";
import { useForm } from "@mantine/hooks";

function SignUpPage() {
  const form = useForm({
    initialValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsOfService: false,
    },

    validationRules: {
      email: (value: string) => /^\S+@\S+$/.test(value),
    },
  });
  return (
    <Box sx={{ maxWidth: "500px", width: "100%" }}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Paper p="md" shadow="xl">
          <Paper p="sm">
            <TextInput
              label="Full Name"
              required
              placeholder="First Last"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
            />
          </Paper>

          <Paper p="sm">
            <TextInput
              label="Username"
              required
              placeholder="exampleuser"
              value={form.values.userName}
              onChange={(event) =>
                form.setFieldValue("userName", event.currentTarget.value)
              }
            />
          </Paper>
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
            <Text sx={{ margin: "0.2rem" }} align="left" size="xs">
              Password must be unique and at least 11 characters
            </Text>
          </Paper>
          <Paper p="sm">
            <PasswordInput
              label="Confirm Password"
              required
              value={form.values.confirmPassword}
              onChange={(event) =>
                form.setFieldValue("confirmPassword", event.currentTarget.value)
              }
            />
          </Paper>
          <Paper p="sm" sx={{ display: "flex" }}>
            <Checkbox
              required
              checked={form.values.termsOfService}
              onChange={(event) =>
                form.setFieldValue(
                  "termsOfService",
                  !form.values.termsOfService
                )
              }
            />
            <Text sx={{ marginLeft: "0.6rem" }}>
              I agree to the <Anchor>Terms of Use</Anchor>
            </Text>
          </Paper>
          <Paper p="sm">
            <Button size="lg" sx={{ minWidth: "100%" }} type="submit">
              Create Account
            </Button>
          </Paper>
        </Paper>
      </form>
    </Box>
  );
}

export default SignUpPage;
