import { Schema, model,  } from 'mongoose';
import { Adress, Orders, IUser, UserFullName } from './user/user.schema';

const OrderSchema = new Schema<Orders>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const UserFullNameSchema = new Schema<UserFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
const AdressSchema = new Schema<Adress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const userSchema = new Schema<IUser>({
  userId: { type: Number },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: UserFullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: [{ type: String, required: true }],
  adress: { AdressSchema, required: true },
  orders: { type: [OrderSchema], required: true },
});

const User = model<IUser>('User', userSchema);

