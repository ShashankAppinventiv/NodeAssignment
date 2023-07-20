import express from "express";

const router=express.Router();


//controller
import {loginController} from '../controllers/loginController'

router.post('/signin',loginController);

export default router;