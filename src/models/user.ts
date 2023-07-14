import { Model,DataTypes } from "sequelize";
import sequelize from '../providers/database/databse'
export const user=sequelize.define('user',{
    name:{
        type:DataTypes.STRING
    }
})