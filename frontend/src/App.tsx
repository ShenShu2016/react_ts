/*
 * @Author: Shen Shu
 * @Date: 2022-05-01 15:04:26
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-01 16:35:56
 * @FilePath: \react_ts\frontend\src\App.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import Layout from "./Layout";
import React from "react";
import ReduxCounter from "./pages/reduxCounter/ReduxCounter";

function App(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reduxCounter" element={<ReduxCounter />} />
      </Routes>
    </Layout>
  );
}

export default App;
