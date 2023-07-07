const express=require("express")
const route=express.Router()

let arr=require("../model/data")

//controller

//const deleteUser=require("../controller/updateUserController")

route.delete('/:id',(req,res)=>{
    let id=Number(req.params.id);
    let data=req.body;
    console.log
    arr.forEach((Element)=>{
        if(Element.id==id)
        {
            console.log(Element+" "+data[id])
        }
    })
})
module.exports=route
