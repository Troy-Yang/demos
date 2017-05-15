let expect = require('chai').expect;
describe('timeout test', function (done) {
    var x = true;
    var f = function(){
        x = false;
        expect(x).to.be.not.ok;
        done();
    }
    setTimeout(f, 4000);
});