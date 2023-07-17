import { DataType } from "sequelize-typescript";
import sequelize from '../providers/database/databse'
import { loginSchema } from "./user";

const list_ff=sequelize.define('list',{
    sender:{
        type:DataType.INTEGER,
    },
    receiver:{
        type:DataType.INTEGER
    },
    // userId:{
    //     type:DataType.INTEGER,
    //     references:{
    //         model:loginSchema,
    //         key :'id'
    //     }
    // }
},{

})

list_ff.belongsTo(loginSchema)

export default list_ff;
