import { UserModel } from '../user.model';
import { IUser } from './user.interface';

const createUserIntoDB = async (user: IUser) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.findOne({ id });
  return result;
};
const updateSingleUserFromDB = async (id: number) => {
  const result = await UserModel.findOneAndUpdate({ id });
  return result;
};
const deleteSingleUserFromDB = async (id: number) => {
  const result = await UserModel.findOneAndDelete({ id });
  return result;
};
const orderUserFromDB = async (id: number) => {
  const result = await UserModel.findOne({ id });
  return result;
};
const retiriveAllUserFromDB = async (id: number) => {
  const result = await UserModel.findOne({ id });
  return result;
};
const totalPriceUserFromDB = async (id: number) => {
  const result = await UserModel.findOne({ id });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
  deleteSingleUserFromDB,
  orderUserFromDB,
  retiriveAllUserFromDB,
  totalPriceUserFromDB
};
