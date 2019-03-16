// const assert = require('assert');
const assert = require('chai').assert;
const app = require('../index.js');

describe('app', function() {
	it('app should return hello', function() {
		assert.equal(app(), 'hello');
	})
})