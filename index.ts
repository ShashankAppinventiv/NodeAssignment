import express from 'express'


//router
import login from './src/router/login'
import exp from 'constants';
const app = express();
app.use(express.json())
// Adding routes here
app.use('/users',login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
