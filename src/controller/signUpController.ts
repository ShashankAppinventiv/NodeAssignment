import {Request,Response} from 'express'
import  sequelize  from '../providers/database/databse'
import {loginSchema} from '../models/user'
import { Op } from 'sequelize'
export const signUpController=async (req:Request,res:Response)=>{
    try{
        sequelize.authenticate();
        if(req.body==undefined)
        {            
            res.send("Enter some details")
        }else if(await isExistUser(req)){
            res.send("You are already SignUp")
        }
        else {
            signUp(req,res);
        }

    }catch(err)
    {
        res.send("Internal Server error "+500)
    }
}
const isExistUser=async (req:Request)=>{
    sequelize.sync();
    let data:any
    try{
        data =await loginSchema.findAll({
        where:{
                [Op.and]: [
                  { userName: req.body.name },
                  { password: req.body.Password }
                ]      
            }
    })
    }catch(err){
        console.log("Error aagye hai yha")
    }
    console.log(JSON.stringify(data, null, 2))
    if(Object.keys(data).length>0){
        return true
    }
    return false
}

const signUp=async (req:Request,res:Response)=>{
    sequelize.sync();
    const data= await loginSchema.create(
        {
            userName:req.body.name,
            password:req.body.Password,
            email:req.body.email,
            bio:req.body.Bio
        }
    )
    res.send("Register Successfully")
}