/*
 * @Author: Shen Shu
 * @Date: 2022-05-01 23:19:52
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-06 13:12:12
 * @FilePath: \react_ts\frontend\amplify\backend\function\shushencaPostConfirmation\src\custom.js
 * @Description: 需要去lambda Configuration => Environment variables => 添加 UserInfo_Table_Name 去dynamodb找你table的全称
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  let date = new Date();
  console.log("event", event);
  if (
    event.request.userAttributes.sub &&
    event.triggerSource !== "PostConfirmation_ConfirmForgotPassword"
  ) {
    let params = {
      Item: {
        __typename: { S: "UserInfo" },
        id: { S: event.userName },
        username: { S: event.userName },
        name: { S: event.request.userAttributes.name },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName: process.env.UserInfo_Table_Name,
    };

    try {
      await ddb.putItem(params).promise();
      console.log("添加到DynamoDB 成功！");
    } catch (error) {
      console.log(error);
    }
  }
  return event;
};
