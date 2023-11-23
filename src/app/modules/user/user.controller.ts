import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const {Users : usersData} = req.body;
    const result = await UserServices.createUserIntoDB(usersData);

    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: err,
      });
  }
};

const getAllUser = async(req: Request, res: Response)=> {
    try{
        const result = await UserServices.getAllUserFromDB()
        res.status(200).json({
            success: true,
            message: 'user are Retrieve successfully',
            data: result,
          });
    }catch(err){
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: err
        })
    }
}

const getSingleUser = async(req: Request, res: Response)=> {
    try{
        const {userId} = req.params
        const result = await UserServices.getSingleUserFromDB(userId);
        res.status(200).json({
            success: true,
            message: 'user is Retrieve successfully',
            data: result
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: 'something went wrong ',
            error: err
        })
    }
}
// update
const getUpdateUser = async(req: Request, res: Response)=> {
    try{
        const {userId} = req.body
        const result = await UserServices.updateSingleUserFromDB(userId);
        res.status(200).json({
            success: true,
            message: 'user is updates successfully',
            data: result
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: 'something went wrong ',
            error: err
        })
    }
}

export const UserControllers = {
    createUser,
    getAllUser,
    getSingleUser,
    getUpdateUser
}