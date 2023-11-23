import { Schema, model, connect } from 'mongoose';

export type Adress = {
    street : string,
    city: string,
    country: string,
}

export type Orders = {
    productName: string,
    price: number,
    quantity:number,
}
export type UserFullName = {
    firstName: string,
    lastName: string
}

export type IUser = {
    userId : number;
    userName: string;
    password: string;
    fullName:UserFullName,
    age: number;
    email: string;
    isActive: boolean;
    hobbies: ['playing','writing','singing'],
    adress: Adress ,
    orders?: [Orders],
  }