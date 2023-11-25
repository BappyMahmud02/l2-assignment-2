"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/', user_controller_1.UserControllers.createUser);
router.get('/', user_controller_1.UserControllers.getAllUser);
router.get('/:userId', user_controller_1.UserControllers.getSingleUser);
router.put('/:userId', user_controller_1.UserControllers.getUpdateUser);
router.delete('/:userId', user_controller_1.UserControllers.getDeleteUser);
router.put('/:userId/orders', user_controller_1.UserControllers.createdOrderFromUser);
router.get('/:userId/orders', user_controller_1.UserControllers.retriveAllOrderFromUser);
router.get('/:userId/orders/total-price', user_controller_1.UserControllers.totalPriceAllOrderFromUser);
exports.UserRoute = router;
