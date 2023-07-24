"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
//database
const database_1 = require("./src/provider/database");
const redis_1 = require("./src/provider/redis");
// Create an Express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Router
const login_1 = __importDefault(require("./src/router/login"));
const userSignUp_1 = __importDefault(require("./src/router/userSignUp"));
const postrout_1 = __importDefault(require("./src/router/postrout"));
const logout_1 = __importDefault(require("./src/router/logout"));
// for parsing application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'insta API',
            version: '1.0.0'
        }
    },
    apis: ['./src/router/login.ts', './src/router/logout.ts']
};
const swaggerDoc = (0, swagger_jsdoc_1.default)(swaggerOptions);
/**
 * @swagger
 * /hello:
 *   get:
 *     description: Get all Employee by Email
 *     responses:
 *       200:
 *         description: Success
 *
 */
app.get('/hello', (req, res) => {
    res.send("Hello");
});
app.use('/api-doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDoc));
app.use('/auth', login_1.default);
app.use('/auth', userSignUp_1.default);
app.use('/activity', postrout_1.default);
app.use('/auth', logout_1.default);
// Start the server
app.listen(3000, () => {
    (0, database_1.db)();
    (0, redis_1.redFun)();
    console.log('Server started on port 3000');
});
