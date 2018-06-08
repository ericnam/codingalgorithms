let assert = require('assert');

describe('CONFIGURATIONS', ()=> {
    it('local : should return server 127.0.0.1:5000', (next)=> {
        var config = require('./../config/config')();
        assert(config.host, '127.0.0.1');
        assert(config.port, '5000');
        next();
    });
});