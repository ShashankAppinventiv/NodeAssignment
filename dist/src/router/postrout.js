"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//middleware
const session_1 = require("../middleware/session");
//controller
const postController_1 = require("../controllers/postController");
router.post('/post', session_1.sessionCheck, postController_1.postController);
exports.default = router;
