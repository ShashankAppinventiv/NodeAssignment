"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//importing controller
const loginController_1 = require("../controller/loginController");
// Fetch all users
router.post('/login', loginController_1.login);
exports.default = router;
