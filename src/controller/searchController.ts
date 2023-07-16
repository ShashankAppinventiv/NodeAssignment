import {Request,Response} from 'express'
import  sequelize  from '../providers/database/databse'
import {loginSchema} from '../models/user'
export const search=async (req:Request,res:Response)=>{
    try{
        login(req,res);
    }catch(err)
    {
        res.send("Internal Server error "+500)
    }
}

const login=async (req:Request,res:Response)=>{
    sequelize.authenticate();
    const data=await loginSchema.findAll(
        {where:{ 
            userName: req.body.name 
        }}
    )
    if(Object.keys(data).length>0){
        res.send(data)
    }
    else
    {
        res.send("User doesn't exist")
    }
}