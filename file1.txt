const express=require("express")
const app=express()

//routes

const uploadRoute=require("./routes/upload")
const mergeRouter=require("./routes/mergs")


app.use(express.json())


app.use("/upload",uploadRoute)
app.use("/merge",mergeRouter)

let server=app.listen(3000,(error)=>{
    if(!error){
        console.log(`Server is listening in port ${server.address().port}`)
    }else{
        console.log(`Server Error ${server.address.port() } not Found`)
    }
})