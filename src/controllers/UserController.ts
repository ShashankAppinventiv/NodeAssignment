import { User } from "../model/user";
import {Request,Response} from "express";

export const userController=async (req:Request,res:Response)=>{
  const newUser=req.body;
  
  //query for check that user already exist or not
  let user = await User.findOne({
    name:req.body.name,
    password:req.body.password
  })
  if(user==undefined)
  {
    //new user created
    User.create(newUser).then((savedUser) => {
      res.status(201).send("User Created")
    }).catch((error) => {
      res.status(400).send(error)
    });
  }else{
    res.send("already Registered go back to login")
  }
}