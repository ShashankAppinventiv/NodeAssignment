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
const user_1 = require("../model/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const session_1 = require("../model/session");
const redis_1 = require("../provider/redis");
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield user_1.User.findOne({
            name: req.body.name,
            password: req.body.password
        });
        if (user == undefined) {
            res.status(400).send("User doen't Exist");
        }
        else {
            user = Object.assign({}, JSON.parse(JSON.stringify(user)));
            let secretKey = "" + process.env.SECRET_KEY;
            req.headers.authorization = jsonwebtoken_1.default.sign({ _id: user === null || user === void 0 ? void 0 : user._id }, secretKey, { expiresIn: '1h' });
            redis_1.redisClient.set('${user?._id}', 'hello');
            //Session creation if not exist
            let data = yield session_1.sessionModel.find({
                userId: user === null || user === void 0 ? void 0 : user._id,
                isActive: true,
            });
            if (!(data.length > 0)) {
                session_1.sessionModel.create({
                    userId: user === null || user === void 0 ? void 0 : user._id,
                    isActive: true,
                    loginAt: new Date()
                });
            }
            res.send(req.headers.authorization);
        }
    }
    catch (e) {
        res.send(e);
    }
    next();
});
exports.loginController = loginController;
