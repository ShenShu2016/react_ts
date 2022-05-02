/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInfoInput = {
  id?: string | null,
  email?: string | null,
  userName?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserInfoConditionInput = {
  email?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserInfoConditionInput | null > | null,
  or?: Array< ModelUserInfoConditionInput | null > | null,
  not?: ModelUserInfoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserInfo = {
  __typename: "UserInfo",
  id: string,
  email?: string | null,
  userName?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateUserInfoInput = {
  id: string,
  email?: string | null,
  userName?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInfoInput = {
  id: string,
};

export type ModelUserInfoFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserInfoFilterInput | null > | null,
  or?: Array< ModelUserInfoFilterInput | null > | null,
  not?: ModelUserInfoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserInfoConnection = {
  __typename: "ModelUserInfoConnection",
  items:  Array<UserInfo | null >,
  nextToken?: string | null,
};

export type CreateUserInfoMutationVariables = {
  input: CreateUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type CreateUserInfoMutation = {
  createUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    email?: string | null,
    userName?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateUserInfoMutationVariables = {
  input: UpdateUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type UpdateUserInfoMutation = {
  updateUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    email?: string | null,
    userName?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteUserInfoMutationVariables = {
  input: DeleteUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type DeleteUserInfoMutation = {
  deleteUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    email?: string | null,
    userName?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetUserInfoQueryVariables = {
  id: string,
};

export type GetUserInfoQuery = {
  getUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    email?: string | null,
    userName?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListUserInfosQueryVariables = {
  filter?: ModelUserInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserInfosQuery = {
  listUserInfos?:  {
    __typename: "ModelUserInfoConnection",
    items:  Array< {
      __typename: "UserInfo",
      id: string,
      email?: string | null,
      userName?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};
