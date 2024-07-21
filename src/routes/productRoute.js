// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/items', itemController.getItems);
router.post('/items', itemController.createItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = productRouter;
