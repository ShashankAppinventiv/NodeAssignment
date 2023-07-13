import express from 'express'


//router
import login from './router/login'
const app = express();

// Adding routes here
app.use('/users',login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
