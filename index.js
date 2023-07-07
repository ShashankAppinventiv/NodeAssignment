const express=require("express")

const app=express();

//port

const port=3000


//routers

let userAdd=require("./routers/userAdd")
let userGet=require("./routers/getUser")
let userUpdate=require("./routers/updateUser")
let userDelete=require("./routers/deleteUse")
//router calling

app.use(express.json())
app.use('/add-user',userAdd)
app.use('/get-user',userGet)
app.use("/update-user",userUpdate)
app.use("/delete-user",userDelete)


app.listen(port,(error)=>{
    if(!error){
        console.log(`Listening in port ${port}`)
    }
    else
    {
        console.log("Error")
    }
})