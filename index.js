const express=require("express")
//importing routes

const addRoute=require("./routers/addRoute")
const subRoute=require("./routers/subRoute")
const mulRoute=require("./routers/mulRoute")

const port=3000;

const app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Routes

app.use("/add",addRoute)
app.use("/subtract",subRoute)
app.use("/multiply",mulRoute)


app.listen(port,(error)=>{
    if(!error)
    {
        console.log(`listen in port ${port}`)
    }
    else{
        console.log("Server not responding")
    }
})