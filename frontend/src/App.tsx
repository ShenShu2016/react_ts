/*
 * @Author: Shen Shu
 * @Date: 2022-05-01 15:04:26
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-05 23:23:47
 * @FilePath: \react_ts\frontend\src\App.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import { Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

import AuthRouter from "./pages/auth/AuthRouter";
import HomePage from "./pages/home/HomePage";
import Layout from "./AppLayout";
import ReduxCounter from "./pages/reduxCounter/ReduxCounter";
import { loadUser } from "./redux/auth/authSlice";

const ProtectedRoute = ({
  isAllowed,
  redirectPath = "/",
  children,
}: {
  isAllowed: boolean | null;
  redirectPath: string;
  children: JSX.Element;
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth/*" element={<AuthRouter />} />
        <Route
          path="/reduxCounter"
          element={
            <ProtectedRoute redirectPath="/auth/signIn" isAllowed={isAuth}>
              <ReduxCounter />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
