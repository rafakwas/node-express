const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: {
		type: String,
		trim: true,		
		required: true
	},
	category: {
		type: String,
		trim: true,
		required: true
	},
	price: {
		type: Number,
		trim: true,
		required: true
	},
	description: {
		type: String,
		trim: true,
		required: true
	},
	imageUrl: {
		type: String,
		trim: true,
		required: true
	},
	productAdded: {
		type: Number,
		trim: true,
		required: true
	},
	quantity: {
		type: Number,
		trim: true,
		required: true
	},
	bargain: {
		type: Number,
		trim: true,
		required: true
	},
	till: {
		type: Number,
		trim: true,
		required: true
	}
});

module.exports = mongoose.model('Product', ProductSchema)