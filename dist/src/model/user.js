"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const database_1 = __importDefault(require("../database/database"));
exports.User = database_1.default.define('User', {
    // Model attributes are defined here
    name: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    email: {
        type: sequelize_typescript_1.DataType.STRING
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
