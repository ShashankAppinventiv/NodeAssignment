const express=require("express")
const fs=require("fs")
const route=express.Router();
let data;
async function merge(req,res){
    await readFile().then().catch((error)=>{
        console.log(error);
    });
    writeData();
    console.log(data)
}
const writeData=()=>{
    console.log("ok")
}
const readFile=()=>{
    let data="";
    return new Promise((resolve,reject)=>{
        fs.readFile('./uploads/user_file.txt',"utf8",(err,by)=>{
            if(err)
            {
                reject("File Not Found")
            }
         data=data+by;
     })
     resolve();
    })
}

route.post("/",(req,res)=>{
            merge(req,res)
    })

module.exports=route;