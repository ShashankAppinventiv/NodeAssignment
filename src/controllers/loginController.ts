import { User } from "../model/user";
import {Request,Response} from "express";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();
export const loginController=(req:Request,res:Response)=>{
  const newUser=req.body;
  let token:string="sd";
  User.find({
    name:req.body.name,
    password:req.body.password
  })
  .then((savedUser) => {
            console.log('User saved:', savedUser);
            const secretKey:string= "s1h2a3";
            token=jwt.sign(JSON.stringify( savedUser),secretKey)
        // token=jwt.sign({shashank:"Shashank"},"s1h2a3")
        res.end(token)
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });
}