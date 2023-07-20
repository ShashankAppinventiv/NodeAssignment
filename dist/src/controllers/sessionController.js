"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionController = void 0;
const session_1 = require("../model/session");
const postData = {
    UserId: "64b5f1c586948942ee28525c",
    Token: "sudf2i73gbhdg7ydf3vdufy",
    date: "2023-07-13T06:55:24.698Z"
};
const sessionController = () => {
    session_1.sessionModel.create(postData)
        .then((savedUser) => {
        console.log('User saved:', savedUser);
    })
        .catch((error) => {
        console.error('Error saving user:', error);
    });
};
exports.sessionController = sessionController;
