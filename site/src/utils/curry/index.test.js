const assert = require('assert');
import { compose, pipe, curry } from '.';

assert.equal(compose(Math.abs, a => a + 1, a => Math.pow(a, 2))(10), 101);
assert.equal(pipe(Math.abs, a => a + 1, a => Math.pow(a, 2))(-10), 121);
assert.equal(curry((a, b, c) => a + b - c)(10)(9)(11), 8);