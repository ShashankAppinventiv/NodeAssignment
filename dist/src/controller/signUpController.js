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
exports.signUpController = void 0;
const databse_1 = __importDefault(require("../providers/database/databse"));
const user_1 = require("../models/user");
const sequelize_1 = require("sequelize");
const signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        databse_1.default.authenticate();
        if (req.body == undefined) {
            res.send("Enter some details");
        }
        else if (yield isExistUser(req)) {
            res.send("You are already SignUp");
        }
        else {
            signUp(req, res);
        }
    }
    catch (err) {
        res.send("Internal Server error " + 500);
    }
});
exports.signUpController = signUpController;
const isExistUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    databse_1.default.sync();
    let data;
    try {
        data = yield user_1.loginSchema.findAll({
            where: {
                [sequelize_1.Op.and]: [
                    { userName: req.body.name },
                    { password: req.body.Password }
                ]
            }
        });
    }
    catch (err) {
        console.log("Error aagye hai yha");
    }
    console.log(JSON.stringify(data, null, 2));
    if (Object.keys(data).length > 0) {
        return true;
    }
    return false;
});
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    databse_1.default.sync();
    const data = yield user_1.loginSchema.create({
        userName: req.body.name,
        password: req.body.Password,
        email: req.body.email,
        bio: req.body.Bio
    });
    res.send("Register Successfully");
});
