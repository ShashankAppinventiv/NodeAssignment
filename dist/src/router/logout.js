"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//controller
const logoutController_1 = require("../controllers/logoutController");
/**
 * @swagger
 * /auth/logout:
 *   patch:
 *     description: Allow user to logout
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.patch('/logout', logoutController_1.logoutController);
exports.default = router;
