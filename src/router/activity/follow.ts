import express  from "express";

//Controller
import {followerController} from '../../controller/followFollowing'

const router=express.Router();


router.post('/follow',followerController)


export default router;