const express=require("express")
const route=express.Router()

let arr=require("../model/data")

//controller

//const deleteUser=require("../controller/updateUserController")

route.delete('/:id',(req,res)=>{
    let id=Number(req.params.id);
    let data=req.body;
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==id)
        {
            arr.splice(i,1);
        }
    }
    res.status(200).send("User Deleted")
})
module.exports=route
