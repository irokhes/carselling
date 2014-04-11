var sinon = require('sinon');
var proxyquire = require('proxyquire');

var fakeUser = { name: 'fakeuser' };

var dependencies = {
    '../models/user.js': {
        find: sinon.stub().yields(null, fakeUser)
    }
}

var moduleUnderTest = proxyquire('/path/to/module', dependencies);

var result = moduleUnderTest.getAll(req, res);


//require('proxyquire').noCallThru()
//Andy Royle: ensures that the original dependency is *not* called