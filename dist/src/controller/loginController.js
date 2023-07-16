"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const databse_1 = __importDefault(require("../providers/database/databse"));
const user_1 = require("../models/user");
const sequelize_1 = require("sequelize");
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        login(req, res);
    }
    catch (err) {
        res.send("Internal Server error " + 500);
    }
});
exports.loginController = loginController;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    databse_1.default.authenticate();
    const data = yield user_1.loginSchema.findAll({ where: {
            [sequelize_1.Op.and]: [
                { userName: req.body.name },
                { password: req.body.Password }
            ]
        } });
    if (Object.keys(data).length > 0) {
        res.send("Login Successfully");
    }
    else {
        res.send("User doesn't exist");
    }
});
