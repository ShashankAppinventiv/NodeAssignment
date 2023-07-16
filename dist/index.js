"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Routers
const loginRouter_1 = __importDefault(require("./src/router/auth/loginRouter"));
const signUp_1 = __importDefault(require("./src/router/auth/signUp"));
const follow_1 = __importDefault(require("./src/router/activity/follow"));
const unFollow_1 = __importDefault(require("./src/router/activity/unFollow"));
const search_1 = __importDefault(require("./src/router/search"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
//Routes for Authentication 
app.use('/auth', loginRouter_1.default);
app.use('/auth', signUp_1.default);
//Routes for user activites like follow and following
app.use('/user', follow_1.default);
app.use('/user', unFollow_1.default);
//searching the user by name
app.use('/user', search_1.default);
app.listen(port, () => {
    console.log("Listening at port 3000");
});
