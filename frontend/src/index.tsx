/*
 * @Author: Shen Shu
 * @Date: 2022-05-01 15:04:26
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-06 00:03:14
 * @FilePath: \react_ts\frontend\src\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import "./index.css";

import Amplify from "aws-amplify";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import config from "./aws-exports";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

// const isLocalhost = !!(window.location.hostname === "localhost");
// const [devRedirectSignIn, localRedirectSignIn,productionRedirectSignIn] =
//   config.oauth.redirectSignIn.split(",");
// console.log(config.oauth.redirectSignIn.split(","));
// const [devRedirectSignOut, localRedirectSignOut,productionRedirectSignOut] =
//   config.oauth.redirectSignOut.split(",");
// console.log(config.oauth.redirectSignOut.split(","));

function getUri() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3000/";
  } else if (window.location.hostname === "shushen.ca") {
    return "https://shushen.ca/";
  } else if (window.location.hostname === "dev.shushen.ca") {
    return "https://dev.shushen.ca/";
  }
}

const updatedAwsConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: getUri(),
    redirectSignOut: getUri(),
  },
};

Amplify.configure(updatedAwsConfig);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
