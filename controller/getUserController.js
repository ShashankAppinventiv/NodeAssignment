let arr=require('../model/data')

module.exports={
    getUserById:(req,res)=>{
        let id=Number(req.params.id);
        let arr2=[];
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i].id==id)
            {
                arr2.push(arr[i])
            }
        }
        res.send(arr2)
        },

    allUser:(req,res)=>{
        res.send(arr)
}
}