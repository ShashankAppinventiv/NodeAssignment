let arr=require('../model/data')

exports.addData=(req,res)=>{
    let user=req.body;
    Object.values(user).forEach((Element)=>{
            arr.push(Element)
    })
    res.send(arr)
}