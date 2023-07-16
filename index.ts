import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
//Routers
import loginRouter from './src/router/auth/loginRouter'
import SignupRouter from './src/router/auth/signUp'
import follow from './src/router/activity/follow'
import unfollow from './src/router/activity/unFollow'
import search from './src/router/search'

const app=express();
const port=process.env.PORT

app.use(express.json())

//Routes for Authentication 
app.use('/auth',loginRouter)
app.use('/auth',SignupRouter)
//Routes for user activites like follow and following
app.use('/user',follow);
app.use('/user',unfollow);
//searching the user by name
app.use('/user',search);


app.listen(port,()=>{
    
        console.log("Listening at port 3000")
})