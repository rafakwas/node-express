const express = require('express');
const router = express.Router();
const orderController = require('../app/api/controllers/orders');

router.get('/', orderController.getAll);
router.post('/', orderController.create);
router.get('/:orderId', orderController.getById);
router.put('/:orderId', orderController.updateById);

module.exports = router;