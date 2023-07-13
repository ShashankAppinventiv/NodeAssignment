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
exports.login = void 0;
const user_1 = require("../model/user");
const database_1 = __importDefault(require("../database/database"));
function createTable(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.authenticate();
            yield database_1.default.sync(); // Use { force: true } to drop the table if it already exists
            yield user_1.User.create({
                name: req.body.name,
                email: req.body.name
            });
            console.log('Table created successfully!');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body != null) {
            createTable(req);
        }
        res.send("Login Successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.login = login;
// module.exports=login;
