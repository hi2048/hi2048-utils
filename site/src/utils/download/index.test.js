const assert = require('assert');
import { isFunction } from '../type';
import { download }  from '.';

assert.equal(isFunction(download), true);