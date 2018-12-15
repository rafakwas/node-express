const express = require('express');
const router = express.Router();
const orderController = require('../app/api/controllers/orders');

router.get('/', orderController.getAll);
router.get('/:id', orderController.getById);
router.post('/', orderController.create);
router.get('/status/:status', orderController.getByOrderStatus);
router.get('/user/:id', orderController.getByUserId);
router.put('/:id', orderController.updateById);

module.exports = router;