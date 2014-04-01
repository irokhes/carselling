var mongoose = require('mongoose');

var Schema = mongoose.Schema;


vehicleSchema = new Schema({
  model: {
    type: String,
    required: true,
    trim: true
  }
});

// Compile a 'Vehicle' model using the userSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Vehicle' for these documents.
var Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;

userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  firstName: {
	type: String,
	required: true,
	trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
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
  },
  vehicles: [vehicleSchema]
});

// Compile a 'User' model using the userSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Users' for these documents.
var User = mongoose.model('User', userSchema);

module.exports = {
  User: User,
  Vehicle: Vehicle
}