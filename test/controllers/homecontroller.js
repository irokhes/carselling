var should = require('should');
var request = require('request'),

describe("Routing home controller test", function(){
	describe("Default route", function(){
		it ("should show the home", function(done){
		   request.get('/').expect(200);
			done();
		   });
		});
		
	});
});
