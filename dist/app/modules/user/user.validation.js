"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidationSchema = void 0;
const zod_1 = require("zod");
const UserFullNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1),
    lastName: zod_1.z.string().min(1),
});
const OrderValidationSchema = zod_1.z.object({
    productName: zod_1.z.string().min(1),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
const AddressValidationSchema = zod_1.z.object({
    street: zod_1.z.string().min(1),
    city: zod_1.z.string().min(1),
    country: zod_1.z.string().min(1),
});
exports.UserValidationSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    userName: zod_1.z.string().min(1),
    password: zod_1.z.string().min(1).max(20),
    fullName: UserFullNameValidationSchema,
    age: zod_1.z.number(),
    email: zod_1.z.string().email(),
    isActive: zod_1.z.boolean(),
    hobbies: zod_1.z.array(zod_1.z.string()),
    address: AddressValidationSchema,
    orders: zod_1.z.array(OrderValidationSchema).optional(),
});
exports.default = exports.UserValidationSchema;
