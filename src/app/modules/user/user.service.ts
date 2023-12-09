import User from '../user.model';
import { IUser } from './user.interface';

const createUserIntoDB = async (user: IUser): Promise<IUser | null> => {
  const result = await User.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await User.findOne({ id });
  return result;
};
const updateSingleUserFromDB = async (
  id: number,
  updateData: IUser,
): Promise<IUser | null> => {
  const userID = id;
  const user = new User({ userId: id });
  const doesExist = await user.isUserExist(userID);
  if (!doesExist) {
    throw new Error('User does not exist!');
  } else {
    const result = await User.findOneAndUpdate({ userId: id }, updateData, {
      new: true,
      runValidators: true,
    })
      .select('-password')
      .select('-orders');
    return result;
  }
};
const deleteSingleUserFromDB = async (id: number): Promise<IUser | null> => {
  const user = new User({ userId: id });
  const userID = id;

  const doesExist = await user.isUserExist(userID);
  if (!doesExist) {
    throw new Error('User does not exist!');
  } else {
    const result = await User.findOneAndDelete({ userId: id });
    return result;
  }
};
const orderUserFromDB = async (id: number) => {
  const result = await User.findOne({ id });
  return result;
};
const retiriveAllUserFromDB = async (id: number) => {
  const result = await User.findOne({ id });
  return result;
};
const totalPriceUserFromDB = async (id: number) => {
  const userID = id;
  const user = new User({ userId: id });
  const doesExist = await user.isUserExist(userID);
  if (doesExist) {
    const result = await User.aggregate([
      { $match: { userId: id } },
      {
        $unwind: '$orders',
      },
      {
        $group: {
          _id: '$userId',
          totalPrice: {
            $sum: {
              $multiply: ['$orders.price', '$orders.quantity'],
            },
          },
        },
      },
      {
        $project: {
          totalPrice: { $round: ['$totalPrice', 2] },
        },
      },
    ]);
    if (result.length > 0) {
      const response = {
        success: true,
        message: 'Total price calculated successfully!',
        data: {
          totalPrice: result[0].totalPrice,
        },
      };
      return response;
    } else {
      const errorResponse = {
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      };
      return errorResponse;
    }
  }
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
  deleteSingleUserFromDB,
  orderUserFromDB,
  retiriveAllUserFromDB,
  totalPriceUserFromDB,
};
