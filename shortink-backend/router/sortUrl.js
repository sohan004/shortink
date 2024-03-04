const router = require('express').Router();
const { createShortUrl, getShortUrl, getDetails } = require('../controller/shortUrlController');
const checkValidUrl = require('../utilities/validUrl');

router.post('/', checkValidUrl, createShortUrl);
router.get('/:code', getShortUrl)
router.get('/d/:code', getDetails)

module.exports = router;