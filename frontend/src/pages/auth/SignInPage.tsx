/*
 * @Author: Shen Shu
 * @Date: 2022-05-02 16:57:26
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-02 17:26:50
 * @FilePath: \react_ts\frontend\src\pages\auth\SignInPage.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Box, Button, Paper, PasswordInput, TextInput } from "@mantine/core";

import React from "react";
import { useForm } from "@mantine/hooks";

function SignInPage() {
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
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Paper p="md" shadow="xl">
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
        </Paper>
      </form>
    </Box>
  );
}

export default SignInPage;
