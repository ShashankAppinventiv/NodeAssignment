"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const databse_1 = __importDefault(require("../providers/database/databse"));
exports.register = databse_1.default.define('login_user', {
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    password: {
        type: sequelize_typescript_1.DataType.STRING
    }
}, {});
