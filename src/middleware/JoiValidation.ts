import {Request,Response} from "express";
import Joi from "joi";

//Fucntion for user validation
export const validateUser=(req:Request,res:Response,next: () => void)=>{
    
    const validateAddress=Joi.object({
        city:Joi.string().required(),
        state:Joi.string().required(),
        country:Joi.string().required()
      });
      
    const userSchema=Joi.object({
    name:Joi.string().required(),
    email:Joi.string().regex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    password:Joi.string().min(8).required(),
    isPrivateAccount:Joi.boolean(),
    address:validateAddress
  });
    const result=userSchema.validate(req.body)
    if(result.error)
    {
        res.status(400).send("Enter the valid details");
    }
    else
    {
        next();
    }
}

export const loginCridentials=(req:Request,res:Response,next:()=>void)=>{
      const isValid=Joi.object({
        name:Joi.string().required(),
        password:Joi.string().min(8).required()
      })
      let result=isValid.validate(req.body)
      result.error?res.status(400).send(result):next();
}
