'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');

const geovar = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(geovar));
});

test('is correct', function(t) {
  t.plan(4);

  t.equal(geovar(1), 0);
  t.equal(geovar(0), Infinity);
  t.equal(geovar(0.5), 2);

  // from chromatic-orb's README example
  t.equal(geovar(0.23161598136624462), 14.323240336856015);
});
