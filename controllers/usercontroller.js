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
	var user;
	console.log('Post : ');
	console.log(req.body);
	user = new User({
		username: req.body.username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: req.body.password,
		approved: false,
		banned: false
	});
	product.save(function (err) {
		if (!err) {
		  return console.log("created");
		} else {
		  return console.log(err);
		}
	});
	return res.send(product);	
};

exports.update = function(req, res){
	return User.findById(req.params.id, function(err, user){
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;
		
		return user.save(function(err){
			if(!err){
				console.log('updated');
			}else{
				console.log(err);
			}
			res.send(user);
		});
	});
};

exports.delete = function(req, res){
	return User.findeById(req.params.id, function(err, user){
		return user.remove(function(err){
			if(!err){
				console.log('deleted');
			}else{
				console.log(err);
			}
		});
	};
};