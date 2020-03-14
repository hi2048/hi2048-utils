import { random, isArray, isPlainObject, encode, createName } from '../../src/utils';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    { random(100) }
    <br />
    { isArray([1, 2]).toString() }
    <br />
    { isPlainObject({ x: 1 }).toString() }
    <br />
    { encode('苏小蜂') }
    <br />
    { createName() }
  </div>, document.getElementById("root"));