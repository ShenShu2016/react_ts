/*
 * @Author: Shen Shu
 * @Date: 2022-05-05 21:36:55
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-05 22:51:10
 * @FilePath: \react_ts\frontend\src\pages\auth\EmailConfirmPage.tsx
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
  TextInput,
  Title,
} from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";

import React from "react";
import { emailConfirm } from "../../redux/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useForm } from "@mantine/hooks";

export default function EmailConfirmPage() {
  const navigate = useNavigate();
  const { email } = useParams();
  const dispatch = useAppDispatch();
  console.log(email);

  const form = useForm({
    initialValues: {
      email: email, // for Cognito, Username is email!
      authenticationCode: "",
    },

    validationRules: {
      authenticationCode: (value: string) =>
        /^[0-9][0-9][0-9][0-9][0-9][0-9]$/.test(value),
    },
  });

  const handleEmailConfirmSubmit = async (values: {
    email?: string;
    authenticationCode: string;
  }) => {
    const { email, authenticationCode } = values;
    const response = await dispatch(
      emailConfirm({ email, authenticationCode })
    );
    if (response.meta.requestStatus === "fulfilled") {
      navigate(`/auth/signIn`);
    } else {
    }
  };
  return (
    <Box sx={{ maxWidth: "500px", width: "100%" }}>
      <Paper p="md" shadow="xl" sx={{ paddingBottom: "0" }}>
        <form
          onSubmit={form.onSubmit((values) => handleEmailConfirmSubmit(values))}
        >
          <Paper p="sm">
            <TextInput
              label="Email"
              required
              disabled
              placeholder="exampleuser@example.com"
              value={form.values.email}
              error={form.errors.email && "Please specify valid email"}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
            />
          </Paper>

          <Paper p="sm">
            <TextInput
              label="Authentication Code"
              required
              //placeholder="exampleuser@example.com"
              value={form.values.authenticationCode}
              error={
                form.errors.authenticationCode &&
                "Please specify valid authentication code"
              }
              onChange={(event) =>
                form.setFieldValue(
                  "authenticationCode",
                  event.currentTarget.value
                )
              }
            />
          </Paper>

          <Paper p="sm">
            <Button size="lg" sx={{ minWidth: "100%" }} type="submit">
              Confirm Sign Up
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
            //onClick={() => handleGoogleSignIn()}
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
