import express from "express";

const router=express.Router();

//middleware
import {loginCridentials} from '../middleware/JoiValidation'

//controller
import {loginController} from '../controllers/loginController'


/** 
 * @swagger 
 * /auth/signin:
 *   post: 
 *     description: Allow user to login
 *     parameters:
 *     - name: body
 *       description: name of the user
 *       required: true
 *       type: json 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 
router.post('/signin',loginCridentials,loginController)

export default router;