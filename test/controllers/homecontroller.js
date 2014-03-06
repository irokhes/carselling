var should = require('should');
var request = require('request'),

describe("Routing homecontroller test", function(){
	describe("Default route", function(){
		it ("should show the home", function(done){
		   request.post('localhost:3000').end(function(res){
			expect(res).to.exist;
			expect(res.status).to.equal(200);
			expect(res.body).to.contain('Hello');
			done();
		   });
		});
		
	});
});
