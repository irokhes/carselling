var User = require('../models/models.js').User;
var Vehicle  = require('../models/models.js').Vehicle;

exports.getAll = function (req, res){
	
};

exports.get = function(req, res){
	
};

exports.create = function(req, res){
	var userId = req.params.id;
	console.log('getting Model.User id: ' + userId);
	return User.findById(userId, function (err, user) {
    
      user.vehicles.push(new Vehicle({model: req.body.model}));
      return user.save(function(err){
      	if(!err)
      		console.log('Vehicle added to User collection');
      	else
      		console.log(err);
      	res.send(user);
      });
    });
};

exports.update = function(req, res){

};

exports.delete = function(req, res){

};