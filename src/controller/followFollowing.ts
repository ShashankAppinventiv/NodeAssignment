import { Request, Response } from "express";
import sequelize from '../providers/database/databse'
import follow from '../models/ffModel'
import QueryTypes from "sequelize";
import {loginSchema} from '../models/user';
import {  Op } from "sequelize";
export const followerController=async (req:Request,res:Response)=>{
        sequelize.authenticate()
        if(req.body==undefined){
            res.send("Please enter the valid data")
        }else{
            let data:object={};
            try{
               sequelize.sync();
               if(!(await isExistUser(req))){
               data =await follow.create({
                    sender:req.body.sender,
                    receiver:req.body.receiver
                })
                let data2:any
                // try{
                //     loginSchema.findAll({
                //         attributes: [[sequelize.literal('JSON_OBJECT(\'id\', name, \'email\', followerCount)'), 'json_data']],
                //       })
                //         .then((results) => {
                //           // Access the JSON data
                //           const jsonData = results.map((result) => result.dataValues.json_data);
                      
                //           // Do something with the JSON data
                //           console.log(jsonData);
                //         })
                //         .catch((error) => {
                //           console.error('Error retrieving data:', error);
                //         });
                // }catch(err){
                //     console.log("Error aagye hai yha")
                // }
                // console.log(data);
                }else{
                    res.send("Ypu are already following this person")
                }
                res.send("You are following this person")
            }catch(err)
            {
                res.send("error aa rha hai")   
            }
        }
        res.end()
}

const isExistUser=async (req:Request)=>{
    let data:any
    try{
        data =await follow.findAll({
        where:{
                [Op.and]: [
                  { sender: req.body.sender,
                   receiver:req.body.receiver}
                ]      
            }
    })
    }catch(err){
        console.log("Error aagye hai yha")
    }
    //console.log(JSON.stringify(data, null, 2))
    if(Object.keys(data).length>0){
        return true
    }
    return false
}
