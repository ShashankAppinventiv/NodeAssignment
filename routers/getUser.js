const express=require("express")
const route=express.Router()
const arr=require("../model/data")
//controller
const addUser=require("../controller/getUserController")

route.get('/:id',addUser.getUserById)
route.get('/',addUser.allUser)
module.exports=route
