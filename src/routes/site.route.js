const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/site.controller');

// vi o day cu the mot tuyen duong roi nen ta chi can dung 'get' thay 'use' la duoc
router.get('/search', siteController.search);
router.get('/', siteController.home);

module.exports = router;
