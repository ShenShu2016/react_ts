/*
 * @Author: Shen Shu
 * @Date: 2022-05-02 12:13:49
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-05 22:59:15
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
  Divider,
  Image,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { googleSignIn, signUp } from "../../redux/auth/authSlice";

import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { useForm } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const form = useForm({
    initialValues: {
      email: "", // for Cognito, Username is email!
      password: "",
      confirmPassword: "",
      name: "",
      termsOfService: false,
    },

    validationRules: {
      email: (value: string) => /^\S+@\S+$/.test(value),
      confirmPassword: (value: string, values) => value === values?.password,
    },
  });

  const handleGoogleSignIn = async () => {
    await dispatch(googleSignIn());
  };

  const handleSignUpSubmit = async (values: {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    termsOfService: boolean;
  }) => {
    console.log(values);
    const { password, email, name } = values;
    const response = await dispatch(signUp({ password, email, name }));
    console.log(response);
    if (response.meta.requestStatus === "fulfilled") {
      navigate(`/auth/emailConfirm/${email}`);
    } else {
    }
  };
  return (
    <Box sx={{ maxWidth: "500px", width: "100%" }}>
      <Paper p="md" shadow="xl">
        <form onSubmit={form.onSubmit((values) => handleSignUpSubmit(values))}>
          <Paper p="sm">
            <TextInput
              label="Username"
              required
              placeholder="exampleuser"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
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
              error={form.errors.confirmPassword && "Password not match"}
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
            onClick={() => handleGoogleSignIn()}
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

export default SignUpPage;
