import { z } from 'zod';

const UserFullNameValidationSchema = z.object({
  firstName: z.string().min(1,{message: 'First name must be required'}),
  lastName: z.string().min(1, {message: 'Last name must be required'}),
});

const OrderValidationSchema = z.object({
  productName: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
});

const AddressValidationSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
});

export const UserValidationSchema = z.object({
  userId: z.number(),
  userName: z.string().min(1),
  password: z.string().min(1).max(20),
  fullName: UserFullNameValidationSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: AddressValidationSchema,
  orders: z.array(OrderValidationSchema).optional(),
});

export default UserValidationSchema ;