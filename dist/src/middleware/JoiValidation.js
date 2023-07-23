"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCridentials = exports.validateUser = void 0;
const joi_1 = __importDefault(require("joi"));
//Fucntion for user validation
const validateUser = (req, res, next) => {
    const validateAddress = joi_1.default.object({
        city: joi_1.default.string().required(),
        state: joi_1.default.string().required(),
        country: joi_1.default.string().required()
    });
    const userSchema = joi_1.default.object({
        name: joi_1.default.string().required(),
        email: joi_1.default.string().regex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
        password: joi_1.default.string().min(8).required(),
        isPrivateAccount: joi_1.default.boolean(),
        address: validateAddress
    });
    const result = userSchema.validate(req.body);
    if (result.error) {
        res.status(400).send("Enter the valid details");
    }
    else {
        next();
    }
};
exports.validateUser = validateUser;
const loginCridentials = (req, res, next) => {
    const isValid = joi_1.default.object({
        name: joi_1.default.string().required(),
        password: joi_1.default.string().min(8).required()
    });
    let result = isValid.validate(req.body);
    result.error ? res.status(400).send(result) : next();
};
exports.loginCridentials = loginCridentials;
