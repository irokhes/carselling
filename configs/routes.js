var usercontroller = require('../controllers/usercontroller.js');
var homecontroller = require('../controllers/homecontroller.js');
var vehiclecontroller = require('../controllers/vehiclecontroller.js');

var routes = function (app){
	//Home
    app.get('/', homecontroller.home);
	
	//User
	app.get('/users', usercontroller.getAll);
	
	app.get('/users/:id', usercontroller.get);
	
	app.post('/users', usercontroller.create);
	
	app.put('/users:id', usercontroller.update);
	
	app.delete('/users:id', usercontroller.delete);
	
	
	//Vehicle
	app.get('/vehicles', vehiclecontroller.getAll);
	
	app.get('/vehicles/:id', vehiclecontroller.get);
	
	app.post('/vehicles/:id', vehiclecontroller.create);
	
	app.put('/vehicles/:id', vehiclecontroller.update);
	
	app.delete('/vehicles/:id', vehiclecontroller.delete);
}

module.exports = routes;