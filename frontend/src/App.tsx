/*
 * @Author: Shen Shu
 * @Date: 2022-05-01 15:04:26
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-05 19:12:57
 * @FilePath: \react_ts\frontend\src\App.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import AuthRouter from "./pages/auth/AuthRouter";
import HomePage from "./pages/home/HomePage";
import Layout from "./AppLayout";
import ReduxCounter from "./pages/reduxCounter/ReduxCounter";
import { loadUser } from "./redux/auth/authSlice";
import { useAppDispatch } from "./redux/hooks";

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth/*" element={<AuthRouter />} />
        <Route path="/reduxCounter" element={<ReduxCounter />} />
      </Routes>
    </Layout>
  );
}

export default App;
