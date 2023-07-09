const express=require("express")
const app=express.Router()


app.post('/',(req,res,next)=>{
    const data=req.body;
    let sum=1;
    Object.values(data).forEach((element)=>{
        sum=element*sum;
    })
    res.send("Sum is = "+sum)
    res.end();
})

module.exports=app