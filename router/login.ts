import express from 'express';

const router = express.Router();

//importing controller
import {login} from '../controller/loginController'


// Fetch all users
router.post('/', login)

export default router;
