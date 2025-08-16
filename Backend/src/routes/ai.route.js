const express = require('express');
const { getResponse } = require('../controllers/ai.controller');

const router = express.Router();

router.post('/result', getResponse);


module.exports = router;