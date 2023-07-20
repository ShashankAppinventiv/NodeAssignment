import express from 'express';
//database
import {db} from './src/provider/database'

// Create an Express app
const app = express();
app.use(express.json())
//Router
import loginRouter from './src/router/login'
import userRouter from './src/router/userSignUp'
import followFolloing from './src/router/ffRoute'
import post from './src/router/postrout'
import action from './src/router/action'
import session from './src/router/session'

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

app.use('/auth',loginRouter)
app.use('/auth',userRouter);
app.use('/activity',followFolloing);
app.use('/activity',post);
app.use('/activity',action)
app.use('/session',session)
// Start the server
app.listen(3000, () => {
    db();
  console.log('Server started on port 3000');
});
