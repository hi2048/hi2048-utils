import { isFunction, isString } from '../type';

const log = type => (target, name, descriptor) => {
  if(isFunction(target[name])) {
    const originFunction = descriptor.value;

    descriptor.value = function(...args) {
      console.log(`${target.constructor.name}: `);
      console.log(`${type} start: ${name} (${args}).`);
  
      try {
        const ret = originFunction.call(this, ...args);
        console.log(`${type} succeed: ${name} (${args} => ${ret}).`);
      } catch(err) {
        console.log(`${type} failed: ${name} (${args} => ${err}).`);
      }
    }
  }

  return descriptor;
}

export const logger = (...args) => {
  if(!isString(args[0])) {
    return log('')(...args);
  }

  return log(...args);
}