var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var roles = 'user staff mentor investor founder'.split(' ');


userSchema = new Schema({
  username: {
	type: String,
	required: true,
	trim: true
  }
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  displayName: {
    type: String,
    required: true,
    trim: true
  },
    password: String,
    email: {
    type: String,
    required: true,
    trim: true
  },
  approved: {
    type: Boolean,
    default: false
  },
  banned: {
    type: Boolean,
    default: false
  },  
  admin: {
    type: Boolean,
    default: false
  }
});

// Compile a 'User' model using the userSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Users' for these documents.
var User = mongoose.model('User', userSchema);