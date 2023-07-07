let arr=require('../model/data')

let joi=require("joi")

const authSchema=joi.object({
    email: joi.string().required(),
    id:joi.number(),
    name:joi.required(),
    password:joi.required(),
    desination:joi.required()
})

exports.addData= (req,res)=>{
    let user=req.body;
    const result=authSchema.validate(user);
    if(result.error==undefined)
    {
        Object.values(user).forEach((Element)=>{
            arr.push(Element)
         })
        res.send(arr)
    }
    else
    {
        console.log("Please enter avalid expression")
    }    
    
}