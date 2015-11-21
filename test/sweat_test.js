'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');
var path = require('path');
var fixture = path.resolve.bind(path, __dirname, 'fixtures');

sinon.assert.expose(assert, { prefix: '' });

var sweat = require('..');


describe('sweat', function(){

    describe('constructor', function(){
        it('should provide a DEFAULTS object', function(){
            assert.isObject(sweat.DEFAULTS);
        });
    });
});