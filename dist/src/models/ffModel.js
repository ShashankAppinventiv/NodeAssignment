"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const databse_1 = __importDefault(require("../providers/database/databse"));
const user_1 = require("./user");
const list_ff = databse_1.default.define('list', {
    sender: {
        type: sequelize_typescript_1.DataType.INTEGER,
    },
    receiver: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
    // userId:{
    //     type:DataType.INTEGER,
    //     references:{
    //         model:loginSchema,
    //         key :'id'
    //     }
    // }
}, {});
list_ff.belongsTo(user_1.loginSchema);
exports.default = list_ff;
