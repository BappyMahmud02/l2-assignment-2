import { Schema, model } from 'mongoose';
import {
  Adress,
  Orders,
  IUser,
  UserFullName,
  UserModel,

} from './user/user.interface';
import bcrypt from 'bcrypt';
import config from '../config';

const UserFullNameSchema = new Schema<UserFullName>({
  firstName: { type: String, required: [true, 'First name must be required'] },
  lastName: { type: String, required: [true, 'Last name must be required'] },
});

const OrderSchema = new Schema<Orders>({
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const AdressSchema = new Schema<Adress>({
  street: { type: String, required: [true, 'street must be required'] },
  city: { type: String, required: [true, 'city must be required'] },
  country: { type: String, required: [true, 'country must be required'] },
});

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    required: [true, 'User ID must be required'],
    unique: true,
  },
  userName: {
    type: String,
    required: [true, 'User name must be required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'User password must be required'],
  },
  fullName: { type: UserFullNameSchema, required: true },
  age: { type: Number, required: [true, 'User age must be required'] },
  email: { type: String, required: [true, 'User email must be required'] },
  isActive: { type: Boolean, default: true },
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
  doc.password = '';
  next();
});



// creating a custom method for existing user
userSchema.methods.isUserExist = async function (userId: number) {
  const existingUser = await User.findOne({ userId });
  return !!existingUser;
};

// Schema model for user
const User = model<IUser, UserModel>('User', userSchema);

export default User;