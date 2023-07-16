import express  from "express";

//Controller
import {unFollowerController} from '../../controller/UnFollowFollowing'

const router=express.Router();


router.post('/unfollow',unFollowerController)


export default router;