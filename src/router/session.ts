import express from "express";

const router=express.Router();

//controller
import {sessionController} from '../controllers/sessionController'

router.post('',sessionController);

export default router;