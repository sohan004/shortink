const ShortUrl = require("../model/shortUrlModel");
const genRandomCode = require("../utilities/genRandomCode");

const createShortUrl = async (req, res) => {
    try {
        const { url, userId } = req.body;
        const code = await genRandomCode(5);
        let data = await { url, code };
        if (userId) {
            data['user'] = userId;
        }
        const shortUrl = new ShortUrl(data);
        await shortUrl.save();
        res.json({ shortUrl: shortUrl.code });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const getShortUrl = async (req, res) => {
    try {
        const { code } = req.params;
        const shortUrl = await ShortUrl.findOne({ code });
        if (!shortUrl) {
            return res.status(404).json({ message: 'Short Url not found' });
        }
        await ShortUrl.findByIdAndUpdate(shortUrl?._id, { $inc: { click: 1 } })
        return res.redirect(shortUrl.url);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const getDetails = async (req, res) => {
    try {
        const { code } = req.params;
        const shortUrl = await ShortUrl.findOne({ code })
        if (!shortUrl) {
            return res.status(404).json({ message: 'Short Url not found' });
        }
        res.json(shortUrl);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = { createShortUrl, getShortUrl, getDetails };