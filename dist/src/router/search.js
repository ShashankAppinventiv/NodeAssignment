"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Controller
const searchRouter_1 = require("../controller/searchRouter");
const router = express_1.default.Router();
router.post('/search', searchRouter_1.search);
exports.default = router;
