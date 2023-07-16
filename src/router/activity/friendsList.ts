import express  from "express";

//Controller
import {friendList} from '../../controller/friendList'

const router=express.Router();


router.post('/search',friendList)


export default router;