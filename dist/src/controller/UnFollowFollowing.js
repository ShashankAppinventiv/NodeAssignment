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
exports.unFollowerController = void 0;
const databse_1 = __importDefault(require("../providers/database/databse"));
const ffModel_1 = __importDefault(require("../models/ffModel"));
const sequelize_1 = require("sequelize");
const unFollowerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    databse_1.default.authenticate();
    if (req.body == undefined) {
        res.send("Please enter the valid data");
    }
    else {
        let data = {};
        try {
            databse_1.default.sync();
            yield ffModel_1.default.destroy({
                where: {
                    [sequelize_1.Op.and]: [
                        { sender: req.body.sender },
                        { receiver: req.body.receiver }
                    ]
                }
            });
            res.send("You are unfollow this person");
        }
        catch (err) {
            res.send("error aa rha hai");
        }
    }
    res.end();
});
exports.unFollowerController = unFollowerController;
