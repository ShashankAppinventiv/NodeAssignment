"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Controller
const followFollowing_1 = require("../../controller/followFollowing");
const router = express_1.default.Router();
router.post('/follow', followFollowing_1.followerController);
exports.default = router;
