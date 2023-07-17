"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Controller
const friendList_1 = require("../../controller/friendList");
const router = express_1.default.Router();
router.post('/search', friendList_1.friendList);
exports.default = router;
