import { User } from "../model/user";
import {Request,Response} from "express";
import jwt from "jsonwebtoken"
import {sessionModel} from '../model/session'
import {redisClient} from '../provider/redis'
export const loginController=async(req:Request,res:Response,next:()=>void)=>{
  try{
    let user = await User.findOne({
      name:req.body.name,
      password:req.body.password
    })
    if(user==undefined)
    {
      res.status(400).send("User doen't Exist")
    }
    else{

        user={...JSON.parse(JSON.stringify(user))}
        let secretKey=""+process.env.SECRET_KEY
        req.headers.authorization = jwt.sign({_id:user?._id},secretKey,{expiresIn:'1h'});
        redisClient.set('${user?._id}','hello')
        
        //Session creation if not exist
        let data=await sessionModel.find({
          userId:user?._id,
          isActive:true,
        })
        if(!(data.length>0))
        {
          sessionModel.create(
            {
              userId:user?._id,
              isActive:true,
              loginAt:new Date()
            }
          )
        }
        res.send(req.headers.authorization)
      }
    }catch(e:any){
    res.send(e)
  }
  next()
}