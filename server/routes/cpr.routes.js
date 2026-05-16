const express = require('express');

const router = express.Router();

const controller = require('../controllers/cpr.controller');

router.post('/', controller.submitForm);

module.exports = router;