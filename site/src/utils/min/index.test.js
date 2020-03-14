const assert = require('assert');
import { min } from '.';

assert.equal(min(10, 5, 2), 2);
assert.equal(min(5, 10, [20, 2]), 2);