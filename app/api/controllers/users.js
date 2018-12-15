const userModel = require('../models/users');

module.exports = {
	create: function (req, res, next) {

		userModel.create({
			uid: req.body.id,
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
			role: req.body.role
		}, function (err, result) {
			if (err)
				next(err);
			else
				res.json({status: "success", message: "User added successfully!!!", data: null});

		});
	},

	authenticate: function (req, res, next) {
		userModel.findOne({uid:req.body.uid}, function(err, userInfo){
			if (err) {
				next(err);
			} else {
				res.json({
					status: "success",
					message: "user found!!!",
					data: {id: userInfo.id, email: userInfo.email, username: userInfo.username, role: userInfo.role}
				});			}
		});
	},
}
