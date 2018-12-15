const productModel = require('../models/products');

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		productModel.findById(req.params.productId, function(err, productInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "Product found!!!", data:{products: productInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let productsList = [];

		productModel.find({}, function(err, products){
			if (err){
				next(err);
			} else{
				for (let product of products) {
					productsList.push({
                        id: product._id,
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        description: product.description,
                        imageUrl: product.imageUrl,
                        productAdded: product.productAdded,
                        quantity: product.quantity,
                        bargain: product.bargain,
                        till: product.till
                    });
				}

				res.send(201,productsList);
				// res.json({status:"success", message: "Products list found!!!", data:{products: productsList}});
			}

		});
	},

	updateById: function(req, res, next) {
		productModel.findByIdAndUpdate(req.params.productId,{
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            productAdded: req.body.productAdded,
            quantity: req.body.quantity,
            bargain: req.body.bargain,
            till: req.body.till
		}, function(err, productInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Product updated successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		productModel.create({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            productAdded: req.body.productAdded,
            quantity: req.body.quantity,
            bargain: req.body.bargain,
            till: req.body.till
		}, function (err, result) {
				  if (err)
				  	next(err);
				  else
				  	res.json({status: "success", message: "Product added successfully!!!", data: null});
				});
	},
}