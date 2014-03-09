var assert = require('assert');
var request = require('request');

describe("Routing home controller test", function(){
	describe("When an user enter in the home page", function(){
		it ("should show the welcome message", function(done){
		   request.get('/').expect(200);
			done();
		   });
		});
		
	});
});
