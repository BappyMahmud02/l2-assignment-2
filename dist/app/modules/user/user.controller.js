"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllers = void 0;
const user_service_1 = require("./user.service");
const user_validation_1 = __importDefault(require("./user.validation"));
const user_model_1 = require("../user.model");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Users: usersData } = req.body;
        // create a validation with zod-->>>>
        const zodParseData = user_validation_1.default.parse(usersData);
        const result = yield user_service_1.UserServices.createUserIntoDB(zodParseData);
        res.status(200).json({
            success: true,
            message: 'user created successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: err,
        });
    }
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserServices.getAllUserFromDB();
        res.status(200).json({
            success: true,
            message: 'user are Retrieve successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: err,
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.UserServices.getSingleUserFromDB(userId);
        res.status(200).json({
            success: true,
            message: 'user is Retrieve successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong ',
            error: err,
        });
    }
});
// update
const getUpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const result = yield user_service_1.UserServices.updateSingleUserFromDB(userId);
        res.status(200).json({
            success: true,
            message: 'user is updates successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong ',
            error: err,
        });
    }
});
// delete user
const getDeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const result = yield user_service_1.UserServices.deleteSingleUserFromDB(userId);
        res.status(200).json({
            success: true,
            message: 'user is deleted successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong ',
            error: err,
        });
    }
});
// order ----->>
const createdOrderFromUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { userId } = req.body;
        const result = yield user_service_1.UserServices.orderUserFromDB(userId);
        if (!result) {
            const newUser = new user_model_1.UserModel({
                userId,
                orders: [userId],
            });
            yield newUser.save();
            res.status(200).json({
                success: true,
                message: 'order is created successfully',
                data: null,
            });
        }
        else {
            (_a = result.orders) === null || _a === void 0 ? void 0 : _a.push(userId);
            yield result.save();
            res.json({ success: true, message: 'Order added to existing user.' });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong ',
            error: err,
        });
    }
});
// retrive all user from db
const retriveAllOrderFromUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const result = yield user_service_1.UserServices.retiriveAllUserFromDB(userId);
        if (!result) {
            res.status(200).json({
                success: false,
                message: 'User not found.',
            });
            return;
        }
        res.json({
            success: true,
            message: 'Order fetched successfully!',
            data: {
                orders: result.orders || [], // Return an empty array if orders array is not present
            },
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong ',
            error: err,
        });
    }
});
// order total price
const totalPriceAllOrderFromUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { userId } = req.body;
        const result = yield user_service_1.UserServices.retiriveAllUserFromDB(userId);
        if (!result) {
            res.status(404).json({
                success: false,
                message: 'User not found',
                error: {
                    code: 404,
                    description: 'User not found!',
                },
            });
            return;
        }
        const totalPrice = (_b = result.orders) === null || _b === void 0 ? void 0 : _b.reduce((sum, order) => sum + order.price * order.quantity, 0);
        res.json({
            success: true,
            message: 'Total price calculated successfully!',
            data: {
                totalPrice,
            },
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong ',
            error: err,
        });
    }
});
exports.UserControllers = {
    createUser,
    getAllUser,
    getSingleUser,
    getUpdateUser,
    getDeleteUser,
    createdOrderFromUser,
    retriveAllOrderFromUser,
    totalPriceAllOrderFromUser
};
