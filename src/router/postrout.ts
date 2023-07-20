import express from "express";

const router=express.Router();

//controller
import {postController} from '../controllers/postController'

router.post('/post',postController);

export default router;