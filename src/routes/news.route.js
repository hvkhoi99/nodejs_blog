const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/news.controller');

//sap xep '/' xuong duoi cung vi khi choc vao news.route duong dan '/' luon dung nen no se lay '/' va bo qua
//nhung thu con lai
router.use('/:slug', newsController.show);

// '/' duoc hieu la khi choc vao news.route thi no se lay thang nay truoc
router.use('/', newsController.index);

module.exports = router;
