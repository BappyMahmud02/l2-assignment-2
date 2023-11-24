import { Schema, model } from 'mongoose';
import { Adress, Orders, IUser, UserFullName } from './user/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';

const UserFullNameSchema = new Schema<UserFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const OrderSchema = new Schema<Orders>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const AdressSchema = new Schema<Adress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: UserFullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true,unique: true },
  isActive: { type: Boolean, required: true },
  hobbies: [String],
  address: { type: AdressSchema, required: true },
  orders: [OrderSchema],
});


userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password= ''
  next();
});

export const UserModel = model<IUser>('User', userSchema);
