describe('Main API', function() {
    var sinon = require("sinon");
    var chai = require("chai");
    var sinonChai = require("sinon-chai");
    chai.use(sinonChai);

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();



    // To be tested
    var api = require('./../../../modules/api/api');


    var req, res;

    beforeEach(function() {
        req = {
            query:{}
        };
    });

    it('should do something()', function(done) {
        res = {
            status: function() {
                return {
                    json: function() {
                        done();
                    }
                }
            },
        }
        api.doSomething(req, res)
    });
});

