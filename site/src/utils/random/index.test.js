const assert = require('assert');
import { isNumber, isArray, isString } from '../type';
import { random, getNRandomNumbers, prefixZero } from '.';

assert.ok(isNumber(random(1, 100)));
assert.equal(random(1, 1), 1);
assert.equal(0 < random(2) && random(2) < 3, true);
assert.equal(0 < random() && random() < 11, true);
assert.equal(0 < random(1, 2) && random(1, 2) < 3, true);

assert.ok(isArray(getNRandomNumbers(10, {min: 1, max: 100})));
assert.ok(isString(prefixZero(10, 5)));