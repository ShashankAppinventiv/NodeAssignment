const express=require("express")
const route=express.Router()

//controller
const addUser=require("../controller/userAddController")

route.post('/',addUser.addData)

module.exports=route