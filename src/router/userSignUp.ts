import express from "express";

const router=express.Router();

//middleware
import {validateUser} from '../middleware/JoiValidation'

//controller
import {userController} from '../controllers/UserController'

router.post('/signup',validateUser,userController);

export default router;