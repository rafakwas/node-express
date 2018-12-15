

const orderModel = require('../models/orders');

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		orderModel.findById(req.params.orderId, function(err, orderInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "Order found!!!", data:{orders: orderInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let ordersList = [];

		orderModel.find({}, function(err, orders){
			if (err){
				next(err);
			} else{
				for (let order of orders) {
					ordersList.push({
                        id: order._id,
                        userId: order.userId,
                        firstname: order.firstname,
                        lastname: order.lastname,
                        email: order.email,
                        address: order.address,
                        postalCode: order.postalCode,
                        city: order.city,
                        phone: order.phone,
                        totalPrice: order.totalPrice,
                        status: order.status,
                        products: order.products
					});
				}
				res.json({status:"success", message: "Orders list found!!!", data:{orders: ordersList}});

			}

		});
	},

	updateById: function(req, res, next) {
		orderModel.findByIdAndUpdate(req.params.orderId,{name:req.body.name}, function(err, orderInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Order updated successfully!!!", data:null});
			}
		});
	},
    
	create: function(req, res, next) {
		orderModel.create({
            userId: req.body.userId,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            address: req.body.address,
            postalCode: req.body.postalCode,
            city: req.body.city,
            phone: req.body.phone,
            totalPrice: req.body.totalPrice,
            status: req.body.status,
            products: req.body.products
        }, function (err, result) {
				  if (err)
				  	next(err);
				  else
				  	res.json({status: "success", message: "Order added successfully!!!", data: null});
				});
	},
}
