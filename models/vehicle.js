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