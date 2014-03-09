var assert = require('assert'),
    sinon = require('sinon'),
    proxyquire = require('proxyquire');

describe("Routing user controller test", function(){
	describe("When listing all user", function(){
		it ("should show the user", function(){
		   var dependencies = {
                '../models/user': {find: [{ username : 'Val' }]}
            },
			subject = proxyquire('../controllers/usercontroller', dependencies),
			req = { json: sinon.stub() },
			res = { json: sinon.stub() };
			
			it("should return the correct status", function () {
				res.status.expect(400);
			});
	   });
	});
		
});

