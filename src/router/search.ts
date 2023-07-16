import express  from "express";

//Controller
import {search} from '../controller/searchController'

const router=express.Router();


router.post('/search',search)


export default router;