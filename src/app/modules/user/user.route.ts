import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/user', UserControllers.createUser);
router.get('/', UserControllers.getAllUser);
router.get('/:userId', UserControllers.getSingleUser);
router.patch('/:userId', UserControllers.getUpdateUser)

export const UserRoute = router;
