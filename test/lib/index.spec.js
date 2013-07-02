var stream = require('stream');
var path = require('path');
var fs = require('fs');

var Plugin = require('feature-stream').Plugin;

var plugin = require('../../lib/index');
var helper = require('../helper');

var assert = helper.assert;

describe('feature-stream-geojson', function() {

  var data;
  before(function(done) {
    helper.before('basic', function(err, dir) {
      data = dir;
      done(err);
    });
  });

  after(helper.after);

  describe('main', function() {

    it('creates a plugin', function() {
      assert.instanceOf(plugin, Plugin);
    });

  });

});
