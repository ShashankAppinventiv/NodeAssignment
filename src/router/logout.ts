import express from "express";

const router=express.Router();


//controller
import {logoutController} from '../controllers/logoutController'

/** 
 * @swagger 
 * /auth/logout:
 *   patch: 
 *     description: Allow user to logout
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 
router.patch('/logout',logoutController);

export default router;