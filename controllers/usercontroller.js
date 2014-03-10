var User = require('../models/user.js');


exports.getAll = function (req, res){
	console.log('getting all users');
	return User.find(function (err, products) {
    if (!err) {
      return res.send(products);
    } else {
      return console.log(err);
    }
  });
};

exports.get = function(req, res){
	var id = req.params.id;
	console.log('getting user id: ' + id);
	return User.findById(id, function (err, user) {
    if (!err) {
      return res.send(user);
    } else {
      return console.log(err);
    }
  });
};

exports.create = function(req, res){
	var product;
	console.log('Post : ');
	console.log(req.body);
};