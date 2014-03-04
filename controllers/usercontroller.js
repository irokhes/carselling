var User = require('./models/users.js');


exports.getAll = function (req, res, next){
	User.find(function (err, users) {
	  if (err) return console.error(err);
	  res.send(users);
	});
};