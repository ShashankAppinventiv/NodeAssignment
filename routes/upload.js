const express=require("express")
const route=express.Router();

//controller

const uploadController=require('../controller/uploadController')

route.post("/",uploadController.upload,uploadController.caller)

module.exports=route;