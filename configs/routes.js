var usercontroller = require('../controllers/usercontroller.js');
var homecontroller = require('../controllers/homecontroller.js');


var routes = function (app){
	//Home
    app.get('/', homecontroller.home);
}

module.exports = routes;