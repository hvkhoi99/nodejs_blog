const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/course.controller');

// vi o day cu the mot tuyen duong roi nen ta chi can dung 'get' thay 'use' la duoc
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.show);

module.exports = router;
