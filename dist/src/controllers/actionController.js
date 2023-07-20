"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionController = void 0;
const action_1 = require("../model/action");
const action_2 = require("../model/action");
const postData = {
    UserId: "64b6751da177ac64572b4a35",
    PostId: "64b67ee6013b2d16ec8533e9",
    type: action_2.typrEnum.like,
};
const actionController = () => {
    action_1.actionSchema.create(postData)
        .then((savedUser) => {
        console.log('User saved:', savedUser);
    })
        .catch((error) => {
        console.error('Error saving user:', error);
    });
};
exports.actionController = actionController;
