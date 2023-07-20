"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const user_1 = require("../model/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const loginController = (req, res) => {
    const newUser = req.body;
    let token = "sd";
    user_1.User.find({
        name: req.body.name,
        password: req.body.password
    })
        .then((savedUser) => {
        console.log('User saved:', savedUser);
        const secretKey = "s1h2a3";
        token = jsonwebtoken_1.default.sign(JSON.stringify(savedUser), secretKey);
        // token=jwt.sign({shashank:"Shashank"},"s1h2a3")
        res.end(token);
    })
        .catch((error) => {
        console.error('Error saving user:', error);
    });
};
exports.loginController = loginController;
