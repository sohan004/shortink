const ShortUrl = require("../model/shortUrlModel");

const random1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const genRandomCode = async (length) => {
    let result = '';
    await Promise.all(new Array(length).fill(0).map(async () => {
        result += random1.charAt(Math.floor(Math.random() * random1.length))
    }))
    const checkCode = await ShortUrl.findOne({ code: result });
    if (checkCode) {
        return genRandomCode(length);
    }
    return result;
}

module.exports = genRandomCode;