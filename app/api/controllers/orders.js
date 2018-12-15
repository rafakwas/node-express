

const orderModel = require('../models/orders');

module.exports = {
	getByOrderStatus: function(req, res, next) {
        let ordersList = [];
        orderModel.find({status : req.params.status}, function(err, orders){
			if (err) {
				next(err);
			} else {
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
                res.status(201).send(ordersList);
			}
		});
	},

	getByUserId: function(req, res, next) {
        let ordersList = [];
        orderModel.find({userId : req.params.id}, function(err, orders){
			if (err) {
				next(err);
			} else {
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
                res.status(201).send(ordersList);
			}
		});
	},

    getById: function (req, res, next) {
        let orderProducts = [];
        orderModel.findById(req.params.id, function (err, order) {
            if (err) {
                next(err);
            } else {
                for (let orderProduct of order.products) {
                    orderProducts.push({
                        id: orderProduct.id,
                        isChecked: orderProduct.isChecked,
                        product: {
                            id: orderProduct.product.id,
                            name: orderProduct.product.name,
                            category: orderProduct.product.category,
                            price:orderProduct.product.price,
                            description:orderProduct.product.description,
                            imageUrl:orderProduct.product.imageUrl,
                            productAdded:orderProduct.product.productAdded,
                            quantity:orderProduct.product.quantity,
                            bargain:orderProduct.product.bargain,
                            till:orderProduct.product.till
                        }
                    });
                }
                res.status(201).send({
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
                    products: orderProducts
                });
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
				res.status(201).send(ordersList);
			}
		});
	},

	updateById: function(req, res, next) {
		orderModel.findByIdAndUpdate(req.params.id,{
			status : req.body.status,
			products : req.body.products
		}, function(err, orderInfo){
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
