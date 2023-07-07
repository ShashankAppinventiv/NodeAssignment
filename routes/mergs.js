const express=require("express")
const route=express.Router();

//controller
const mergeColtroller=require('../controller/mergeController')

//request
route.post("/",mergeColtroller.postRequest)

module.exports=route;