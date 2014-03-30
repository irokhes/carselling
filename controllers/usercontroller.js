var User = require('../models/models.js').User;


exports.getAll = function (req, res){
	console.log('getting all Model.Users');
	return User.find(function (err, user) {
    if (!err) {
      return res.send(user);
    } else {
      return console.log(err);
    }
  });
};

exports.get = function(req, res){
	var id = req.params.id;
	console.log('getting Model.User id: ' + id);
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
	user = new Model.User({
		username: req.body.Model.Username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		approved: true,
		banned: false
	});
	User.save(function (err) {
		if (!err) {
		  return console.log("created");
		} else {
		  return console.log(err);
		}
	});
	return res.send(user);	
};

exports.update = function(req, res){
	return User.findById(req.params.id, function(err, user){
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;
		
		return User.save(function(err){
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
		return User.remove(function(err){
			if(!err){
				console.log('deleted');
			}else{
				console.log(err);
			}
		});
	});
};