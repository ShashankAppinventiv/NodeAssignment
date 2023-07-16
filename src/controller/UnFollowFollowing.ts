import { Request, Response } from "express";
import sequelize from '../providers/database/databse'
import follow from '../models/ffModel'
import QueryTypes from "sequelize";
import {loginSchema} from '../models/user';
import {  Op } from "sequelize";
export const unFollowerController=async (req:Request,res:Response)=>{
        sequelize.authenticate()
        if(req.body==undefined){
            res.send("Please enter the valid data")
        }else{
            let data:object={};
            try{
               sequelize.sync();
               
               await follow.destroy({
                where:{    
                    [Op.and]: [
                        { sender:req.body.sender },
                        { receiver:req.body.receiver}]
                    }
                })
                res.send("You are unfollow this person")
            }catch(err)
            {
                res.send("error aa rha hai")   
            }
        }
        res.end()
}
