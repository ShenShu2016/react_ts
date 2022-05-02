/*
 * @Author: Shen Shu
 * @Date: 2022-05-02 12:18:47
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-02 17:20:51
 * @FilePath: \react_ts\frontend\src\pages\auth\AuthRouter.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import { Center, MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";

import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

export default function AuthRouter() {
  return (
    <MantineProvider
      theme={{
        primaryColor: "orange",
        white: "whitesmoke",
        black: "#111",
      }}
    >
      <Center sx={{ height: "100%", width: "100%" }}>
        <Routes>
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />

          {/* <Route exact path="/forgotPassword" element={<ForgetPassword />} />
      <Route exact path="/forgotUsername" />
      <Route exact path="/resendConfirmationCode" />
      <Route exact path="/resetPassword" element={<ResetPassword />} />
      <Route exact path="/emailConfirm/:username" element={<EmailConfirm />} /> */}
        </Routes>
      </Center>
    </MantineProvider>
  );
}
