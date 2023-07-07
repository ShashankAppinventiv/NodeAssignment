let arr=require("../model/data")
module.exports={
    update:(req,res)=>{
        let id=Number(req.params.id);
        let data=req.body;
        arr.forEach((Element)=>{
            if(Element.id==id)
            {
                let temp=Object.values(data)[0]
                for(let prop in temp){
                    Element[prop]=temp[prop]
                }
            }
        })
        res.send("User after updation \n"+arr)
    }
}