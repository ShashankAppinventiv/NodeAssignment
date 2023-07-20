"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//database
const database_1 = require("./src/provider/database");
// Create an Express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Router
const login_1 = __importDefault(require("./src/router/login"));
const userSignUp_1 = __importDefault(require("./src/router/userSignUp"));
const ffRoute_1 = __importDefault(require("./src/router/ffRoute"));
const postrout_1 = __importDefault(require("./src/router/postrout"));
const action_1 = __importDefault(require("./src/router/action"));
const session_1 = __importDefault(require("./src/router/session"));
// for parsing application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/auth', login_1.default);
app.use('/auth', userSignUp_1.default);
app.use('/activity', ffRoute_1.default);
app.use('/activity', postrout_1.default);
app.use('/activity', action_1.default);
app.use('/session', session_1.default);
// Start the server
app.listen(3000, () => {
    (0, database_1.db)();
    console.log('Server started on port 3000');
});
