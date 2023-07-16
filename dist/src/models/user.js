"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const databse_1 = __importDefault(require("../providers/database/databse"));
exports.loginSchema = databse_1.default.define('user_details', {
    userName: {
        type: sequelize_typescript_1.DataType.STRING
    },
    password: {
        type: sequelize_typescript_1.DataType.STRING
    },
    email: {
        type: sequelize_typescript_1.DataType.STRING
    },
    bio: {
        type: sequelize_typescript_1.DataType.STRING
    },
    followerCount: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
    followingCount: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
}, {});
