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
exports.followerController = void 0;
const databse_1 = __importDefault(require("../providers/database/databse"));
const ffModel_1 = __importDefault(require("../models/ffModel"));
const sequelize_1 = require("sequelize");
const followerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    databse_1.default.authenticate();
    if (req.body == undefined) {
        res.send("Please enter the valid data");
    }
    else {
        let data = {};
        try {
            databse_1.default.sync();
            if (!(yield isExistUser(req))) {
                data = yield ffModel_1.default.create({
                    sender: req.body.sender,
                    receiver: req.body.receiver
                });
            }
            else {
                res.send("You are already following this person");
            }
            res.send("You are following this person");
        }
        catch (err) {
            res.send("error aa rha hai");
        }
    }
    res.end();
});
exports.followerController = followerController;
const isExistUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let data;
    try {
        data = yield ffModel_1.default.findAll({
            where: {
                [sequelize_1.Op.and]: [
                    { sender: req.body.sender,
                        receiver: req.body.receiver }
                ]
            }
        });
    }
    catch (err) {
        console.log("Error aagye hai yha");
    }
    //console.log(JSON.stringify(data, null, 2))
    if (Object.keys(data).length > 0) {
        return true;
    }
    return false;
});
