import { Request,Response } from "express"
import {sessionModel} from '../model/session'
import jwt from 'jsonwebtoken'
import redisclient from '../provider/redis'
import dotenv from 'dotenv'
dotenv.config();

export const logoutController=async (req:Request,res:Response)=>{
    //secretKey
    let secretKey=""+process.env.SECRET_KEY
    //JWT Token
    let token=""+req.headers.authorization
    let decode:any;
      try{ 
          decode= jwt.verify(token,secretKey)
      }catch(err)
      {
          res.send("token Expire or not valid")
      }
      try{
          let data=await sessionModel.updateOne({
              userId:decode._id,
              isActive:true,
          },{
            $set:{isActive:false}
            })
            await redisclient.del(decode?._id);
            res.send("logout successfully")
        }catch(err){
            res.send("error")
        }
}