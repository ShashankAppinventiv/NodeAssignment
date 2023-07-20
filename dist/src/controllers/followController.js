"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffController = void 0;
const followFollowing_1 = require("../model/followFollowing");
const followFollowing_2 = require("../model/followFollowing");
const newUser = {
    sender: "64b674eba177ac64572b4a33",
    receiver: "64b67c9f77b4ddc1246c3f91",
    status: followFollowing_2.statusEnum.pending
};
const ffController = () => {
    followFollowing_1.ffTable.create(newUser)
        .then((savedUser) => {
        console.log('User saved:', savedUser);
    })
        .catch((error) => {
        console.error('Error saving user:', error);
    });
};
exports.ffController = ffController;
