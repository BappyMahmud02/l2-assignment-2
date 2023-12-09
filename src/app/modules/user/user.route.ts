import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);

router.get('/', UserControllers.getAllUser);

router.get('/:userId', UserControllers.getSingleUser);

router.put('/:userId', UserControllers.getUpdateUser)

router.delete('/:userId', UserControllers.getDeleteUser)

router.put('/:userId/orders', UserControllers.createdOrderFromUser)

router.get('/:userId/orders', UserControllers.retriveAllOrderFromUser)

router.get('/:userId/orders/total-price', UserControllers.totalPriceAllOrderFromUser)

export const UserRoute = router;
