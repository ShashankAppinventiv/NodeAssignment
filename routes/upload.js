const express=require("express")
const multer =require("multer");
const route=express.Router();
const upload=multer({dest:'uploads/'})
//multer
// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb){
//             cb(null,"uploads")
//         },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname+".txt")
//         }
//     })
// }).single("user_file");

route
    .post("/",upload.single("file"),
            (req,res)=>{
            res.send("working")
    })

    module.exports=route;