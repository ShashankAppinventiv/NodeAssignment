import { User } from '../model/user';

import sequelize from '../database/database';
import { Request , Response} from 'express';

async function createTable(req:Request) {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Use { force: true } to drop the table if it already exists
    await User.create({
      name: req.body.name,
      email: req.body.email
    });
    console.log('Table created successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export const login=async (req:Request, res:Response) => {
    try {
      if(req.body!=null){
      createTable(req);}
      res.send("Login Successfully")
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  // module.exports=login;