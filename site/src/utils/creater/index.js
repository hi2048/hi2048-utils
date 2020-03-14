import { isFunction } from '../type';

export const creater = Target => config => class {
  constructor(...args) {
    if(isFunction(config)) {
      return new Target(config, ...args);
    }

    return new Target(Object.assign(config, ...args));
  }
};

const builder = creater => array => array.map(item => creater(item));

export const factory = Target => builder(creater(Target));