import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
dotenv.config();

const sequelize=new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    models: [__dirname + '/models']
})

sequelize.authenticate().then(()=>{
    console.log("Database Connected Successfully")
}).catch(()=>{
    console.log("Databse Connection error")
})

export default sequelize;