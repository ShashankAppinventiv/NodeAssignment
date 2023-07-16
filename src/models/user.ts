import { DataType } from 'sequelize-typescript'
import sequilize from '../providers/database/databse'

export const loginSchema=sequilize.define('user_details',{
    userName:{
        type:DataType.STRING
    },
    password:{
        type:DataType.STRING
    },
    email:{
        type:DataType.STRING
    },
    bio:{
        type:DataType.STRING
    },
    followerCount:{
        type:DataType.INTEGER
    },
    followingCount:{
        type:DataType.INTEGER
    },
},{

})
