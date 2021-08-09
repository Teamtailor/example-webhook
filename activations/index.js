const express = require('express');

const config = require('./config');
const webhook = require('./webhook');
const auth = require('../middlewares/auth');

const router = express.Router();
router.use(auth);
router.get('/config', config);
router.post('/webhook', webhook);

module.exports = router;
