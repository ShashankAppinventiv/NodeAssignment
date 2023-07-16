import {Request,Response} from 'express'
import  sequelize  from '../providers/database/databse'
import {loginSchema} from '../models/user'
import {Op} from 'sequelize'
export const loginController=async (req:Request,res:Response)=>{
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
            [Op.and]: [
                { userName: req.body.name },
                { password: req.body.Password }
              ]
        }}
    )
    if(Object.keys(data).length>0){
        res.send("Login Successfully")
    }
    else
    {
        res.send("User doesn't exist")
    }
}