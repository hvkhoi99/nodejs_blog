const express = require('express');
const router = express.Router();

const contactController = require('../app/controllers/contact.controller');

router.get('/', contactController.show);

module.exports = router;
