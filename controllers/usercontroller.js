var User = require('../models/user.js');


exports.getAll = function (req, res){
	console.log('getting all users');
	User.find({}, function (err, users) {
	  if (err) return console.error(err);
	  console.log(users);
	  res.send(users);
	});
};