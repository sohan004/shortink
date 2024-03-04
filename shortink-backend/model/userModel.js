const mongoose = require("mongoose");
const { shortink_DB } = require("../db.config");

module.exports = shortink_DB.model("User", new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
}, {
    timestamps: true
}));