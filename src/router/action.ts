import express from "express";

const router=express.Router();

//controller
import {actionController} from '../controllers/actionController'

router.post('/action',actionController);

export default router;