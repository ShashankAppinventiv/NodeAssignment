import { User } from "../model/user";
import {Request,Response} from "express";

export const userController=(req:Request,res:Response)=>{
  const newUser=req.body;
  User.create(newUser)
  .then((savedUser) => {
    console.log('User saved:', savedUser);
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });
}