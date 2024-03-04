const validUrl = require('valid-url');

const checkValidUrl = (req, res, next) => {
    const { url } = req.body;
    if (!validUrl.isUri(url)) {
        return res.status(400).json({ message: 'Invalid URL' });
    }
    next();
}

module.exports = checkValidUrl;