import express from 'express'

const router=express.Router();

//controller
import {loginController} from '../../controller/loginController'

router.post('/login',loginController)


export default router;