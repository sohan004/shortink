const mongoose = require("mongoose");
const { shortink_DB } = require("../db.config");

module.exports = shortink_DB.model("ShortUrl", new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    url: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        index: true,
    },
    click: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
}));