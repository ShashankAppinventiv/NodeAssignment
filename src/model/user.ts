import { Table, Column, Model, DataType } from 'sequelize-typescript';
import sequelize from '../database/database'



export const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: DataType.STRING,
  },
  email: {
    type: DataType.STRING
  }
}, {
  // Other model options go here
  });

  
// class User extends Model {}

// User.init({
//   // Model attributes are defined here
//   name: {
//     type: DataType.STRING,
//     // allowNull: false
//   },
//   email: {
//     type: DataType.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
//   sequelize, // We need to pass the connection instance
//   modelName: 'User' // We need to choose the model name
// });

// export const UserModel=User
