var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-max');

describe('next/max', function () {

  it('nx.max', function () {
    var arr = [2,3,4];

    assert.equal(
      nx.max(arr),
      4
    );
  });

});
