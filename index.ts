import express from 'express';
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
//database
import {db} from './src/provider/database'

// Create an Express app
const app = express();
app.use(express.json())
//Router
import loginRouter from './src/router/login'
import userRouter from './src/router/userSignUp'
import post from './src/router/postrout'
import logout from './src/router/logout'
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 


const swaggerOptions={
  swaggerDefinition:{
      info:{
          title:'insta API',
          version: '1.0.0'
      }
  },
  apis:['./src/router/login.ts','./src/router/logout.ts']
}

const swaggerDoc=swaggerJsDoc(swaggerOptions)
/** 
 * @swagger 
 * /hello:
 *   get: 
 *     description: Get all Employee by Email
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 
app.get('/hello',(req,res)=>{
  res.send("Hello")
})
app.use('/api-doc',swaggerUI.serve,swaggerUI.setup(swaggerDoc))
app.use('/auth',loginRouter)

app.use('/auth',userRouter);
app.use('/activity',post);
app.use('/auth',logout)
// Start the server
app.listen(3000, () => {
    db();
  console.log('Server started on port 3000');
});
