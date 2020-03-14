import { isObject } from '../type';

export const isPlainObject = obj => {
  if(isObject(obj)) {
    return Object.getPrototypeOf(obj) === Object.prototype;
  }

  return false;
};