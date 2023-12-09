// import { Schema, model, connect } from 'mongoose';

import { Model } from "mongoose";

export type Adress = {
  street: string;
  city: string;
  country: string;
};

export type Orders = {
  productName: string;
  price: number;
  quantity: number;
};
export type UserFullName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  userId: number;
  userName: string;
  password: string;
  fullName: UserFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Adress;
  orders?: Orders[];
};

// creating method for existing user
export type UserMethods = {
  // eslint-disable-next-line no-unused-vars
  isUserExist(userId: number): Promise<IUser | null>;
};

export type UserModel = Model<IUser, Record<string, never>, UserMethods>;