import express from "express";

const router=express.Router();

//middleware
import {sessionCheck} from '../middleware/session'

//controller
import {postController} from '../controllers/postController'

router.post('/post',sessionCheck,postController);

export default router;