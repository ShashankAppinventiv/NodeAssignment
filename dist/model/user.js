"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const database_1 = __importDefault(require("../database/database"));
// export const User = sequelize.define('User', {
//   // Model attributes are defined here
//   name: {
//     type: DataType.STRING,
//   },
//   email: {
//     type: DataType.STRING
//   }
// }, {
//   // Other model options go here
//   });
class User extends sequelize_typescript_1.Model {
}
User.init({
    // Model attributes are defined here
    name: {
        type: sequelize_typescript_1.DataType.STRING,
        // allowNull: false
    },
    email: {
        type: sequelize_typescript_1.DataType.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    sequelize: database_1.default,
    modelName: 'User' // We need to choose the model name
});
database_1.default.authenticate();
database_1.default.sync();
exports.UserModel = User;
