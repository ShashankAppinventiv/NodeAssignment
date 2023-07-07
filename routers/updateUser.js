const express=require("express")
const route=express.Router()
//controller

const updateFun=require("../controller/updateUserController")

route.put('/:id',updateFun.update)
module.exports=route
