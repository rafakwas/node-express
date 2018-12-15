const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	userId: {
		type: String,
		trim: true,
		required: false
	},
	firstname: {
		type: String,
		trim: true,		
		required: true
	},
	lastname: {
		type: String,
		trim: true,
		required: true
	},
	email: {
		type: String,
		trim: true,
		required: true
	},
	address: {
		type: String,
		trim: true,
		required: true
	},
	postalCode: {
		type: String,
		trim: true,
		required: true
	},
	city: {
		type: String,
		trim: true,
		required: true
	},
	phone: {
		type: String,
		trim: true,
		required: true
	},
	totalPrice: {
		type: Number,
		trim: true,
		required: true
	},
	status: {
		type: String,
		trim: true,
		required: true
	},
	sendDate: {
		type: Date,
		trim: true,
		required: false
	},
	products: { type: [{
		id : {
			type: String,
			required: true
		},
		isChecked: {
			type: Boolean,
			required: true
		},
		product:  {
			id : {
				type: String,
				trim: true,
				required: true
			},
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
		}
	}]}
});

module.exports = mongoose.model('Order', OrderSchema)