import express from 'express'

const router=express.Router();

//controller
import {signUpController} from '../../controller/signUpController'

router.post('/signup',signUpController)


export default router;