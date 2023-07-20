import express from "express";

const router=express.Router();

//controller
import {ffController} from '../controllers/followController'

router.post('/follow',ffController);

export default router;